import express from 'express'
import pool from '../db.js'
import bcrypt from 'bcrypt'
import { jsonWebTokens } from '../helpers/jwt-helper.js'

const loginRouter = express.Router()

loginRouter.post('/', async (req, res) => {
  try {
    const { email, password } = req.body
    const users = await pool.query(
      `SELECT * FROM users WHERE email = '${email}'`,
    )
    if (users.rows.length === 0)
      return res.status(401).json({ error: 'Incorrect Email' })
    const correctPassword = await bcrypt.compare(
      password,
      users.rows[0].password,
    )
    if (!correctPassword)
      return res.status(401).json({ error: 'Incorrect password' })
    let tokens = jsonWebTokens(users.rows[0])
    res.cookie('refresh_token', tokens.refreshToken, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
    })
    res.json(tokens)
  } catch (error) {
    res.status(401).json({ error: error.message })
  }
})

export default loginRouter

import express from 'express'
import pool from '../db.js'
import { authenticateToken } from '../middlewares/auth-middleware.js'

const privateUserDataRouter = express.Router()

privateUserDataRouter.get('/:userId', authenticateToken, async (req, res) => {
  try {
    const userId = req.params.userId

    const userDataResult = await pool.query(
      `SELECT * FROM user_data WHERE user_id = '${userId}'`,
    )

    if (userDataResult.rows.length === 0) {
      return res.status(404).json({ message: 'User data not found' })
    }

    const userData = userDataResult.rows[0]
    res.status(200).json({ userData })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default privateUserDataRouter

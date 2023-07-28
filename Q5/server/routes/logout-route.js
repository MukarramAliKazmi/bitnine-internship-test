import express from 'express'

const logoutRouter = express.Router()

logoutRouter.delete('/', (req, res) => {
  try {
    res.clearCookie('refresh_token', {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
    })
    return res.status(200).json({ message: 'Successfully Logedout' })
  } catch (error) {
    res.status(401).json({ error: error.message })
  }
})

export default logoutRouter

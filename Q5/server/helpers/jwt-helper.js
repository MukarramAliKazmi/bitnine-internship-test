import jwt from 'jsonwebtoken'

function jsonWebTokens({ id, firstname, lastname, email }) {
  const user = { id, firstname, lastname, email }
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '10m',
  })
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: '10d',
  })
  return { accessToken, refreshToken }
}

export { jsonWebTokens }

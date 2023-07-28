import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import axios from '@/api/axios'
import { refreshToken, logout } from '@/redux/reducers/auth-reducer'

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    async function refresh() {
      try {
        const res = await axios.get('/refresh', {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        })

        const { accessToken } = res.data

        dispatch(refreshToken(accessToken))
      } catch (refreshError) {
        dispatch(logout())
      }
    }
    refresh()
  }, [dispatch])

  return <div>{children}</div>
}

export default AuthProvider

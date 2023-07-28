import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import jwtDecode from 'jwt-decode'

import Button from '@/components/button'
import Input from '@/components/input'

import { login } from '@/redux/reducers/auth-reducer'
import { RootState } from '@/redux/store'

import axios from '@/api/axios'

const LoginForm = () => {
  const [formEmail, setFormEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const router = useRouter()

  const dispatch = useDispatch()

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    console.log(formEmail, password)

    if (isAuthenticated) {
      setError('You are already logged in')
      setTimeout(() => router.push('/welcome'), 3000)
      return
    }

    try {
      const res = await axios.post('/login', {
        email: formEmail,
        password,
      })

      setLoading(false)

      const { accessToken } = res.data

      const decodedToken: any = jwtDecode(accessToken)

      const { id, firstname, lastname, email } = decodedToken

      dispatch(
        login({
          user: { id, firstname, lastname, email },
          accessToken,
        }),
      )

      router.push('/welcome')
    } catch (reserror: any) {
      setLoading(false)
      setError(reserror?.response?.data?.error)
    }
  }

  return (
    <form
      className="border bg-white rounded-xl w-full max-w-lg p-4 sm:px-8 sm:p-6 flex flex-col gap-2 sm:gap-4"
      onSubmit={handleSubmit}
    >
      <div
        className={`bg-red-100 text-red-600 px-4 py-1 text-sm rounded-md ${
          !error && 'hidden'
        }`}
      >
        {error}
      </div>
      <Input
        label="Email"
        className="w-full"
        id="formEmail"
        type="email"
        placeholder="Email"
        value={formEmail}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormEmail(e.target.value)
        }
      />
      <Input
        label="Password"
        className="w-full"
        id="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
      <Button
        loading={loading}
        className="!w-full mt-4 px-4 py-2 rounded-full"
        type="submit"
      >
        Sign In
      </Button>
    </form>
  )
}

export default LoginForm

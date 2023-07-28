import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import Button from '@/components/button'
import Input from '@/components/input'

import { RootState } from '@/redux/store'

import axios from '@/api/axios'

const SignupForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    if (isAuthenticated) {
      setError('You are already logged in')
      setTimeout(() => router.push('/welcome'), 3000)
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    try {
      await axios.post('http://localhost:8080/signup', {
        firstname: firstName,
        lastname: lastName,
        email,
        password,
      })

      setLoading(false)
      router.push('/login')
    } catch (reqerror: any) {
      setLoading(false)
      setError(reqerror.response.data.error)
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="First Name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="firstName"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFirstName(e.target.value)
          }
        />
        <Input
          label="Last Name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="lastName"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLastName(e.target.value)
          }
        />
      </div>
      <Input
        label="Email"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <Input
          label="Confirm Password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(e.target.value)
          }
        />
      </div>
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

export default SignupForm

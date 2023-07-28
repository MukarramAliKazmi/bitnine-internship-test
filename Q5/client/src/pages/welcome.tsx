import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'

import { useRouter } from 'next/router'

import Button from '@/components/button'

import { RootState } from '@/redux/store'
import { logout } from '@/redux/reducers/auth-reducer'

import useAxiosPrivate from '@/hooks/use-axios-private'
import axios from '@/api/axios'

const Welcome: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  )
  const user = useSelector((state: RootState) => state.auth.user)
  const dispatch = useDispatch()
  const [secretData, setSecretData] = useState('')
  const router = useRouter()

  const axiosPrivate = useAxiosPrivate()

  const getSecretData = async () => {
    try {
      const res = await axiosPrivate.get(`/privateuserdata/${user?.id}`)
      const { data } = res.data.userData
      setSecretData(data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleLogout = async () => {
    try {
      await axios.delete('/logout', {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      dispatch(logout())
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, router])

  return (
    <div className="w-full h-screen relative text-center bg-white flex items-center justify-center">
      <nav className="flex justify-between sm:h-20 md:h-24 h-16 items-center fixed top-0 left-0 right-0 bg-white lg:px-9 md:px-8 px-4">
        <div className="">
          <Image
            src="/bitnine_logo.png"
            alt="Bitnine Logo"
            width={250}
            height={37}
            priority
            className="w-32 sm:w-48 md:w-56 select-none"
          />
        </div>
        <div className="flex gap-1 sm:gap-2">
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </nav>
      <div />
      <div className="flex flex-col gap-4 items-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
          Welcome {user?.firstname} {user?.lastname}
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl">
          Retrieve your confidential data securely from the backend, accessible
          only through a valid JWT token.
        </h2>
        <Button onClick={getSecretData}>Get data</Button>
        <p className={`${!secretData && 'hidden'} text-lg`}>{secretData}</p>
      </div>
    </div>
  )
}

export default Welcome

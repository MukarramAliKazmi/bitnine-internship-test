import React from 'react'
import Image from 'next/image'

import LoginForm from '@/components/login-form'

const Login = () => (
  <div className="flex bg-[url('/login_background.png')] justify-center items-center h-screen p-4 pt-16">
    <Image
      src="/bitnine_logo_white.svg"
      alt="Bitnine Logo"
      width={250}
      height={37}
      priority
      className="fixed -top-4 left-4 sm:left-10 md:left-16 w-32 sm:w-48 md:w-56 select-none"
    />
    <div className="w-full max-w-lg p-4 sm:px-8 sm:p-6">
      <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        Log in
      </h1>
      <LoginForm />
    </div>
  </div>
)

export default Login

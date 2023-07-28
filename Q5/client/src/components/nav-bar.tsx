import React, { useState } from 'react'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa'

import NavBarItems from '@/components/nav-bar-items'

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="grid grid-cols-4">
      <div className="col-span-2 h-16 sm:h-20 md:h-24 xl:col-span-1 flex items-center justify-start lg:px-9 md:px-8 px-4 py-4 bg-white">
        <Image
          src="/bitnine_logo.png"
          alt="Bitnine Logo"
          width={250}
          height={37}
          priority
          className="w-32 sm:w-48 md:w-56 select-none"
        />
      </div>
      <div className="flex items-center justify-end grid-row-1 col-span-2 lg:px-9 md:px-8 px-4 py-4 xl:hidden bg-white">
        <FaBars className="cursor-pointer w-5 h-5" onClick={handleToggle} />
      </div>
      <div
        className={`${
          isOpen ? 'h-full border-t' : 'h-0'
        } xl:border-none xl:h-auto box-border select-none bg-white col-span-4 transition-[height] xl:duration-0 duration-300 ease-out overflow-hidden xl:overflow-visible xl:col-span-3 grid-row-2 xl:grid-row-1 lg:px-9 md:px-6 px-2 py-0 xl:shadow-none shadow-md`}
      >
        <NavBarItems />
      </div>
    </nav>
  )
}

export default NavBar

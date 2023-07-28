import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

interface NavItemProps {
  label: string
  href: string
  children?: React.ReactNode | React.ReactNode[]
}

const NavItem: React.FC<NavItemProps> = ({ ...props }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative h-full flex flex-col cursor-pointer bg-white group">
      <a
        onClick={() => setIsOpen(!isOpen)}
        href={props.href}
        className="text-zinc-800 whitespace-nowrap h-full flex items-center justify-between bg-white hover:text-yellow-500 border-b xl:border-none py-3 xl:px-3 px-2 transition-all duration-300"
      >
        {props.label}
        <FaChevronUp
          className={`xl:hidden ${(!props.children || !isOpen) && 'hidden'}`}
        />

        <FaChevronDown
          className={`xl:hidden ${(!props.children || isOpen) && 'hidden'}`}
        />
      </a>
      <div
        className={`xl:absolute xl:max-h-max top-24 xl:h-full ease-in-out xl:opacity-0 xl:scale-0 left-0 w-full xl:w-56 transform transition-[opacity,max-height] duration-500 group-hover:xl:opacity-100 group-hover:xl:scale-100
          ${isOpen ? 'max-h-72' : 'max-h-0'} 
          ${!props.children && 'hidden'}
        `}
      >
        {props.children}
      </div>
    </div>
  )
}

export default NavItem

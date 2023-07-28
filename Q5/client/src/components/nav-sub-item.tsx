import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp, FaChevronRight } from 'react-icons/fa'

interface NavSubItemProps {
  label: string
  href: string
  children?: React.ReactNode | React.ReactNode[]
}

const NavSubItem: React.FC<NavSubItemProps> = ({ ...props }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="relative bg-white group/subitem">
      <a
        onClick={handleIsOpen}
        href={props.href}
        className="flex items-center justify-between w-full border-b border-zinc-600 py-2 px-4 h-full bg-zinc-900/70 hover:bg-zinc-900/90 text-white"
      >
        {props.label}
        <FaChevronUp
          className={`xl:hidden ${(!props.children || !isOpen) && 'hidden'}`}
        />

        <FaChevronDown
          className={`xl:hidden ${(!props.children || isOpen) && 'hidden'}`}
        />
        <FaChevronRight
          className={!props.children ? 'hidden' : 'hidden xl:inline'}
        />
      </a>
      <div
        className={`
          xl:absolute xl:max-h-max group-hover/subitem:xl:opacity-100 xl:scale-0 group-hover/subitem:xl:scale-100 top-0 left-56 xl:h-full xl:overflow-visible overflow-hidden ease-in-out xl:opacity-0 w-full xl:w-56 transform transition-[opacity,max-height] duration-500 
          ${isOpen ? 'max-h-40' : 'max-h-0'}
          ${!props.children && 'hidden'}
        `}
      >
        {props.children}
      </div>
    </div>
  )
}

export default NavSubItem

import React, { useState } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'

interface SearchBarProps {
  placeholder: string
  onChange: (value: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onChange }) => {
  const [expanded, setExpanded] = useState(false)

  const handleExpand = () => {
    setExpanded(true)
  }

  const handleCollapse = () => {
    setExpanded(false)
    onChange('')
  }

  return (
    <div className="relative">
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-md cursor-pointer duration-300 ease-in-out transition-[width] ${
          expanded ? 'w-64 bg-zinc-400' : ''
        }`}
      >
        <FaSearch
          onClick={handleExpand}
          className={`w-10 h-10 p-3 block text-gray-600 duration-0 ${
            expanded && 'hidden opacity-0'
          }`}
        />
        <input
          type="text"
          className={`${
            expanded ? 'block' : 'hidden'
          } ml-2 mr-8 outline-none bg-transparent text-white placeholder-zinc-300`}
          placeholder={placeholder}
          onChange={e => onChange(e.target.value)}
        />
        <FaTimes
          className={`${
            expanded ? 'block' : 'hidden'
          } w-5 h-5 fill-zinc-300 cursor-pointer`}
          onClick={handleCollapse}
        />
      </div>
    </div>
  )
}

export default SearchBar

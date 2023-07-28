import React from 'react'
import { FaSpinner } from 'react-icons/fa'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  loading?: boolean
}

const Button: React.FC<ButtonProps> = ({ ...props }) => (
  <button
    type="button"
    {...props}
    disabled={props.loading}
    className={`bg-blue-800 flex items-center justify-center w-max text-white rounded-[0.25rem] px-3 py-1.5 hover:text-yellow-500 ${
      props.className || ''
    }`}
  >
    {props.loading ? (
      <FaSpinner className="animate-spin mr-3" />
    ) : (
      props.children
    )}
  </button>
)

export default Button

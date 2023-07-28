import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input: React.FC<InputProps> = ({ label, ...props }) => (
  <div className="flex flex-col gap-1">
    <label className="block" htmlFor={props.id}>
      {label}
    </label>
    <input
      className="w-full px-4 py-2 rounded-full border"
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  </div>
)

export default Input

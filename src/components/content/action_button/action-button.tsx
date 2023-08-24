import React from 'react'
import { ButtonProps } from '@/components/content/button/button'

interface ActionButtonProps extends ButtonProps {
  icon: React.ElementType
}

export const ActionButton = ({
  label,
  onClick,
  icon,
  disabled,
}: ActionButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${
        disabled ? 'opacity-50 cursor-auto' : ''
      } flex items-center space-x-2 text-gray-900 uppercase text-sm font-bold py-2 px-4 rounded`}
    >
      <span>{label}</span>
      {React.createElement(icon, { className: 'ml-2 w-6 h-6' })}
    </button>
  )
}

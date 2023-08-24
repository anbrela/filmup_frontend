import React from 'react'

export type ButtonProps = {
  label: string
  onClick?: () => void
  disabled?: boolean
  testId?: string
  kind?: 'primary' | 'secondary'
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

export const Button = ({
  label,
  onClick,
  testId,
  type,
  kind,
  className,
  disabled,
}: ButtonProps) => {
  const getKind = (type: string | undefined) => {
    if (type === 'secondary' && !disabled) {
      return 'border border-primary text-sm uppercase font-medium hover:bg-primary hover:text-white'
    }

    if (disabled) {
      return 'bg-gray-300 text-white'
    }

    return 'bg-secondary uppercase text-sm font-medium text-white hover:bg-primary'
  }

  return (
    <button
      type={type}
      className={`p-3 px-4 rounded shadow-sm ${getKind(kind)} ${className}`}
      data-testid={testId}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

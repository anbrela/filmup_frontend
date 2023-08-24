import React from 'react'

type ButtonGroupProps = {
  children: React.ReactNode
  className?: string
  align: 'left' | 'right' | 'center'
}

export const ButtonGroup = ({
  children,
  className,
  align,
}: ButtonGroupProps) => {
  const getAlignment = (position: string) => {
    switch (position) {
      case 'left':
        return 'justify-start'
      case 'right':
        return 'justify-end'
      case 'center':
        return 'justify-center'
      default:
        return 'justify-start'
    }
  }

  return (
    <div
      className={`w-full flex items-center ${getAlignment(align)} ${className}`}
    >
      {children}
    </div>
  )
}

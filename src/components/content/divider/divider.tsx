type DividerProps = {
  className?: string
  contrast?: 'high'
}

export const Divider = ({ className, contrast }: DividerProps) => {
  return (
    <div
      className={`border-b ${
        contrast === 'high' ? 'border-b-gray-200' : 'border-b-gray-100'
      } ${className}`}
    />
  )
}

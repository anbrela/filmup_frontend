type ColumnProps = {
  children: React.ReactNode
  className?: string
  size?: 'large' | 'medium' | 'small'
}

export const Column = ({ children, className, size }: ColumnProps) => {
  const getSize = (size: string | undefined) => {
    switch (size) {
      case 'large':
        return 'col-span-3'
      case 'medium':
        return 'col-span-2'
      default:
        return 'col-span-1'
    }
  }

  return (
    <div
      className={`ml-3 mt-3 h-14  mb-10 flex flex-col ${getSize(
        size
      )} ${className}`}
    >
      {children}
    </div>
  )
}

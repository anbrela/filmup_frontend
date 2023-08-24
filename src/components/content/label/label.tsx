type LabelProps = {
  text: string
  className?: string
  onClick?: () => void | undefined
}

export const Label = ({ text, className, onClick }: LabelProps) => {
  return (
    <span
      onClick={onClick}
      className={`uppercase text-xs font-medium p-2 px-3 py-1 ${className}`}
    >
      {text}
    </span>
  )
}

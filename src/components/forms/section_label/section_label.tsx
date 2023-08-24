type SectionLabelProps = {
  label: string
  className?: string
}

export const SectionLabel = ({ label, className }: SectionLabelProps) => {
  return (
    <div className={`text-sm font-bold text-gray-600 ${className}`}>
      {label}
    </div>
  )
}

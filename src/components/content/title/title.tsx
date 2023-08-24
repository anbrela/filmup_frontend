type TitleProps = {
  text: string
  className?: string
  kind?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Title = ({ text, className, kind }: TitleProps) => {
  if (kind === 'h1') {
    return <h1 className={`text-3xl font-bold ${className}`}>{text}</h1>
  }

  if (kind === 'h2') {
    return <h2 className={`text-2xl font-bold ${className}`}>{text}</h2>
  }

  if (kind === 'h3') {
    return <h3 className={`text-xl font-bold ${className}`}>{text}</h3>
  }

  if (kind === 'h4') {
    return <h4 className={`text-lg font-bold ${className}`}>{text}</h4>
  }

  if (kind === 'h5') {
    return <h5 className={`text-base font-bold  ${className}`}>{text}</h5>
  }

  if (kind === 'h6') {
    return (
      <h6 className={`text-sm font-bold text-gray-800 ${className}`}>{text}</h6>
    )
  }

  return <span className={className}>{text}</span>
}

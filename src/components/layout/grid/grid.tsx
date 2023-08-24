export const Grid = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className="px-8">{children}</div>
}

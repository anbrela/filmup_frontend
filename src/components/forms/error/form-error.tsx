export const FormError = ({ error }: { error: string }) => {
  if (!error) return null

  return (
    <div className="absolute -bottom-5 left-0 text-xs text-secondary font-semibold">
      {error}
    </div>
  )
}

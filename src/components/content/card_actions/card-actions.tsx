import { CheckIcon, XMarkIcon, TrashIcon } from '@heroicons/react/24/outline'

type CardActionsProps = {
  className?: string
  onAccept?: () => void
  onReject?: () => void
  onRemove?: () => void
}

export const CardActions = ({
  className,
  onAccept,
  onReject,
  onRemove,
}: CardActionsProps) => {
  return (
    <div
      className={`flex flex-row justify-end space-x-2 items-center ${className}`}
    >
      {onAccept && (
        <CheckIcon
          onClick={onAccept}
          className="w-6 h-6 hover:scale-110 hover:text-secondary cursor-pointer"
        />
      )}
      {onReject && (
        <XMarkIcon
          onClick={onReject}
          className="w-6 h-6 hover:scale-110 hover:text-secondary cursor-pointer"
        />
      )}
      {onRemove && (
        <TrashIcon
          onClick={onRemove}
          className="w-6 h-6 hover:scale-110 hover:text-secondary cursor-pointer"
        />
      )}
    </div>
  )
}

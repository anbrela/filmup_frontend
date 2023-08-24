import React from 'react'
import { motion } from 'framer-motion'

type TooltipProps = {
  children: React.ReactNode | string
  className?: string
  classNameContent?: string
  content?: React.ReactNode | string
}

export const Tooltip = ({
  children,
  className,
  content,
  classNameContent,
}: TooltipProps) => {
  const [show, setShow] = React.useState(false)

  const TooltipContent = () => {
    if (!show) {
      return null
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute z-50 bg-secondary not-shadow top-8 left-0 text-white rounded p-2 text-xs "
      >
        {content}
      </motion.div>
    )
  }

  return (
    <div
      className={`${className} w-full relative`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <TooltipContent />
      <div className={classNameContent}>{children}</div>
    </div>
  )
}

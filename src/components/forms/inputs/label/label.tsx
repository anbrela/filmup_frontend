import { motion } from 'framer-motion'
import React from 'react'

type LabelProps = {
  label: string
  className?: string
  required?: boolean
  hasError?: boolean
  errorClasses?: string
  animate?: any
  variants?: any
  htmlFor?: string
}

export const Label = ({
  label,
  required,
  hasError,
  errorClasses,
  animate,
  variants,
  htmlFor,
}: LabelProps) => {
  return (
    <motion.label
      className={`uppercase text-xs z-10 truncate pr-12 absolute left-0 -top-2 ${
        hasError ? errorClasses || 'text-red-500' : ''
      }`}
      animate={animate}
      variants={variants}
      htmlFor={htmlFor}
    >
      {required ? `${label} *` : label}
    </motion.label>
  )
}

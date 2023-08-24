import { useState, useEffect } from 'react'
const getIsMobile = () => window.innerWidth <= 768

export const useWindowSize = () => {
  const [isMobile, setIsMobile] = useState<boolean>(getIsMobile())

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile())
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return { isMobile }
}

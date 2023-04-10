import { createContext, useCallback, useEffect, useState } from "react";


export const Scroll = createContext({
  scrollY: 0
})

export const ScrollProvider = ({ children }: any): JSX.Element => {
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, {passive: true})

    return () => document.removeEventListener('scroll', handleScroll)
  }, [handleScroll])


  return (
    <Scroll.Provider value={{ scrollY }}>
      {children}
    </Scroll.Provider>
  )
}
'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const PreloaderContext = createContext({
  alreadyShown: false,
  checked: false,
  markShown: () => {},
})

export function PreloaderProvider({ children }) {
  const [alreadyShown, setAlreadyShown] = useState(false)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setAlreadyShown(sessionStorage.getItem('preloaderShown') === 'true')
    setChecked(true)
  }, [])

  const markShown = () => {
    sessionStorage.setItem('preloaderShown', 'true')
    document.documentElement.classList.remove('preloader-active')
    document.documentElement.classList.add('preloader-done')
    setAlreadyShown(true)
  }

  return (
    <PreloaderContext.Provider value={{ alreadyShown, checked, markShown }}>
      {children}
    </PreloaderContext.Provider>
  )
}

export const usePreloader = () => useContext(PreloaderContext)

export default PreloaderProvider

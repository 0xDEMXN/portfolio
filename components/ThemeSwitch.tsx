"use client"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import styles from '@/styles/modules/ThemeSwitch.module.scss'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) { return null }

  const toSet = resolvedTheme === 'dark' ? 'light' : 'dark'

  return (
    <>
        <span className={styles.themeSwitch} onClick={() => setTheme(toSet)}>{toSet} mode</span>
    </>
  )
}

export default ThemeSwitch
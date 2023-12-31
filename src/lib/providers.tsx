"use client"
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Providers({
  children
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) { return children }
  
  return (
    <ThemeProvider defaultTheme="light">
      {children}
    </ThemeProvider>
  )
}

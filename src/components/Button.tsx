'use client';
import { useRouter } from "next/navigation";
import styles from '@/styles/modules/Button.module.scss'

const Button = (
  { children, path, className }: 
  { children: React.ReactNode, path: string, className?: string }
) => {
  const router = useRouter()
  
  const handleClick = () => { router.push(path) }
  const handleMouseEnter = () => { router.prefetch(path); console.log("prefetching") }

  return (
    <button 
      className={`${styles.button} ${className}`} 
      onClick={handleClick} 
      onMouseEnter={handleMouseEnter}
    >
      { children }
    </button>
  )
}

export default Button
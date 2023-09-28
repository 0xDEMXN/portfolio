'use client';
import { useRouter } from "next/navigation";
import styles from './button.module.css';

const Button = (
  { children, path, className }: 
  { children: React.ReactNode, path: string, className?: string }
) => {
  const router = useRouter()

  return (
    <button className={`${styles.button} ${className}`} onClick={() => router.push(path)}>
      { children }
    </button>
  )
}

export default Button
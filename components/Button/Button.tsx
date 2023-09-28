'use client';
import { useRouter } from "next/navigation";
import './button.css'

const Button = (
  {children, path, className}: 
  {children: React.ReactNode, path: string, className?: string}
) => {
  const router = useRouter()

  return (
    <button className={className} onClick={() => router.push(path)}>
      { children }
    </button>
  )
}

export default Button
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// combine Tailwind and React class names
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

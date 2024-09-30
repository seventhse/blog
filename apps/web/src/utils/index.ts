import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export type CnInputs = ClassValue | ClassValue[]

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export * from './env'
export * from './route-helper'

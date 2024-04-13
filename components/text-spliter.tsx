'use client'
import { startTransition, useState } from 'react'

import { useCustomerInterval } from '@/hooks/client'

const orgText = 'React & Next.js 14'
export const TextSplitter = () => {
  const [count, setCount] = useState(0)
  const pausedTimeRef = useCustomerInterval(() => {
    startTransition(() => {
      setCount((prevState) => {
        if (prevState === orgText.length) {
          return 0
        }
        const val = prevState + 1
        if (val === orgText.length - 1) {
          pausedTimeRef.current = 1000
        }
        return val
      })
    })
  }, 100)
  return (
    <h1 className="min-h-28 text-xl font-bold leading-relaxed sm:max-md:min-h-20 md:text-2xl xl:text-4xl">
      This is a Next.js Boilerplate
      <br className="sm:max-md:hidden" />
      Base on <span>{orgText.slice(0, count)}</span>
      {count > 0 && (
        <span
          className="ml-1"
          aria-hidden="true"
        >
          |
        </span>
      )}
    </h1>
  )
}

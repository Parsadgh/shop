"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Custom404() {
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1
        className={`text-9xl font-extrabold text-gray-200 transform transition-transform duration-700 ${
          fadeIn ? 'translate-y-0 scale-100' : 'translate-y-10 scale-90 opacity-0'
        }`}
      >
        404
      </h1>
      <h2
        className={`text-2xl font-semibold text-gray-700 mt-4 transition-opacity duration-700 ${
          fadeIn ? 'opacity-100' : 'opacity-0'
        }`}
      >
        صفحه مورد نظر پیدا نشد
      </h2>
      <p
        className={`text-gray-500 mt-2 transition-opacity duration-700 delay-150 ${
          fadeIn ? 'opacity-100' : 'opacity-0'
        }`}
      >
        ممکنه لینک اشتباه باشه یا صفحه حذف شده باشه.
      </p>
      <Link
        href="/"
        className={`mt-6 inline-block rounded-xl bg-gray-900 px-6 py-3 text-white font-medium hover:bg-black transition transform hover:-translate-y-1 ${
          fadeIn ? 'opacity-100' : 'opacity-0'
        }`}
      >
        بازگشت به خانه
      </Link>
    </main>
  )
}

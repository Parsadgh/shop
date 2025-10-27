'use client'
import Link from 'next/link'
import useShop from '../store/store'

export default function CartIcon() {
  const basketCount = useShop((state) =>
    state.basket.reduce((sum, item) => sum + item.quantity, 0)
  )

  return (
    <Link
      href="/basket"
      className="relative flex items-center gap-2 text-gray-700 hover:text-black"
    >
      {/* svg */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2m6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2z"></path>
      </svg>

      {basketCount > 0 && (
        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {basketCount}
        </span>
      )}
    </Link>
  )
}

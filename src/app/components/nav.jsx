'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileMenu() {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => setMenuOpen(!menuOpen)

    const menuLinks = [
        { title: 'صفحه نخست', href: '/' },
        { title: 'فروشگاه', href: '/shop' },
        { title: 'سوالات متداول', href: '/faq' },
        { title: 'مقالات', href: '/articles' },
    ]

    return (
        <div className="lg:hidden relative">
            {/* همبرگر */}
            <button
                className="flex flex-col justify-center items-center gap-1 w-8 h-8 z-20 relative"
                onClick={toggleMenu}
            >
                <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>

            {/* منوی بازشونده */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.nav
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-10 flex flex-col items-start p-6 gap-4"
                    >
                        <div className='mt-12 flex flex-col gap-4 w-full'>
                            {menuLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-gray-800 font-medium hover:text-blue-600 transition-colors"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    )
}

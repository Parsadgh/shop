import React from 'react'
import Image from "next/image"
import Link from "next/link"

export default function Collections() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 w-full">
            <Link
                href="/shop"
                className="relative group overflow-hidden h-screen"
            >
                <Image
                    src="/ceecee-sun.webp"
                    alt="عینک آفتابی مردانه"
                    fill
                    className="object-cover transition-transform duration-400 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-700"></div>
                <h2 className="absolute bottom-8 right-8 text-2xl font-bold text-white z-10">
                    عینک آفتابی مردانه
                </h2>
            </Link>


            <Link
                href="/shop"
                className="relative group overflow-hidden h-screen"
            >
                <Image
                    src="/ceecee-sunglass-woman.webp"
                    alt="عینک آفتابی زنانه"
                    fill
                    className="object-cover transition-transform duration-400 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-700"></div>
                <h2 className="absolute bottom-8 right-8 text-2xl font-bold text-white z-10">
                    عینک آفتابی زنانه
                </h2>
            </Link>
        </section>
    )
}

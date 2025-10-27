import React from 'react'
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center text-center text-white ">
            <Image
                src="/ceecee-1536x864.webp"
                alt="Hero background"
                fill
                priority
                className="object-cover"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 flex flex-col items-center space-y-4 px-4">
                <h2 className="text-sm tracking-widest font-semibold">CEECEE</h2>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    وقتی نگاه، <br /> امضای توست
                </h1>
                <p className="text-gray-200 text-sm md:text-base">
                    جدیدترین عینک‌های آفتابی؛ آینده را امروز ببین
                </p>
                <Link
                    href="/shop"
                    className="mt-4 border-b-2 border-white hover:text-gray-300 transition-colors"
                >
                    فروشگاه
                </Link>
            </div>
        </section>

    )
}

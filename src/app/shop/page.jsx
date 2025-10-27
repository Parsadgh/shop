import React from 'react'
import Image from "next/image"
import Link from "next/link"
import products from '../data/products'

export default function BestSellers() {

    return (
        <section className="bg-[#f7f7f7] text-white py-16">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-3xl font-bold text-right mb-12">
                    <span className="border-b-4 pb-2 text-[#485059]">فروشگاه</span>
                </h2>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {products.map((val) => (
                        <div
                            key={val.id}
                            className="group bg-white text-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <Link href={val.url}>
                                <div className="relative w-full h-64 overflow-hidden">
                                    <Image
                                        src={val.img}
                                        width={400}
                                        height={400}
                                        alt={val.title}
                                        className="w-full h-64 object-cover transition-opacity duration-500 group-hover:opacity-0"
                                    />
                                    <Image
                                        src={val.img2 || val.img}
                                        width={400}
                                        height={400}
                                        alt={val.title}
                                        className="w-full h-64 object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                    />
                                </div>
                            </Link>


                            <div className="p-4 flex flex-col justify-between h-[150px]">
                                <h3 className="font-semibold text-xs mb-2 text-right">{val.title}</h3>

                                <div className="flex items-center justify-between text-sm text-gray-600">
                                    <span>{val.price.toLocaleString()} تومان</span>
                                    <Link
                                        href={val.url}
                                        className="bg-slate-700 text-white px-3 py-1 rounded hover:bg-slate-900 transition-colors"
                                    >
                                        مشاهده جزئیات
                                    </Link>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    )
}

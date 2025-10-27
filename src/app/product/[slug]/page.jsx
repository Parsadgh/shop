"use client"
import React, { useState } from "react"
import Image from "next/image"
import products from "@/app/data/products"
import ClickToBasket from "./clickToBasket"
import Link from "next/link"

export default function ProductPage({ params }) {
  const { slug } = React.use(params)
  const product = products.find((item) => item.slug === slug)
  const [mainImage, setMainImage] = useState(product?.img)

  if (!product) {
    return (
      <main className="flex justify-center items-center h-screen text-red-600">
        محصول مورد نظر یافت نشد.
      </main>
    )
  }

  return (
    <main dir="rtl" className="flex flex-col md:flex-row-reverse gap-12 px-6 md:px-16 py-12 bg-white">

      <div className="md:w-1/2 flex flex-col justify-start text-right">
        <h1 className="text-2xl font-semibold mb-4 text-gray-900">
          {product.title}
        </h1>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {product.desc || "عینک آفتابی با کیفیت بالا و طراحی خاص برای استایل روزمره."}
        </p>

        <div className="text-xl font-bold text-[#444] mb-6">
          {product.price} تومان
        </div>


        <div className="flex gap-4 mb-8">
          <ClickToBasket
            id={product.id}
            title={product.title}
            img={product.img}
            price={Number(product.price.replace(/,/g, ""))}
          />
          
          <Link
            href="/basket"
            className="bg-white text-gray-900 border-black border px-6 py-2 rounded-3xl hover:bg-black hover:text-white transition"
          >
            مشاهده سبد خرید
          </Link>
        </div>

        <Accordion
          title="توضیحات محصول"
          content="این عینک آفتابی با طراحی مدرن و فریم مقاوم، از چشمان شما در برابر اشعه‌های مضر خورشید محافظت می‌کند."
        />
        <Accordion
          title="مشخصات فنی"
          content="جنس فریم: فلزی | جنس لنز: پلی‌کربنات | محافظ UV400 | مناسب برای بانوان و آقایان"
        />
      </div>


      <div className="flex flex-col items-center md:w-1/2">

        <div className="relative w-full max-w-md aspect-square rounded-xl overflow-hidden shadow-lg">
          <Image
            src={mainImage}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-all duration-300"
          />
        </div>


        <div className="grid grid-cols-4 gap-3 mt-4 w-full max-w-md">
          {[product.img, product.img2, product.img3, product.img4, product.img5, product.img6, product.img7]
            .filter(Boolean)
            .map((img, index) => (
              <div
                key={index}
                className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer border transition-all ${mainImage === img
                  ? "border-gray-800"
                  : "border-gray-300 hover:border-gray-500"
                  }`}
                onClick={() => setMainImage(img)}
              >
                <Image
                  src={img}
                  alt={`تصویر ${index + 1}`}
                  fill
                  className="object-cover hover:opacity-90 transition"
                />
              </div>
            ))}
        </div>
      </div>


    </main>
  )
}

function Accordion({ title, content }) {
    const [open, setOpen] = useState(false)

    return (
        <div className="border-t border-gray-200 py-4 w-full sm:w-3/4 md:w-1/2">
            <button
                className="flex justify-between items-center w-full text-gray-800 font-medium"
                onClick={() => setOpen(!open)}
            >
                <span>{title}</span>
                <span className="text-lg">{open ? "−" : "+"}</span>
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 mt-3" : "max-h-0"
                    }`}
            >
                <p className="text-sm text-gray-600 leading-relaxed">{content}</p>
            </div>
        </div>
    )
}
"use client"
import React from 'react'
import useShop from '@/app/store/store'

function toman(x) {
  return x.toLocaleString("fa-IR")
}

export default function Page() {
  const { basket, updateBasket, decreaseQuantity, removeFromBasket } = useShop()

  const total = basket.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <main className="min-h-screen bg-white py-10" dir="rtl">
      <div className="container mx-auto px-4">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-black">سبد خرید</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          <aside className="order-2 lg:order-1 lg:col-span-4">
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="mb-4">
                <div className="text-gray-600 text-sm">مجموع کل سبد خرید</div>
                <div className="mt-2 rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">قیمت کل</span>
                    <span className="font-semibold text-black">{toman(total)} تومان</span>
                  </div>
                </div>
                <p className="mt-3 text-xs text-gray-500">هزینه حمل در صفحه پرداخت قابل مشاهده است</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-gray-700">مجموع</span>
                  <span className="font-bold text-lg text-black">{toman(total + 123000)} تومان</span>
                </div>
              </div>

              <div className="mt-6">
                <button
                  className="mt-6 w-full rounded-2xl bg-gray-900 py-4 text-white transition hover:bg-black"
                  onClick={() => alert("ادامه به پرداخت")}
                >
                  اقدام به پرداخت
                </button>
              </div>
            </div>
          </aside>


          <section className="order-1 lg:order-2 lg:col-span-8">
            <div className="rounded-2xl border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-12 bg-gray-50 px-6 py-4 text-sm text-gray-600">
                <div className="col-span-6 sm:col-span-6">محصول</div>
                <div className="hidden sm:block sm:col-span-2 text-center">قیمت</div>
                <div className="col-span-3 sm:col-span-2 text-center">تعداد</div>
                <div className="col-span-3 sm:col-span-2 text-center">کل قیمت</div>
              </div>

              {basket.length === 0 ? (
                <div className="p-6 text-center text-gray-500">سبد خرید شما خالی است 🛒</div>
              ) : (
                basket.map((item) => (
                  <div key={item.id} className="grid grid-cols-12 items-center gap-4 border-t border-gray-100 px-6 py-5">
                    <div className="col-span-12 sm:col-span-6 flex items-center gap-4">
                      <div className="h-20 w-24 overflow-hidden rounded-xl border border-gray-200">
                        <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold line-clamp-2 text-black">{item.title}</div>
                        <button
                          className="mt-2 text-xs text-white bg-gray-800 hover:bg-black transition rounded-md px-3 py-1"
                          onClick={() => removeFromBasket(item.id)}
                        >
                          برداشتن
                        </button>
                      </div>
                    </div>

                    <div className="hidden sm:block sm:col-span-2 text-center text-gray-700">{toman(item.price)}</div>

                    <div className="col-span-6 sm:col-span-2 flex items-center justify-center gap-2">
                      <div className="inline-flex items-center rounded-lg border border-gray-200">
                        <button
                          className="px-3 py-2 text-lg leading-none hover:bg-gray-50"
                          onClick={() => decreaseQuantity(item.id)}
                          aria-label="decrease"
                        >
                          −
                        </button>
                        <span className="px-3 py-2 text-sm font-medium min-w-[2ch] text-center text-black">{item.quantity}</span>
                        <button
                          className="px-3 py-2 text-lg leading-none hover:bg-gray-50"
                          onClick={() => updateBasket({ ...item, quantity: item.quantity + 1 })}
                          aria-label="increase"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-2 text-center font-semibold text-gray-900">
                      {toman(item.price * item.quantity)}
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
"use client"
import React, { useState } from 'react'

export default function page() {
    return (
        <section className="bg-[#f7f7f7] text-white py-16">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                <h2 className="text-3xl font-bold text-center mb-12 text-black">
                    سوالات متداول
                </h2>

                <Accordion
                    title="چگونه می‌توانم سفارش خود را ثبت کنم؟"
                    content="برای ثبت سفارش ، ابتدا محصول مورد نظر خود را انتخاب کرده و به سبد خرید اضافه کنید. سپس با تکمیل اطلاعات مورد نیاز و انتخاب روش پرداخت ، سفارش خود را نهایی کنید.
همچنین در صورت تمایل می‌توانید با کارشناسان ما در واتساپ (لینک) و دایرکت اینستاگرام (لینک) در تماس باشید تا فرآیند ثبت سفارش شما را انجام دهند"
                />
                <Accordion
                    title="چه روش‌های پرداختی را می‌توانم استفاده کنم؟"
                    content="شما می‌توانید از طریق درگاه‌ مستقیم و امن پارسیان و همینطور درگاه پرداخت امن زرین پال و یا پرداخت در محل (ویژه‌ی تهران و کرج) هزینه‌ سفارش خود را پرداخت کنید .
همچنین با درگاه پرداخت اسنپ پی میتونید مبلغ سفارش خود را طی چهار قسط پرداخت نمایید."
                />
                <Accordion
                    title="مدت زمان تحویل سفارش چقدر است؟"
                    content="ارسال سی سی همیشه فوری و تحویل به ادارات مربوطه زیر ۲۴ ساعت پس از ثبت سفارش است.
زمان تحویل سفارش‌ها بسته به موقعیت جغرافیایی و نحوه ی ارسال انتخابی شما (پست ، تیپاکس و پیک) متفاوت است ، اما به‌طور معمول با پست بین ۳ تا ۵ روز کاری ، ارسال با تیپاکس ۴۸ ساعته و
پیک در همان ساعات ثبت سفارش شما ، مرسوله به دست شما می‌رسد."
                />
                <Accordion
                    title="آیا امکان تعویض یا بازگشت کالا وجود دارد؟"
                    content="بله ، در صورت وجود هرگونه نقص یا عدم تطابق محصول با سفارش ، می‌توانید تا ۷ روز پس از دریافت کالا آن را تعویض یا بازگردانید.
همچنین اگر عینک مناسب سایز صورت شما و یا سلیقه ی شما نبود نیز ، تعویض انجام میشود.
برای اطلاعات بیشتر به بخش شرایط بازگشت کالا مراجعه کنید"
                />
            </div>
        </section>
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

import Link from "next/link"
import "./globals.css"
import CartIcon from "./components/CartIcon"
import Image from "next/image"
import Nav from "./components/nav"

export const metadata = {
  title: "Shop App",
  description: "Shop that using Next.js, Tailwind, Zustand",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen flex flex-col font-sans text-gray-800 bg-white">
        <header className="relative flex items-center justify-between px-6 py-6 shadow-md sticky top-0 bg-white z-10">

          <nav className="hidden lg:flex gap-6 text-gray-700 *:hover:text-black">
            <Link href="/">صفحه نخست</Link>
            <Link href="/shop">فروشگاه</Link>
            <Link href="/faq">سوالات متداول</Link>
            <Link href="/articles">مقالات</Link>
          </nav>

          <Nav />

          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="flex justify-center items-center">
              <Image
                src="/LOGO.svg"
                width={110}
                height={110}
                alt="ceecee"
                className="object-contain"
              />
            </Link>
          </div>


          <CartIcon />
        </header>


        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="w-full h-44 border-t border-black flex flex-col justify-center items-center bg-[#fcfcfc]">
            <p className="text-lg lg:text-xl text-black">
                Developed By&nbsp;
                <Link href='https://github.com/Parsadgh' target="_blank" className="text-xl lg:text-2xl underline underline-offset-4 hover:text-slate-800">
                    Parsa Sadegh
                </Link>
            </p>
            <span className="text-center text-sm text-gray-500 py-4"> © {new Date().getFullYear()} MyShop </span>
        </footer>

      </body>
    </html>
  )
}

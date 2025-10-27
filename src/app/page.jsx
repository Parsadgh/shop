import products from "./data/products"

import Hero from "./components/Hero"
import Collections from "./components/Collections"
import BestSellers from "./components/BestSellers"
import Collections2 from "./components/Collections2"

export default async function HomePage() {

  return (
    <>
      <Hero />
      <Collections />
      <BestSellers products={products}/>
      <Collections2 />
    </>
  )
}
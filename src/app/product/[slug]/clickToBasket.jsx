"use client";
import React from "react";
import useShop from "../../store/store"; 

export default function ClickToBasket({ id, title, img, price }) {
  const updateBasket = useShop((state) => state.updateBasket);

  const handleClick = () => {
    updateBasket({ id, title, img, price });
  };

  return (
    <button
      onClick={handleClick}
      className="bg-gray-900 text-white px-6 py-2 rounded-3xl hover:bg-white hover:text-gray-900 hover:border hover:border-black transition"
    >
      افزودن به سبد خرید
    </button>
  )
}

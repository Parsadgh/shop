"use client"
import React from "react"
import { Button } from "@mui/material"
import useShop from "../store/store"

export default function AddToBasket({ product }) {
  const { updateBasket } = useShop()

  return (
    <Button
      variant="contained"
      color="primary"
      className="!rounded-xl !px-6 !py-2"
      onClick={() => updateBasket(product)}
    >
      Add to Basket
    </Button>
  )
}

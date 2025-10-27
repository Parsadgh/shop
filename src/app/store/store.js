import { create } from 'zustand';

const useShop = create((set) => ({
  basket: [],

  updateBasket: (newPro) => set((state) => {
    const exists = state.basket.find((item) => item.id === newPro.id);

    if (exists) {
      const updated = state.basket.map((item) =>
        item.id === newPro.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      return { basket: updated };
    }

    return { basket: [...state.basket, { ...newPro, quantity: 1 }] };
  }),

  removeFromBasket: (id) => set((state) => ({
    basket: state.basket.filter((item) => item.id !== id),
  })),

  decreaseQuantity: (id) => set((state) => {
    const updated = state.basket
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0); 

    return { basket: updated };
  }),
}));

export default useShop;

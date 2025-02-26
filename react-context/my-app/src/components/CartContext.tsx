import { Product } from '../lib';
import React, { createContext, useState } from 'react';

export type CartValue = {
  cart: Product[];
  addToCart: (product: Product) => void;
};

const defaultCartValue: CartValue = {
  cart: [],
  addToCart: () => undefined,
};

export const CartContext = createContext(defaultCartValue);

type Props = {
  children: React.ReactNode;
};

export function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<Product[]>([]);

  function addToCart(item: Product): void {
    setCart([...cart, item]);
  }
  const cartContextValues = {
    cart,
    addToCart,
  };
  return (
    <CartContext.Provider value={cartContextValues}>
      {children}
    </CartContext.Provider>
  );
}

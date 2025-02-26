import { useContext } from 'react';
import { CartContext } from './CartContext';

export function useCart() {
  const context = useContext(CartContext);
  if (!context)
    throw new Error('The hook can only be used inside the CartProvider tree');
  return context;
}

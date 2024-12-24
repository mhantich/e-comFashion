import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, Product } from '@/types';

type CartStore = {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      itemCount: 0,
      addItem: (product) => {
        const items = [...get().items];
        const existingItem = items.find((item) => item.product.id === product.id);

        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          items.push({ product, quantity: 1 });
        }

        set({
          items,
          total: items.reduce((acc, item) => acc + item.product.price * item.quantity, 0),
          itemCount: items.reduce((acc, item) => acc + item.quantity, 0),
        });
      },
      removeItem: (productId) => {
        const items = get().items.filter((item) => item.product.id !== productId);
        set({
          items,
          total: items.reduce((acc, item) => acc + item.product.price * item.quantity, 0),
          itemCount: items.reduce((acc, item) => acc + item.quantity, 0),
        });
      },
      updateQuantity: (productId, quantity) => {
        const items = get().items.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        );
        set({
          items,
          total: items.reduce((acc, item) => acc + item.product.price * item.quantity, 0),
          itemCount: items.reduce((acc, item) => acc + item.quantity, 0),
        });
      },
      clearCart: () => set({ items: [], total: 0, itemCount: 0 }),
    }),
    {
      name: 'cart-storage',
    }
  )
);
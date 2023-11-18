import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/types";

interface Cart {
  item: Product;
  quantity: number;
}

interface CartStore {
  items: Cart[];
  addItem: (data: Product, amount: number) => void;
  removeItem: (id: string, amount: number) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product, amount: number) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (current) => current.item.id === data.id
        );
        if (existingItem) {
          existingItem.quantity += amount;
        }

        set({ items: [...get().items, { item: data, quantity: amount }] });
      },
      removeItem: (id: string) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (current) => current.item.id === id
        );
        if (existingItem) {
          if (existingItem.quantity > 1) {
            set({ items: [...get().items] });
          }
        }
      },
      removeAll: () => {
        set({ items: [] });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;

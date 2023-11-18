import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// What do I need for product details
// I need the following and not the entire product detail
// id, price, quantity, style, design, first image

interface cartItem {
  id: string;
  price: number;
  quantity: number;
  style?: string;
  design?: string;
  image: string;
}

interface CartStore {
  items: cartItem[];
  addItem: (data: cartItem) => void;
  removeItem: (id: string) => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: cartItem) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);
        if (existingItem) {
          const itemIndex = currentItems.findIndex(
            (item) => item.id === data.id
          );
          currentItems[itemIndex].quantity += data.quantity;
          set({ items: currentItems });
        } else {
          set({ items: [...currentItems, data] });
        }
      },
      removeItem: (id: string) => {
        const currentItems = get().items;
        const itemIndex = currentItems.findIndex((item) => item.id === id);
        currentItems[itemIndex].quantity -= 1;
        if (currentItems[itemIndex].quantity < 1) {
          set({ items: [...currentItems.filter((item) => item.id !== id)] });
        } else {
          set({ items: currentItems });
        }
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;

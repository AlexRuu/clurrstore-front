import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  selectedStyle?: string;
  styleName?: string;
  selectedDesign?: string;
  designName?: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (
    id: string,
    name: string,
    image: string,
    price: number,
    selectedDesign?: string | undefined,
    designName?: string | undefined,
    selectedStyle?: string | undefined,
    styleName?: string | undefined
  ) => void;
  removeItem: (
    id: string,
    selectedDesign?: string,
    selectedStyle?: string
  ) => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (
        id: string,
        name: string,
        image: string,
        price: number,
        selectedDesign?: string,
        designName?: string,
        selectedStyle?: string,
        styleName?: string
      ) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) =>
            item.id === id &&
            item.selectedDesign == selectedDesign &&
            item.selectedStyle == selectedStyle
        );
        if (existingItem) {
          const itemIndex = currentItems.findIndex(
            (item) =>
              item.id === id &&
              item.selectedDesign == selectedDesign &&
              item.selectedStyle == selectedStyle
          );
          currentItems[itemIndex].quantity += 1;
          set({ items: currentItems });
        } else {
          set({
            items: [
              ...currentItems,
              {
                id,
                name,
                image,
                price,
                quantity: 1,
                selectedDesign,
                designName,
                selectedStyle,
                styleName,
              },
            ],
          });
        }
      },
      removeItem: (
        id: string,
        selectedDesign?: string,
        selectedStyle?: string
      ) => {
        const currentItems = get().items;
        const itemIndex = currentItems.findIndex(
          (item) =>
            item.id === id &&
            item.selectedDesign == selectedDesign &&
            item.selectedStyle == selectedStyle
        );
        currentItems[itemIndex].quantity -= 1;
        if (currentItems[itemIndex].quantity < 1) {
          set({
            items: [
              ...currentItems.filter(
                (item) =>
                  item.id !== id &&
                  item.selectedDesign != selectedDesign &&
                  item.selectedStyle != selectedStyle
              ),
            ],
          });
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

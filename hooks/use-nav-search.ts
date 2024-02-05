import { create } from "zustand";

interface NavSearchProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useNavSearch = create<NavSearchProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useNavSearch;

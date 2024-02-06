import { create } from "zustand";

interface useMobileNavSearchProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useMobileNavSearch = create<useMobileNavSearchProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useMobileNavSearch;

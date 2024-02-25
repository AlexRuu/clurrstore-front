"use client";

import { Dialog, DialogContent } from "./dialog";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  return (
    <Dialog open={open} onOpenChange={onChange}>
      <DialogContent className="w-full max-w-3xl overflow-hidden rounded-lg text-left align-middle justify-center items-center">
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;

"use client";

import IconButton from "./icon-button";
import { X } from "lucide-react";

import { Dialog, DialogContent } from "./dialog";
import { DialogClose } from "@radix-ui/react-dialog";

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
      <DialogContent className="w-full max-w-3xl overflow-hidden rounded-lg text-left align-middle">
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;

"use client";

import usePreviewModal from "@/hooks/use-preview-modal";
import Modal from "../ui/modal";
import PreviewGallery from "./preview-gallery";
import PreviewInfo from "../info";
import useCart from "@/hooks/use-cart";

const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);
  const cart = useCart();

  if (!product) {
    return null;
  }
  return (
    <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-6 lg:col-span-6">
          <PreviewGallery images={product.image} />
        </div>
        <div className="sm:col-span-6 lg:col-span-6">
          <PreviewInfo product={product} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;

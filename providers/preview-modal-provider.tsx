"use client";

import PreviewModal from "@/components/preview-gallery/preview-modal";
import { useEffect, useState } from "react";

const PreviewModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <PreviewModal />
    </>
  );
};

export default PreviewModalProvider;

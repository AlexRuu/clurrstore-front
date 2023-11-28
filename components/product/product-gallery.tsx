"use client";

import { Image as ImageType } from "@/types";
import Image from "next/image";

import PreviewTabs from "../preview-gallery/preview-tabs";
import { Tab } from "@headlessui/react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { useState } from "react";

interface PreviewGalleryProps {
  images: ImageType[];
}
const variants: Variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 200 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 1,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const ProductGallery: React.FC<PreviewGalleryProps> = ({ images }) => {
  const [direction, setDirection] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const changeDirection = (toChange: number) => {
    if (toChange >= 0) {
      return 1;
    } else {
      return -1;
    }
  };

  const paginate = (index: number) => {
    setSelectedIndex(wrap(0, images.length, index));
    const directionChange = changeDirection(index - selectedIndex);
    setDirection(directionChange);
  };

  return (
    <Tab.Group
      as="div"
      className="flex flex-col-reverse"
      onChange={(index) => paginate(index)}
    >
      <div className="mx-auto mt-6 hidden h-full w-full max-w-2xl sm:flex sm:h-11 lg:max-w-none justify-center">
        <Tab.List className="flex w-full gap-x-1 justify-center flex-1">
          {images.map((img) => (
            <PreviewTabs key={img.id} image={img} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        <AnimatePresence initial={false}>
          {images.map((img) => (
            <Tab.Panel
              key={img.id}
              as={motion.div}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            >
              <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
                <Image
                  fill
                  src={img.url}
                  alt=""
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </Tab.Panel>
          ))}
        </AnimatePresence>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default ProductGallery;

"use client";

import { Image as ImageType } from "@/types";
import Image from "next/image";

import PreviewTabs from "./preview-tabs";
import { Tab } from "@headlessui/react";

interface PreviewGalleryProps {
  images: ImageType[];
}

const PreviewGallery: React.FC<PreviewGalleryProps> = ({ images }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden h-full w-full max-w-2xl sm:flex sm:h-11 lg:max-w-none justify-center">
        <Tab.List className="flex w-full gap-x-1 justify-center flex-1">
          {images.map((img) => (
            <PreviewTabs key={img.id} image={img} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        {images.map((img) => (
          <Tab.Panel key={img.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <Image
                fill
                src={img.url}
                alt=""
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default PreviewGallery;

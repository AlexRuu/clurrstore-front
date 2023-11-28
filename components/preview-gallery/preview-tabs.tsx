import Image from "next/image";
import { cn } from "@/libs/utlils";

import { Image as ImageType } from "@/types";
import { Tab } from "@headlessui/react";

interface PreviewTabsProps {
  image: ImageType;
}

const PreviewTabs: React.FC<PreviewTabsProps> = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer justify-center items-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              fill
              src={image.url}
              alt=""
              className="object-cover object-center"
            />
            <span
              className={cn(
                "absolute inset-0 rounded-md ring-2 ring-offset-2",
                selected ? "ring-black" : "ring-transparent"
              )}
            ></span>
          </span>
        </div>
      )}
    </Tab>
  );
};

export default PreviewTabs;

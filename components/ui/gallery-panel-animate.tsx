import { Image as ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";

interface MotionTabPanelProps {
  img: ImageType;
}

const MotionTabPanel: React.FC<MotionTabPanelProps> = ({ img }) => {
  const variants: Variants = {
    enter: () => {
      return {
        x: 50,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: () => {
      return {
        zIndex: 0,
        x: -50,
        opacity: 0,
      };
    },
  };

  return (
    <Tab.Panel
      as={motion.div}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      static={true}
    >
      <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
        <Image
          fill
          src={img.url}
          alt=""
          className="object-cover object-center"
        />
      </div>
    </Tab.Panel>
  );
};

export default MotionTabPanel;

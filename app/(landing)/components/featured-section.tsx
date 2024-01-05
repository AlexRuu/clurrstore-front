"use client";

import { Product } from "@/types";

interface FeaturedSectionProps {
  featured: Product[];
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ featured }) => {
  return (
    <div>
      Featured
      <div>{featured.map((item) => item.title)}</div>
    </div>
  );
};

export default FeaturedSection;

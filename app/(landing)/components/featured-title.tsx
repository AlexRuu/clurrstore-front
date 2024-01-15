"use client";

interface FeaturedTitleProps {
  title: string;
}

const FeaturedTitle: React.FC<FeaturedTitleProps> = ({ title }) => {
  return (
    <>
      <h2 className="text-xl mb-2">{title}</h2>
      <hr className="bg-logo opacity-30 rounded-lg h-1 w-[10%] text-center m-auto mb-1" />
    </>
  );
};

export default FeaturedTitle;

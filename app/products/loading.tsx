import { AspectRatio } from "@/components/ui/aspect-ratio";

const LoadingProducts = () => {
  return (
    // <div className="w-full flex">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 box-border w-full">
      {Array.from(Array(9), (_, i) => (
        <AspectRatio ratio={1 / 1} key={i}>
          <div className="h-[96%] w-[94%] rounded-md mx-3 my-5 flex flex-col justify-between bg-gray-50">
            <div className="mt-5 h-[75%] w-[90%] bg-gray-300 self-center rounded-md animate-pulse" />
            <div className="h-[15%] w-[90%] bg-gray-300 self-center mb-3 rounded-md animate-pulse" />
          </div>
        </AspectRatio>
      ))}
    </div>
    // </div>
  );
};

export default LoadingProducts;

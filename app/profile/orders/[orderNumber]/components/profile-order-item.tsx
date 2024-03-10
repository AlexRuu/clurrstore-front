import { Design, Product, Style } from "@/types";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ProfileOrderItemProps {
  product: Product;
  design: Design;
  style: Style;
  quantity: number;
}

const ProfileOrderItem: React.FC<ProfileOrderItemProps> = ({
  product,
  design,
  style,
  quantity,
}) => {
  const [totalPrice, setTotalPrice] = useState(product.price * quantity);

  useEffect(() => {
    if (style && style.title == "B Grade (-C$2.00)") {
      const newPrice = product.price - 2;
      setTotalPrice(newPrice * quantity);
    } else {
      setTotalPrice(product.price * quantity);
    }
  }, []);

  return (
    <li className="small:border-b small:border-b-[#f3f3f3] small:border-solid small:pb-5 small:mb-[30px] small:flex list-none">
      <Link
        href={`/products/${product.title}-${product.id}`}
        className="small:block w-[30%] max-w-[200px] flex-[0_0_auto] md:hidden"
      >
        <AspectRatio ratio={6 / 6}>
          <Image
            src={product.image[0].url}
            alt=""
            fill
            style={{ objectFit: "cover" }}
            className="block rounded-[30px] overflow-hidden relative z-[1] max-w-full border-none"
          />
        </AspectRatio>
      </Link>
      <div className="small:p-0 small:mt-0 small:flex-col small:w-auto small:h-full py-[45px] flex-nowrap flex justify-between">
        {/* Item image for bigger than md */}
        <div className="small:hidden md-max:w-[100px] w-[160px] flex-[0_0_auto] block">
          <Link
            href={`/products/${product.title}-${product.id}`}
            className="rounded-[30px] overflow-hidden relative z-[1] block "
          >
            <AspectRatio ratio={4 / 5}>
              <Image
                src={product.image[0].url}
                alt=""
                fill
                style={{ objectFit: "cover" }}
                className="block h-auto w-full"
              />
            </AspectRatio>
          </Link>
        </div>
        {/* description */}
        <div className="small:pt-0 small:pl-16 flex-grow pl-[30px] pt-[15px] block">
          <Link
            href={`/products/${product.title}-${product.id}`}
            className="small:text-lg no-underline uppercase touch-manipulation"
          >
            {product.title}
          </Link>
          {design && (
            <p className="small:text-base text-sm text-[#333333b3] m-0">
              Design: {design.title}
            </p>
          )}
          {style && (
            <p className="small:text-base text-sm text-[#333333b3] m-0">
              Style: {style.title}
            </p>
          )}
        </div>
        {/* price for bigger than small */}
        <div className="small:pb-5 small:text-left small:w-auto small:pl-[60px] small:text-lg small:hidden pt-[15px] md-max:w-[120px] md-max:min-w-[120px] w-[16.66667%] min-w-[145px] flex-[0_0_auto] text-center">
          <div>
            {style?.title == "B Grade (-C$2.00)"
              ? (product.price - 2).toFixed(2)
              : product.price.toFixed(2)}
          </div>
        </div>
        {/* Quantity */}
        <div className="small:flex small:flex-wrap small:items-center small:text-left small:w-auto small:pl-[60px] small:text-lg pt-[5px] w-16.666667%] min-w-[145px] flex-[0_0_auto] text-center block">
          <div className="small:justify-start small:mr-[30px] small::mb-5 justify-center flex flex-wrap items-center">
            <span className="medium-min:hidden opacity-50 text-sm mb-[2px]">
              Quantity:
            </span>
            <p className="m-0 px-0 small:pt-1 md:pt-2 text-center h-[38px] w-[38px]">
              {quantity}
            </p>
          </div>
        </div>
        {/* Total price */}
        <div className="small:text-left small:w-auto small:pl-[60px] small:text-lg text-right pt-[15px] md-max:w-[100px] md-max:min-w-[100px] min-w-[145px] flex-[0_0_auto] block:">
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </li>
  );
};

export default ProfileOrderItem;

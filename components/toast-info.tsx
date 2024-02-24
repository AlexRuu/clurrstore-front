import { poppins } from "@/app/font";
import useCart from "@/hooks/use-cart";
import { cn } from "@/libs/utlils";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import Link from "next/link";

interface ToastInforProps {
  id: string;
  styleId?: string;
  designId?: string;
}

const ToastInfo: React.FC<ToastInforProps> = ({ id, styleId, designId }) => {
  const cart = useCart();
  const itemIndex = cart.items.findIndex(
    (item) =>
      item.id === id &&
      item.selectedDesign == designId &&
      item.selectedStyle == styleId
  );

  const item = cart.items[itemIndex];

  return (
    <>
      <div className="w-full flex mt-5">
        <div className="w-1/2 mr-3">
          <AspectRatio ratio={1 / 1}>
            <Image src={item.image} fill alt="" className="rounded-[30px]" />
          </AspectRatio>
        </div>
        <div className="w-1/2 mx-2">
          <h1 className={cn("font-medium text-black", poppins)}>{item.name}</h1>
          <p className="text-sm">
            {item.designName && `Design: ${item.designName}`}
          </p>
          <p className="text-sm">
            {item.styleName && `Style: ${item.styleName}`}
          </p>
        </div>
      </div>
      <div className="mt-4 w-full flex flex-col flex-nowrap">
        <div className="flex w-full">
          <div className="w-1/2 px-1 text-black">
            <p className="text-xs">Items</p>
            Subtotal:
          </div>
          <div className="w-1/2 text-right px-1 text-black">
            <p className="text-xs">{item.quantity}</p>
            {item.styleName?.includes("B Grade (-C$2.00)") ? (
              <p>{((item.price - 2) * item.quantity).toFixed(2)}</p>
            ) : (
              <p>{(item.price * item.quantity).toFixed(2)}</p>
            )}
          </div>
        </div>
        <Link
          className="w-full block text-center rounded-full px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 font-semibold hover:opacity-75 transition text-black mt-5 border bg-[#e2ecf2] hover:shadow-home-button hover:-translate-y-[3px] hover:brightness-95 uppercase"
          href="/cart"
        >
          Checkout
        </Link>
      </div>
    </>
  );
};

export default ToastInfo;

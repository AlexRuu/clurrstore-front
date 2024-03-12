import PageHeader from "@/components/ui/header";
import CartSummary from "./components/cart-summary";
import CartTotal from "./components/cart-total";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: `Shopping Cart`,
  };
};

const CartPage = () => {
  return (
    <main className="min-h-[500px] mt-10 pb-[30px] small:mt-0 xsmall:mt-0">
      <section className="xl:!p-[0px_85px] p-[0px_55px] med-small:p-0">
        {/* Header of the page with breadcrumb */}
        <PageHeader second="cart" headerTitle="Shopping Cart" />
        {/* The cart summary displaying relevant information about what is in the cart */}
        <CartSummary />
        {/* Summary of cart total */}
        <CartTotal />
      </section>
    </main>
  );
};

export default CartPage;

import PageHeader from "@/components/ui/header";
import CartSummary from "./components/cart-summary";

const CartPage = () => {
  return (
    <main className="min-h-[500px] mt-10 pb-[30px] small:mt-0 xsmall:mt-0">
      <section className="xl:!p-[0px_85px] p-[0px_55px] med-small:p-0">
        <PageHeader second="cart" headerTitle="Shopping Cart" />
        <CartSummary />
      </section>
    </main>
  );
};

export default CartPage;

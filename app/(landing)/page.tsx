import getHomeImage from "@/actions/get-homeImage";
import HomeCarousel from "./components/home-carousel";
import FeaturedSection from "./components/featured-item";
import getProduct from "@/actions/get-product";
import FeaturedCategories from "./components/featured-categories";
import getProducts from "@/actions/get-products";
import FeaturedItems from "./components/featured-items";

export const revalidate = 0;

const HomePage = async () => {
  // Retrieve all required images, item, and category images from database
  const homeImages = await getHomeImage();
  const featuredItem = await getProduct("4b2e5573-4605-457d-a6e2-cb617d1f64c0");
  const categoryProduct = await getProducts({
    categoryId: [
      "1ef771da-fbe9-4553-819c-f427d3f76f6f",
      "2569adc2-ca07-45fb-87ec-59e98ce00f7f",
      "2bb6a311-a64b-4c96-817b-e4f078b5bbbd",
    ],
  });

  const featuredProducts = await getProducts({
    productId: [
      "1bb25562-8f25-4073-9198-6de59b85b844",
      "5ffeefcc-b918-4300-9f6b-805e7f5fc93a",
      "b03a81b0-6683-4d05-84d1-069cbdc6666e",
    ],
  });

  return (
    <main className="min-h-[500px] mt-10 pb-[30px] small:mt-0 xsmall:mt-0">
      {/* Gradient above carousel */}
      <span
        className="h-[251px] small:max-h-[25vh] absolute w-full left-0 top-0 xsmall:hidden md:h-[330px] content-none"
        style={{
          background:
            "linear-gradient(180deg,rgba(255,192,203,1),rgba(255,255,255,1) 98%)",
        }}
      ></span>
      <section className="xsmall:mt-0 relative medium-min:mt-[60px] block box-border"></section>

      {/* Carousel component */}
      <section className="block">
        <HomeCarousel homeImages={homeImages} />
      </section>

      {/* Featured categories component */}
      <section className="block">
        <FeaturedCategories categories={categoryProduct} />
      </section>

      {/* Featured items component */}
      <section className="block">
        <FeaturedItems items={featuredProducts} />
      </section>

      {/* Featured item (canvas art) item */}
      <section className="block pt-3">
        <FeaturedSection featured={featuredItem} />
      </section>
    </main>
  );
};

export default HomePage;

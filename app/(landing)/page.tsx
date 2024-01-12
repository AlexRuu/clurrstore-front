import getHomeImage from "@/actions/get-homeImage";
import HomeCarousel from "./components/home-carousel";
import FeaturedSection from "./components/featured-item";
import getProduct from "@/actions/get-product";
import FeaturedCategories from "./components/featured-categories";
import getProducts from "@/actions/get-products";

export const revalidate = 0;

const HomePage = async () => {
  const homeImages = await getHomeImage();
  const featuredItem = await getProduct("b357cf37-68c3-4500-ba44-031e15787713");
  const categoryProduct = await getProducts({
    categoryId: [
      "b400cb83-5d9b-4747-9794-719f1c9cca62",
      "38844945-b2d7-4780-bfd0-e3c17db717df",
      "c67fc98d-7de8-45b8-b010-671fa34251c9",
    ],
  });

  return (
    <main className="min-h-[500px] mt-32 pb-[30px] small:mt-28 xsmall:mt-0">
      <span
        className="h-[251px] small:max-h-[25vh] absolute w-full left-0 top-0 xsmall:hidden md:h-[330px] content-none"
        style={{
          background:
            "linear-gradient(180deg,rgba(255,192,203,1),rgba(255,255,255,1) 98%)",
        }}
      ></span>
      <section className="xsmall:mt-0 relative mt-[60px] block box-border"></section>
      <section className="block">
        <HomeCarousel homeImages={homeImages} />
      </section>
      <section className="block">
        <FeaturedCategories categories={categoryProduct} />
      </section>
      <section className="block">
        <FeaturedSection featured={featuredItem} />
      </section>
    </main>
  );
};

export default HomePage;

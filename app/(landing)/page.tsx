import getHomeImage from "@/actions/get-homeImage";
import HomeCarousel from "./components/home-carousel";
import FeaturedSection from "./components/featured-item";
import getProduct from "@/actions/get-product";

export const revalidate = 0;

const HomePage = async () => {
  const homeImages = await getHomeImage();
  const featuredItem = await getProduct("b357cf37-68c3-4500-ba44-031e15787713");

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
      <section className="block mt-28">
        <FeaturedSection featured={featuredItem} />
      </section>
    </main>
  );
};

export default HomePage;

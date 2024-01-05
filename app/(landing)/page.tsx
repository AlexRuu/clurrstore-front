import getHomeImage from "@/actions/get-homeImage";
import HomeCarousel from "./components/home-carousel";
import FeaturedSection from "./components/featured-section";
import getProducts from "@/actions/get-products";

export const revalidate = 0;

const HomePage = async () => {
  const homeImages = await getHomeImage();
  const featuredImages = await getProducts({ featured: true });

  return (
    <main className="min-h-[500px] mt-32 pb-[30px] small:mt-24">
      <span
        className="h-[251px] small:max-h-[25vh] absolute w-full left-0 top-0 small:hidden md:h-[330px] content-none"
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
        <FeaturedSection featured={featuredImages} />
      </section>
    </main>
  );
};

export default HomePage;

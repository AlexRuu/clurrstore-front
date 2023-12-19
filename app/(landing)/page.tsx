import getHomeImage from "@/actions/get-homeImage";
import HomeCarousel from "./components/home-carousel";

export const revalidate = 0;

const HomePage = async () => {
  const homeImages = await getHomeImage();

  return (
    <section className="block">
      <span
        className="h-[330px] small:max-h-[25vh] absolute w-full left-0 top-0"
        style={{
          background:
            "linear-gradient(180deg,rgba(255,192,203,1),rgba(255,255,255,1) 98%)",
        }}
      ></span>
      <HomeCarousel homeImages={homeImages} />
    </section>
  );
};

export default HomePage;

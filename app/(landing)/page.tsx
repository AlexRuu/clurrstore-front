import getHomeImage from "@/actions/get-homeImage";
import Image from "next/image";

export const revalidate = 0;

const HomePage = async () => {
  const homeImage = await getHomeImage("56c2219e-6f8c-4f40-b83c-7580dbef9fff");

  return (
    <section>
      <div className="w-full absolute -top-1/4 left-0 -z-10 h-full overflow-hidden">
        <div className="">
          <Image
            src={homeImage.url}
            alt="Home Image"
            width={300}
            height={500}
            className="w-full h-full"
          />
          <Image
            src={homeImage.url}
            alt="Home Image"
            width={300}
            height={500}
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="w-full text-center justify-center flex flex-col flex-nowrap absolute">
        <p>All Things Cute & Aesthetic</p>
        <h1>Welcome To The Studio</h1>
      </div>
    </section>
  );
};

export default HomePage;

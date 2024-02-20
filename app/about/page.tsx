import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="min-h-[500px] mt-10 pb-[30px] small:mt-0 xsmall:mt-0">
      <section className="xl:!p-[0px_85px] p-[0px_55px] med-small:p-0">
        <div className="flex items-center md:w-full md:p-0 small:m-0 small:p-0">
          <div className="md:w-1/2 mx-5 small:hidden">
            <AspectRatio ratio={6 / 6}>
              <Image
                src="/images/clurrAbout.png"
                alt=""
                height={500}
                width={500}
              />
            </AspectRatio>
          </div>
          <div className="small:mx-10 small:pt-10 md:w-1/2 md:ml-5 md:mr-16 md:mb-10 small:mt-10">
            <h2 className="text-center small:text-3xl text-4xl md:mb-10">
              About Me
            </h2>
            <hr className="small:block hidden bg-logo opacity-30 rounded-lg h-1 small:w-[20%] text-center m-auto mb-5" />
            <p className="small:mx-10">
              Hello everyone, I'm Claire! I'm just an artist bringing her ideas
              to life, one art work at a time. I'm super excited to share my
              work with you all, so take your time and enjoy your stay! Treat it
              as an online art gallery of a sort!
            </p>
            <br />
            <p className="small:mx-10">
              I love working with all sorts of mediums, so you'll notice quite a
              variety here, some being one of a kind! All works are original and
              inspired by my experience and everyday surrounding. Hope you find
              something you like during your stay!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;

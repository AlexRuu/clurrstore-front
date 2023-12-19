import { HomeImage } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/homeImgs`;

const getHomeImage = async (): Promise<HomeImage[]> => {
  const res = await fetch(`${URL}`);

  return res.json();
};

export default getHomeImage;

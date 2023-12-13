import { HomeImage } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/homeImgs`;

const getHomeImage = async (id: string): Promise<HomeImage> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getHomeImage;

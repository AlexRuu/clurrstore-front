import { Design } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/design`;

const getDesign = async (id: string): Promise<Design> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getDesign;

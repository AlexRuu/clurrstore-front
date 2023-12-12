import { Style } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/style`;

const getStyle = async (id: string): Promise<Style> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getStyle;

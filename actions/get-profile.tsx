import { Profile } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/profile`;

const getProfile = async (id: string): Promise<Profile> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getProfile;

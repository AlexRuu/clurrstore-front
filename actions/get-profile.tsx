import { Profile } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/profile`;

const getProfile = async (email: string): Promise<Profile> => {
  const res = await fetch(`${URL}/${email}`);

  return res.json();
};

export default getProfile;

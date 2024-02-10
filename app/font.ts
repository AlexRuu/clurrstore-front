import { Poppins } from "next/font/google";
import { Yeseva_One } from "next/font/google";

export const poppins = Poppins({
  weight: "500",
  subsets: ["devanagari", "latin"],
});

export const poppins_light = Poppins({
  weight: "400",
  subsets: ["devanagari", "latin"],
});
export const yeseva_one = Yeseva_One({
  weight: ["400"],
  subsets: ["latin", "cyrillic"],
});

import { redirect } from "next/navigation";

import { createClient } from "@/libs/supabase/server";
import ProfileInfo from "./components/profile-info";
import getProfile from "@/actions/get-profile";
import ProfileOrderInfo from "./components/order-info";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: `Profile`,
  };
};

const ProfilePage = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    return redirect("/account/login");
  }
  const profile = await getProfile(data.user.id);

  return (
    <main className="min-h-[650px] med-small:min-h-[650px] h-full mt-10 med-small:mx-5">
      <section className="xl:!p-[0px_85px] p-[0px_55px] med-small:p-0">
        <h1 className="text-center mb-5 text-3xl">My Account</h1>
        <ProfileInfo profile={profile} />
        <ProfileOrderInfo orders={profile.order} />
      </section>
    </main>
  );
};

export default ProfilePage;

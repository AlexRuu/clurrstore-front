import { redirect } from "next/navigation";

import { createClient } from "@/libs/supabase/server";
import ProfileInfo from "./components/profile-info";
import getProfile from "@/actions/get-profile";
import ProfileOrderInfo from "./components/order-info";

const ProfilePage = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    return redirect("/account/login");
  }
  const profile = await getProfile(data.user.id);

  return (
    <main className="min-h-[500px] mt-10 med-small:mx-5">
      <section className="xl:!p-[0px_85px] p-[0px_55px] med-small:p-0">
        <ProfileInfo profile={profile} />
        <ProfileOrderInfo />
      </section>
    </main>
  );
};

export default ProfilePage;

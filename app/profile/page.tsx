import { redirect } from "next/navigation";

import { createClient } from "@/libs/supabase/server";
import ProfileInfo from "./components/profile-info";
import getProfile from "@/actions/get-profile";
import ProfileOrderInfo from "./components/order-info";
import { Metadata } from "next";
import Button from "@/components/ui/myButton";
import { signOut } from "@/actions/auth";
import { Suspense } from "react";
import ProfileLoading from "./loading";

export const generateMetadata = (): Metadata => {
  return {
    title: `Profile`,
  };
};

const ProfilePage = async () => {
  // Check for user
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    return redirect("/account/login");
  }

  return (
    <main className="min-h-[650px] med-small:min-h-[650px] h-full mt-10 med-small:mx-5">
      <section className="xl:!p-[0px_85px] p-[0px_55px] med-small:p-0">
        <h1 className="text-center mb-5 text-3xl">My Account</h1>
        <Suspense fallback={<ProfileLoading />}>
          {/* User's profile information */}
          <ProfileInfo id={data.user.id} />
          {/* Order history information */}
          <ProfileOrderInfo id={data.user.id} />
          <div className="flex justify-end mt-10">
            <Button
              onClick={signOut}
              className="text-black small:text-center w-[12%] border bg-[#e2ecf2] hover:shadow-home-button hover:-translate-y-[3px] hover:brightness-95 uppercase"
            >
              Sign Out
            </Button>
          </div>
        </Suspense>
      </section>
    </main>
  );
};

export default ProfilePage;

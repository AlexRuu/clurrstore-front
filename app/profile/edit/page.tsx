import getProfile from "@/actions/get-profile";
import UpdateProfileForm from "@/components/forms/profile-form";
import { createClient } from "@/libs/supabase/server";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: `Edit Profile`,
  };
};

const EditProfile = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    return redirect("/account/login");
  }
  const profile = await getProfile(data.user.id);

  return (
    <main className="min-h-[500px] mt-10 med-small:mx-5">
      <section className="xl:!p-[0px_85px] p-[0px_55px] med-small:p-0">
        <h1 className="text-center mb-5 text-3xl">Edit Profile</h1>
        <UpdateProfileForm initialData={profile} />
      </section>
    </main>
  );
};

export default EditProfile;

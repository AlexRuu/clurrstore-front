import getProfile from "@/actions/get-profile";
import { poppins_bold } from "@/app/font";
import { cn } from "@/libs/utlils";
import { Edit } from "lucide-react";
import Link from "next/link";

interface EditProfileProps {
  id: string;
}

const ProfileInfo: React.FC<EditProfileProps> = async ({ id }) => {
  const profile = await getProfile(id);
  const firstPostal = profile.postalCode?.slice(0, 3);
  const lastPostal = profile.postalCode?.slice(3);
  const postalCode = firstPostal?.concat(" ", lastPostal);

  return (
    <div className="mb-10">
      <h1 className="text-2xl mb-3">Profile</h1>
      <div className="flex w-1/2 bg-gray-100 rounded-[10px] small:w-3/5 md-max:w-7/12 sm-max:!w-full">
        {/* Left Column for personal */}
        <div className="mr-20 ml-5 my-2 med-small:hidden">
          {/* Name */}
          <div className="mb-1">
            <h5 className={cn("text-lg", poppins_bold.className)}>Name</h5>
            <p>
              {profile.firstName} {profile.lastName}
            </p>
          </div>
          {/* Email */}
          <div className="mb-1">
            <h5 className={cn("text-lg", poppins_bold.className)}>Email</h5>
            <p>{profile.email}</p>
          </div>
          {/* Phone */}
          <div className="mb-1">
            <h5 className={cn("text-lg", poppins_bold.className)}>Phone</h5>
            <p>
              {profile.phone !== null
                ? `${profile.phone}`
                : "No phone number saved"}
            </p>
          </div>
        </div>
        {/* Right Column for address information */}
        <div className="my-2 mr-6 w-full med-small:hidden">
          <h5 className={cn("text-lg", poppins_bold.className)}>Address</h5>
          {profile.address1 ? (
            <>
              <p>{profile.address1}</p>
              {profile.address2 !== "" ? <p>{profile.address2}</p> : null}
              <p>
                {profile.city} {profile.province}
              </p>
              <p>{profile.postalCode}</p>
              <p>{profile.country == "CA" && "Canada"}</p>
            </>
          ) : (
            <p>No address saved.</p>
          )}
        </div>
        {/* Small screen */}
        <div className="flex flex-col ml-3 mt-2 mb-1 medium-min:hidden">
          {/* Small screen personal info */}
          <div className="grid grid-cols-[3fr_1fr] medium-min:hidden">
            {/* Name */}
            <div className="mb-2">
              <h5 className={cn("text-lg", poppins_bold.className)}>Name</h5>
              <p>
                {profile.firstName} {profile.lastName}
              </p>
            </div>
            {/* Phone */}
            <div className="mb-2">
              <h5 className={cn("text-lg", poppins_bold.className)}>Phone</h5>
              <p>
                {profile.phone !== ""
                  ? `${profile.phone}`
                  : "No phone number saved"}
              </p>
            </div>
            {/* Email */}
            <div className="mb-2">
              <h5 className={cn("text-lg", poppins_bold.className)}>Email</h5>
              <p>{profile.email}</p>
            </div>
          </div>
          {/* Small screen for address */}
          <div className="medium-min:hidden w-full">
            <h5 className={cn("text-lg", poppins_bold.className)}>Address</h5>
            {profile.address1 ? (
              <>
                <p>{profile.address1}</p>
                {profile.address2 !== "" ? <p>{profile.address2}</p> : null}
                <p>
                  {profile.city} {profile.province}. {postalCode}
                </p>
                <p>{profile.country == "CA" && "Canada"}</p>
              </>
            ) : (
              <p>No address saved.</p>
            )}
          </div>
        </div>
        <div className="mt-2 h-[24px] flex justify-end w-3/12 md-max:mr-2 mr-1">
          <Link href="/profile/edit">
            <Edit className="hover:opacity-50" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

"use client";

import { poppins_bold } from "@/app/font";
import { cn } from "@/libs/utlils";
import { Profile } from "@/types";
import { Edit } from "lucide-react";
import Link from "next/link";

interface EditProfileProps {
  profile: Profile;
}

const ProfileInfo: React.FC<EditProfileProps> = ({ profile }) => {
  return (
    <div className="mb-10">
      <h1 className="text-2xl mb-3">Profile</h1>
      <div className="flex w-1/2 bg-gray-100 rounded-[10px]">
        {/* Left Column for personal */}
        <div className="mr-20 ml-5 my-2">
          {/* Name */}
          <div className="mb-1">
            <h5 className={cn("text-lg", poppins_bold.className)}>Name</h5>
            <p>
              {profile.firstName} {profile.lastName}
            </p>
          </div>
          {/* Email */}
          <div className="mb-1">
            <h5 className={cn("text-lg", poppins_bold.className)}>
              Email Address
            </h5>
            <p>{profile.email}</p>
          </div>
          {/* Phone */}
          <div className="mb-1">
            <h5 className={cn("text-lg", poppins_bold.className)}>
              Phone Number
            </h5>
            <p>
              {profile.phone !== ""
                ? `${profile.phone}`
                : "No phone number saved"}
            </p>
          </div>
        </div>
        {/* Right Column for address information */}
        <div className="my-2 mr-6">
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
        <div className="mt-2 h-[24px] flex justify-end w-3/12">
          <Link href="/profile/edit">
            <Edit className="hover:opacity-50" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

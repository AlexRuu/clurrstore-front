"use client";

import { Profile } from "@/types";

interface EditProfileProps {
  profile: Profile;
}

const ProfileInfo: React.FC<EditProfileProps> = ({ profile }) => {
  return (
    <div>
      <h1 className="text-2xl">Profile</h1>
      <div className="flex w-full">
        {/* Left Column for personal */}
        <div>
          {/* Name */}
          <div>
            <h5>Name</h5>
            <p>
              {profile.firstName} {profile.lastName}
            </p>
          </div>
          {/* Email */}
          <div>
            <h5>Email Address</h5>
            <p>{profile.email}</p>
          </div>
          {/* Phone */}
          <div>
            <h5>Phone Number</h5>
            <p>
              {profile.phone !== ""
                ? `${profile.phone}`
                : "No phone number saved"}
            </p>
          </div>
        </div>
        {/* Right Column for address information */}
        <div>
          <h5>Address</h5>
          <p>{profile.address1}</p>
          {profile.address2 !== "" ? <p>{profile.address2}</p> : null}
          <p>
            {profile.city} {profile.province} {profile.postalCode}
          </p>
          <p>{profile.country == "CA" && "Canada"}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

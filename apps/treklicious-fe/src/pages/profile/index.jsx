import { useEffect } from "react";
import { APIs } from "@/apis";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router";

import Loading from "@/components/common/loading";
import Protected from "@/components/common/protected";
import SettingSetup from "@/components/common/setting-setup";
import PreferencesForm from "@/components/profile/preferences-form";
import ProfileForm from "@/components/profile/profile-form";

export default function Profile() {
  const location = useLocation();
  const queryKey = "get-profile";
  const { queryOptions } = APIs[queryKey];
  const {
    isLoading,
    error,
    data: Profile,
  } = useQuery({
    queryKey: [queryKey],
    ...queryOptions,
  });

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  if (error) {
    console.log("Error in Profile", error);
    return <></>;
  }

  return (
    <Protected>
      <SettingSetup>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <ProfileForm
              preferences={Profile.preferences}
              defaultEmail={Profile.email}
              defaultLastName={Profile.lastName}
              defaultUserName={Profile.userName}
              defaultFirstName={Profile.firstName}
              defaultProfilePic={Profile.profile}
            />
            <PreferencesForm
              profile={Profile}
              defaultState={Profile.preferences?.state}
              defaultSeason={Profile.preferences?.season}
              defaultDifficulty={Profile.preferences?.difficulty}
            />
          </>
        )}
      </SettingSetup>
    </Protected>
  );
}

import { APIs } from "@/apis";
import Loading from "@/components/common/loading";
import Protected from "@/components/common/protected";
import SettingSetup from "@/components/common/setting-setup";
import PreferencesForm from "@/components/profile/preferences-form";
import ProfileForm from "@/components/profile/profile-form";
import { useQuery } from "@tanstack/react-query";

export default function Profile() {
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

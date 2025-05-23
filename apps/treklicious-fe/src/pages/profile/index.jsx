import { APIs } from "@/apis";
import SettingSetup from "@/components/common/setting-setup";
import PreferencesForm from "@/components/profile/preferences-form";
import ProfileForm from "@/components/profile/profile-form";
import { useQuery } from "@tanstack/react-query";

export default function Profile() {
  const queryKey = "get-profile";
  const { queryOptions, meta } = APIs[queryKey];
  const {
    isLoading,
    error,
    data: Profile,
  } = useQuery({
    queryKey: [queryKey],
    ...queryOptions,
    meta,
  });

  if (error) {
    console.log("Error in Profile", error);
    return <></>;
  }

  return (
    <SettingSetup>
      <ProfileForm
        isLoading={isLoading}
        defaultFirstName={Profile?.firstName}
        defaultLastName={Profile?.lastName}
        defaultEmail={Profile?.email}
        defaultUserName={Profile?.userName}
      />
      <PreferencesForm
        isLoading={isLoading}
        defaultState={Profile?.preferences.state}
        defaultSeason={Profile?.preferences.season}
        defaultDifficulty={Profile?.preferences.difficulty}
      />
    </SettingSetup>
  );
}

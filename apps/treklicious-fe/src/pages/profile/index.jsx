import SettingSetup from "@/components/common/setting-setup";
import PreferencesForm from "@/components/profile/preferences-form";
import ProfileForm from "@/components/profile/profile-form";

export default function Profile() {
  return (
    <SettingSetup>
      <ProfileForm
        defaultFirstName={"defaultFirstName"}
        defaultLastName={"defaultLastName"}
        defaultEmail={"defaultEmail"}
        defaultUserName={"defaultUserName"}
      />
      <PreferencesForm
        defaultState={"Uttarakhand"}
        defaultSeason={"Summer"}
        defaultDifficulty={"Easy"}
      />
    </SettingSetup>
  );
}

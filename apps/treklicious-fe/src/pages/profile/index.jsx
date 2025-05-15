import SettingSetup from "@/components/common/setting-setup";
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
      <h3
        id="preferences"
        className="pb-2 border-b-2 border-black w-full text-xl font-semibold cursor-default"
      >
        Preferences
      </h3>
    </SettingSetup>
  );
}

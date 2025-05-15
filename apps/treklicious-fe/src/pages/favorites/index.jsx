import SettingSetup from "@/components/common/setting-setup";
import Treks from "@/assets/Treks.json";
import FavoriteTreks from "@/components/favorites/favorite-treks";

export default function Favorites() {
  return (
    <SettingSetup>
      <h2 className="pb-2 border-b-2 border-black w-full text-3xl font-semibold cursor-default">
        Your favorites are:
      </h2>

      <FavoriteTreks treks={Treks} />
    </SettingSetup>
  );
}

import SettingSetup from "@/components/common/setting-setup";
import ShowTreks from "@/components/common/show-treks";
import { APIs } from "@/apis";
import Loading from "@/components/common/loading";
import { useQuery } from "@tanstack/react-query";
import Protected from "@/components/common/protected";

export default function Favorites() {
  const trekQueryKey = "all-treks";
  const { queryOptions: trekQueryOptions } = APIs[trekQueryKey];
  const {
    isLoading: isTrekLoading,
    error: trekError,
    data: Treks,
  } = useQuery({
    queryKey: [trekQueryKey],
    ...trekQueryOptions,
  });

  const favQueryKey = "get-favorites";
  const {
    isLoading: isFavLoading,
    error: favError,
    data: Favorites,
  } = useQuery({
    queryKey: [favQueryKey],
  });

  return (
    <Protected>
      <SettingSetup>
        {isFavLoading || isTrekLoading ? (
          <Loading />
        ) : (
          <>
            <h2 className="pb-2 border-b-2 border-black w-full text-3xl font-semibold cursor-default">
              Your favorites are:
            </h2>
            {favError || trekError ? (
              <>Something went wrong</>
            ) : (
              <ShowTreks
                treks={Treks.filter((trek) => Favorites.includes(trek._id))}
              />
            )}
          </>
        )}
      </SettingSetup>
    </Protected>
  );
}

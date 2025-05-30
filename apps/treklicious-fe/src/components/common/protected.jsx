import { APIs } from "@/apis";
import AuthAlert from "@/components/common/auth-alert";
import Loading from "@/components/common/loading";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Protected({ children }) {
  const navigate = useNavigate();

  const queryKey = "get-profile";
  const { queryOptions } = APIs[queryKey];
  const { isLoading, error, data } = useQuery({
    queryKey: [queryKey],
    ...queryOptions,
  });

  useEffect(() => {
    if (data?._id) {
      if (
        data.preferences.difficulty === "NA" ||
        data.preferences.state === "NA" ||
        data.preferences.season === "NA"
      )
        navigate("/preferences", {
          state: { user: data },
        });
    }
  }, [data, navigate]);

  if (isLoading) return <Loading />;
  if (error) return <>Something went wrong</>;

  if (!data._id) return <AuthAlert />;

  return <>{children}</>;
}

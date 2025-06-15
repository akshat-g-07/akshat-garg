import { useEffect } from "react";
import { APIs } from "@/apis";
import { ThemeProvider } from "@/providers/theme-provider";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";

import AuthAlert from "@/components/common/auth-alert";
import Error from "@/components/common/error";
import Loading from "@/components/common/loading";

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
  if (error) return <Error />;

  if (!data._id) return <AuthAlert />;

  return <ThemeProvider>{children}</ThemeProvider>;
}

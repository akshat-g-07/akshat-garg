import { APIs } from "@/apis";
import AuthAlert from "@/components/common/auth-alert";
import Loading from "@/components/common/loading";
import Header from "@/components/dashboard/header";
import RestBody from "@/components/dashboard/rest-body";
import VideoSection from "@/components/dashboard/video-section";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";

export default function Dashboard() {
  const navigate = useNavigate();

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

  if (isLoading) return <Loading />;
  if (error) return <>Something went wrong</>;

  if (!Profile._id) return <AuthAlert />;

  if (
    Profile.preferences.difficulty === "NA" ||
    Profile.preferences.state === "NA" ||
    Profile.preferences.season === "NA"
  )
    navigate("/preferences", {
      state: { user: Profile },
    });

  return (
    <>
      <Header />
      <VideoSection />
      <RestBody />
    </>
  );
}

import Protected from "@/components/common/protected";
import Header from "@/components/dashboard/header";
import RestBody from "@/components/dashboard/rest-body";
import VideoSection from "@/components/dashboard/video-section";

export default function Dashboard() {
  return (
    <>
      <Protected>
        <Header />
        <VideoSection />
        <RestBody />
      </Protected>
    </>
  );
}

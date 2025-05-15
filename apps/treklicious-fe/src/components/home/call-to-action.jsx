import { Link } from "react-router";
import SectionTemplate from "./section-template";

export default function CallToAction() {
  const imgSrc =
    "https://wallpapers.com/images/hd/hiking-pink-digital-art-ybik86e53y3r27zg.jpg";
  const rotatingPartDescriptions = [
    "Adventure",
    "Escape",
    "Quest",
    "Getaway",
    "Odyssey",
  ];

  return (
    <SectionTemplate
      bgImgUrl={imgSrc}
      rotatingPartDescriptions={rotatingPartDescriptions}
      subTitle="is your much needed"
      animationDirection="down"
      speed={2}
      className="bg-cover bg-center"
    >
      <p className="font-[Tajawal,sans-serif] text-center font-medium text-lg my-20 w-2/3">
        Welcome to Treklicious, the ultimate destination for adventure seekers.
        Explore a vast selection of exhilarating treks from around the world.
        Immerse yourself in stunning visuals, find comprehensive details, and
        plan your next unforgettable journey. Get ready to embark on the trek of
        a lifetime with Treklicious.
      </p>
      <div className="w-full flex items-center justify-evenly my-20">
        <Link to="/sign-up">
          <button className="py-3 px-6 text-xl border border-white rounded-lg outline-none bg-transparent text-white duration-300 cursor-pointer hover:text-black hover:bg-white/80 hover:border-black transition-all font-semibold">
            Sign Up
          </button>
        </Link>
        <Link to="/log-in">
          <button className="py-3 px-6 text-xl border border-white rounded-lg outline-none bg-transparent text-white duration-300 cursor-pointer hover:text-black hover:bg-white/80 hover:border-black transition-all font-semibold">
            Log In
          </button>
        </Link>
      </div>
    </SectionTemplate>
  );
}

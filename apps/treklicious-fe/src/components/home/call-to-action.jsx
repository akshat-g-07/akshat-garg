import RotatingPart from "./rotating-part";
import { Link } from "react-router";

export default function CallToAction() {
  return (
    <section className="w-full bg-[url('https://wallpapers.com/images/hd/hiking-pink-digital-art-ybik86e53y3r27zg.jpg')] bg-no-repeat bg-cover bg-center flex flex-col items-center px-8 space-y-18 py-16">
      <p className="text-[8vw] font-extrabold font-[Alegreya_SC,serif]">
        TrekLicious
      </p>
      <div className="font-[Poppins,sans-serif] flex flex-col items-center min-w-[400px]">
        <p className="text-xl">is your much needed</p>
        <RotatingPart />
      </div>
      <p className="font-[Tajawal,sans-serif] text-center text-lg">
        Welcome to Treklicious, the ultimate destination for adventure seekers.
        Explore a vast selection of exhilarating treks from around the world.
        Immerse yourself in stunning visuals, find comprehensive details, and
        plan your next unforgettable journey. Get ready to embark on the trek of
        a lifetime with Treklicious.
      </p>
      <div className="w-full flex items-center justify-evenly">
        <Link to="/sign-up">
          <button className="py-2 px-6 text-xl border border-white rounded-lg outline-none bg-transparent text-white duration-300 cursor-pointer hover:text-black hover:bg-white/80 hover:border-black transition-all font-semibold">
            Sign Up
          </button>
        </Link>
        <Link to="/log-in">
          <button className="py-2 px-6 text-xl border border-white rounded-lg outline-none bg-transparent text-white duration-300 cursor-pointer hover:text-black hover:bg-white/80 hover:border-black transition-all font-semibold">
            Log In
          </button>
        </Link>
      </div>
    </section>
  );
}

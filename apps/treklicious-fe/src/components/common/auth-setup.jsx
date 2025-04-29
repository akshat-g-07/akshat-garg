import { Link } from "react-router";

export function Auth({ children }) {
  return (
    <section className="bg-[#0d47a1] flex justify-center min-h-screen pt-5 pb-20">
      {children}
    </section>
  );
}

export function AuthBody({ children }) {
  return (
    <div className="bg-[#ffffff2d] p-10 grid grid-cols-1 md:grid-cols-2 rounded-lg backdrop-blur-xs border border-[#ffffff1a] shadow-2xl md:gap-x-20 mt-25 space-y-12 w-[300px] md:w-[600px] lg:w-[900px]">
      {children}
    </div>
  );
}

export function AuthFooter({ textToShow, CTAUrl, CTAText }) {
  return (
    <>
      <div className="md:col-span-2 h-0.25 w-full bg-black" />
      <div className="md:col-span-2 w-full md:flex md:justify-center-safe md:space-x-1">
        <p>{textToShow}</p>
        <Link to={CTAUrl} className="font-semibold">
          {CTAText}
        </Link>
      </div>
    </>
  );
}

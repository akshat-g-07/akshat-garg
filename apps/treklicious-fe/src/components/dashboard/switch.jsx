import { cn } from "@/lib/utils";

export default function Switch({ isFocused, handleClick }) {
  return (
    <div
      className={cn(
        "h-6 overflow-hidden w-fit",
        isFocused && "hidden md:block"
      )}
    >
      <div
        className={cn(
          "flex flex-col h-fit w-fit transition-all duration-700 ease-in-out translate-y-0 dark:-translate-y-1/2"
        )}
      >
        <MoonSVG onClick={handleClick} />
        <SunSVG onClick={handleClick} />
      </div>
    </div>
  );
}

const SunSVG = ({ onClick }) => (
  <p className="size-6 cursor-pointer" onClick={onClick}>
    <svg viewBox="0 0 24 24" fill="#ffce54">
      <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path>
    </svg>
  </p>
);

const MoonSVG = ({ onClick }) => (
  <p className="size-6 cursor-pointer" onClick={onClick}>
    <svg viewBox="0 0 24 24" fill="#fff3d8">
      <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"></path>
    </svg>
  </p>
);

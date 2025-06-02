export default function Wrapper({ children }) {
  return (
    <>
      <section>
        <h1 className="text-5xl md:text-7xl font-extrabold text-center">
          RatVenture
        </h1>

        <div className="flex flex-col items-center-safe py-8">{children}</div>
      </section>
    </>
  );
}

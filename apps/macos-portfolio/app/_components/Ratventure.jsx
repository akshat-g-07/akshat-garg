export default function Ratventure() {
  return (
    <>
      <p className="text-xl font-semibold">RatVenture</p>
      <div className="text-xs w-full flex justify-between">
        <p>
          <span className="font-semibold">Skills:</span>
          ReactJs | NodeJS | Express | Javascript
        </p>
        <p>
          <a href="https://rat-frontend.onrender.com/" target="_blank">
            (Live)
          </a>
        </p>
      </div>
      • Visualization of famous Rat-In-A-Maze problem.
      <br />
      • Engineered an interactive interface empowering users to dynamically
      configure matrix dimensions, starting point, blocks, and destination
      point.
      <br />
      • Incorporated functionality for users to opt for random generation of the
      aforementioned parameters, enhancing flexibility and user experience.
      <br />• User will be able to see all the viable routes from starting point
      to destination point.
    </>
  );
}

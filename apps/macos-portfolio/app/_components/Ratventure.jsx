export default function Ratventure() {
  return (
    <>
      <p className="text-xl mb-1 font-semibold">RatVenture</p>
      <div className="text-xs w-full flex justify-between items-center">
        <p>
          <span className="font-semibold">Skills:</span>
          ReactJs | NodeJS | Express | Javascript
        </p>
        <p>
          <a
            href="https://rat-frontend.onrender.com/"
            className="font-bold text-base"
            target="_blank"
          >
            (Live)
          </a>
        </p>
      </div>
      <ul class="list-disc list-inside">
        <li>
          Visualization of famous<b> Rat-In-A-Maze</b> problem.
        </li>
        <li>
          Engineered an interactive interface empowering users to
          <b> dynamically configure matrix</b> dimensions, starting point,
          blocks, and destination point.
        </li>
        <li>
          Incorporated functionality for users to opt for
          <b> random generation</b> of the aforementioned parameters, enhancing
          flexibility and user experience.
        </li>
        <li>
          User will be able to see all the<b> viable routes</b> from starting
          point to destination point.
        </li>
      </ul>
    </>
  );
}

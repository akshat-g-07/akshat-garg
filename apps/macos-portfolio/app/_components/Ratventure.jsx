export default function Ratventure() {
  return (
    <>
      <p className="text-xl mb-1 font-semibold font-tInput">RatVenture</p>
      <div className="text-xs w-full flex justify-between items-center font-tOutput">
        <p>
          <span className="font-semibold">Skills:</span>
          ReactJs | NodeJS | Express | Javascript
        </p>
        <p>
          <a
            href="https://rat-frontend.onrender.com/"
            className="font-bold text-base hover:opacity-75"
            target="_blank"
          >
            (Live)
          </a>
        </p>
      </div>
      <ul class="list-disc list-inside">
        <li className="py-2">
          Visualization of famous<b> Rat-In-A-Maze</b> problem.
        </li>
        <li className="py-2">
          Engineered an interactive interface empowering users to
          <b> dynamically configure matrix</b> dimensions, starting point,
          blocks, and destination point.
        </li>
        <li className="py-2">
          Incorporated functionality for users to opt for
          <b> random generation</b> of the aforementioned parameters, enhancing
          flexibility and user experience.
        </li>
        <li className="py-2">
          User will be able to see all the<b> viable routes</b> from starting
          point to destination point.
        </li>
      </ul>
    </>
  );
}

export default function Grillzilla() {
  return (
    <>
      <p className="text-xl mb-1 font-semibold">GrillZilla</p>
      <div className="text-xs w-full flex justify-between items-center">
        <p>
          <span className="font-semibold">Skills:</span>
          ReactJs | API | Axios
        </p>
        <p>
          <a
            href="https://restaurant-bulc.onrender.com/"
            className="font-bold text-base"
            target="_blank"
          >
            (Live)
          </a>
        </p>
      </div>
      <ul class="list-disc list-inside">
        <li>
          A<b> frontend application</b> to show the menu of the restaurant
          <b> incorporating API integration.</b>
        </li>
        <li>
          Implemented<b> Axios API</b> to acquire user’s location and show him
          the restaurants closest to him.
        </li>
        <li>
          Using<b> Google Maps API</b> user can see the directions to the
          restaurant location from his/her.
        </li>
      </ul>
    </>
  );
}

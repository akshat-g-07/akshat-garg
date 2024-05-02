export default function Treklicious() {
  return (
    <>
      <p className="text-xl mb-1 font-semibold font-tInput">TrekLicious</p>
      <div className="text-xs w-full flex justify-between items-center font-tOutput">
        <p>
          <span className="font-semibold">Skills:</span>
          ReactJS | NodeJS | Express | MongoDB | MUI
        </p>
        <p>
          <a
            href="https://treklicious.onrender.com/"
            className="font-bold text-base hover:opacity-75"
            target="_blank"
          >
            (Live)
          </a>
        </p>
      </div>
      <ul class="list-disc list-inside">
        <li className="py-2">
          Developed a <b>preference-based</b> full-stack web application with a
          user-friendly interface that caters to trek lovers.
        </li>
        <li className="py-2">
          Implemented <b>user authentication</b> system <b>using JWT</b>,
          allowing users to securely signup, login and update their profiles.
        </li>
        <li className="py-2">
          The website’s main objective is to assist trek lovers in determining
          the appropriate treks for themselves.
        </li>
        <li className="py-2">
          User can also create a <b>favorite list</b> and
          <b> add/remove items</b> from their list.
        </li>
      </ul>
    </>
  );
}

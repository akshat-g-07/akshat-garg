export default function NotesProject({
  project: { name, live, skills, description },
}) {
  return (
    <>
      <p className="text-xl mb-1 font-semibold font-tInput">{name}</p>
      <div className="text-xs w-full flex justify-between items-center font-tOutput">
        <p>
          <span className="font-semibold">Skills:&nbsp;</span>
          {skills.join(" | ")}
        </p>
        <p>
          <a
            href={live}
            className="font-bold text-base hover:opacity-75"
            target="_blank"
          >
            (Live)
          </a>
        </p>
      </div>
      <ul class="list-disc list-inside">
        {description.map((item, indx) => (
          <li key={indx} className="py-2">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

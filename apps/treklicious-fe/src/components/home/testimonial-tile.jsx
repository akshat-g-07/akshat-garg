export default function TestimonialTile({ text, name }) {
  return (
    <div className="w-full border-16 border-blue-500 h-fit relative py-4 px-12 group/testimonial-tile cursor-default">
      <div
        id="first-div"
        className="absolute leading-10 top-0 left-0 bg-white text-blue-700 text-9xl font-extrabold font-[Alegreya_SC,serif] -translate-y-1/2 transition-transform duration-500 group-hover/testimonial-tile:rotate-[720deg]"
      >
        "
      </div>
      <div className="w-full font-semibold text-xl group-hover/testimonial-tile:h-[200px] h-0 overflow-hidden transition-all duration-500 origin-center ease-in-out">
        {text}
      </div>
      <div className="w-fit bottom-1 absolute font-medium italic text-center left-1/2 -translate-x-1/2 group-hover/testimonial-tile:left-full group-hover/testimonial-tile:-translate-x-[110%] transition-all duration-500 text-nowrap">
        - {name}
      </div>
    </div>
  );
}

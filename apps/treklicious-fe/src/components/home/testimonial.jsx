import SectionTemplate from "./section-template";
import TestimonialTile from "./testimonial-tile";

const testimonials = [
  {
    text: "Unforgettable adventure! The trekking experience with breathtaking views exceeded my expectations.",
    name: "Virat Kohli",
  },
  {
    text: "The trekking expedition pushed my limits and allowed me to discover my inner strength. It was an empowering journey.",
    name: "Rohit Sharma",
  },
  {
    text: "Trekking through rugged terrains challenged my endurance. It was a thrilling adventure filled with stunning landscapes.",
    name: "Hardik Pandya",
  },
  {
    text: "The trekking experience was both physically and mentally invigorating. It taught me the importance of resilience and determination.",
    name: "Ravindra Jadeja",
  },
  {
    text: "Trekking in these breathtaking landscapes was a dream come true. The memories will stay with me forever.",
    name: "Jasprit Bumrah",
  },
  {
    text: "Exploring the wilderness on foot was a remarkable experience. The trekking trails offered a deep connection with nature.",
    name: "Rishabh Pant",
  },
];

export default function Testimonial() {
  return (
    <SectionTemplate subTitle="for all!" speed={0}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 grid-rows-[minmax(280px,_auto)_minmax(280px,_auto)] items-center">
        {testimonials.map((item, index) => (
          <TestimonialTile key={index} text={item.text} name={item.name} />
        ))}
      </div>
    </SectionTemplate>
  );
}

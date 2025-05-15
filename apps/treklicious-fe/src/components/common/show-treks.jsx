import Tile from "@/components/common/tile";

export default function ShowTreks({ treks }) {
  // MARK: uuid pls
  return (
    <div className="grid grid-cols-1 min-[900px]:grid-cols-2 min-[1440px]:grid-cols-3 min-[2000px]:grid-cols-4 gap-x-4 gap-y-6 items-center-safe py-10">
      {treks.map(({ name, img }) => (
        <Tile
          key={name}
          alt={name}
          imgSrc={img}
          title={name}
          link={name}
          className="mx-auto"
        />
      ))}
    </div>
  );
}

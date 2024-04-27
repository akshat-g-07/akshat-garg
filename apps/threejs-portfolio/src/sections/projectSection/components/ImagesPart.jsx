/* eslint-disable react/prop-types */
import { useEffect } from "react";

const ImagesPart = ({ images, name }) => {
  const classValue =
    name === "TrekLicious"
      ? "projectImageCarouselChild flex animate-projectSlideAnimationtreklicious"
      : name === "RatVenture"
      ? "projectImageCarouselChild flex animate-projectSlideAnimationratventure"
      : "projectImageCarouselChild flex animate-projectSlideAnimationgrillzilla";
  const divWidth = window.innerWidth < 768 ? "18rem" : "20rem";
  useEffect(() => {
    const copy = document
      .querySelector(".projectImageCarouselChild")
      .cloneNode(true);
    document.querySelector(".projectImageCarouselContainer").appendChild(copy);
  }, []);

  return (
    <div className="projectImageCarouselContainer h-40 flex">
      <div
        className={classValue}
        style={{
          width: `calc(${divWidth} * ${images.length})`,
        }}
      >
        {images.map((image) => {
          return (
            <div
              key={image}
              style={{
                backgroundImage: `url('./projects/${name.toLowerCase()}/${image}')`,
              }}
              className="h-40 w-72 md:w-80 bg-center bg-no-repeat bg-cover"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImagesPart;

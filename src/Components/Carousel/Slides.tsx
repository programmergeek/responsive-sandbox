import React from "react";

export const Slides: React.FC<{
  elements: JSX.Element[];
  currentSlide: number;
  translateAmount: number;
}> = ({ ...props }) => {
  return (
    <div className="overflow-hidden h-1/2" id={"slides"}>
      <div
        className={`flex`}
        style={{ transform: `translate(${props.translateAmount}px, 0)` }}
      >
        {props.elements.map((slide, key) => {
          return (
            <img
              src={slide.props.src}
              key={key}
              alt="slide"
              className="min-w-[75%] lg:min-w-[50%] mx-1 md:mx-2 self-center rounded-3xl"
            />
          );
        })}
      </div>
    </div>
  );
};

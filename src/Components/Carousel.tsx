import React, { useState } from "react";
import { IconButton } from ".";
import { ChevronRight } from "@styled-icons/boxicons-regular/ChevronRight";
import { ChevronLeft } from "@styled-icons/boxicons-regular/ChevronLeft";

// prop type definition

type carouselProps = {
  loop?: boolean;
};

const Slides: React.FC<{
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

const LeftNav: React.FC<{
  setTranslateAmount: React.Dispatch<React.SetStateAction<number>>;
}> = ({ ...props }) => {
  return (
    <div
      onClick={() => {
        props.setTranslateAmount((current) => current - 125);
        console.log("hello");
      }}
    >
      <IconButton buttonIcon={<ChevronLeft />} />
    </div>
  );
};
const RightNav: React.FC<{
  setTranslateAmount: React.Dispatch<React.SetStateAction<number>>;
}> = ({ ...props }) => {
  return (
    <div
      onClick={() => {
        props.setTranslateAmount((current) => current + 125);
        console.log("hello");
      }}
    >
      <IconButton buttonIcon={<ChevronRight />} />
    </div>
  );
};

export const Carousel: React.FC<carouselProps> = ({ ...props }) => {
  const [disableLeftNav, updateDisableLeftNav] = useState(true);
  const [disableRightNav, updateDisableRightNav] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [translateAmount, setTranslateAmount] = useState(0);
  const slides = props.children?.valueOf() as JSX.Element[];
  return (
    <div>
      <Slides
        elements={slides}
        currentSlide={currentSlide}
        translateAmount={translateAmount}
      />
      <LeftNav setTranslateAmount={setTranslateAmount} />
      <RightNav setTranslateAmount={setTranslateAmount} />
    </div>
  );
};

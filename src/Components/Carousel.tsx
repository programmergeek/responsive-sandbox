import React, { useState } from "react";
import { IconButton } from ".";
import { ChevronRight } from "@styled-icons/boxicons-regular/ChevronRight";
import { ChevronLeft } from "@styled-icons/boxicons-regular/ChevronLeft";

// prop type definition

type carouselProps = {
  loop?: boolean;
};

const Slides: React.FC<{ elements: JSX.Element[]; currentSlide: number }> = ({
  ...props
}) => {
  return (
    <div className="flex flex-nowrap h-1/2 ">
      {props.elements.map((slide, key) => {
        return (
          <img
            src={slide.props.src}
            key={key}
            alt="slide"
            className="min-w-[75%] lg:min-w-[42%] mx-1 md:mx-5 self-center rounded-3xl"
          />
        );
      })}
    </div>
  );
};

export const Carousel: React.FC<carouselProps> = ({ ...props }) => {
  const [disableLeftNav, updateDisableLeftNav] = useState(true);
  const [disableRightNav, updateDisableRightNav] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = props.children?.valueOf() as JSX.Element[];
  return (
    <div>
      <Slides elements={slides} currentSlide={currentSlide} />
    </div>
  );
};

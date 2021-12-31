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
    <div className="flex flex-nowrap h-[52vh]">
      {props.elements.map((slide, key) => {
        if (props.currentSlide === key) {
          return (
            <img
              src={props.elements[key].props.src}
              key={key}
              alt="slide"
              className="w-[60vw] mx-10 scale-110 self-center rounded-3xl"
            />
          );
        } else {
          return (
            <img
              src={props.elements[key].props.src}
              key={key}
              alt="slide"
              className="w-[60vw] mx-5 self-center rounded-3xl"
            />
          );
        }
      })}
    </div>
  );
};

export const Carousel: React.FC<carouselProps> = ({ ...props }) => {
  const [disableLeftNav, updateDisableLeftNav] = useState(true);
  const [disableRightNav, updateDisableRightNav] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const slides = props.children?.valueOf() as JSX.Element[];
  return (
    <div>
      <Slides elements={slides} currentSlide={currentSlide} />
    </div>
  );
};

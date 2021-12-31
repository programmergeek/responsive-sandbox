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
    <div className="flex flex-nowrap h-fit">
      {props.elements.map((slide, key) => {
        if (props.currentSlide === key) {
          return (
            <img
              src={slide.props.src}
              key={key}
              alt="slide"
              className="w-[100vw] md:w-3/4 lg:w-2/3 mr-3 md:mx-10 md:scale-110 self-center rounded-3xl"
            />
          );
        } else {
          return (
            <img
              src={slide.props.src}
              key={key}
              alt="slide"
              className="w-[100vw] md:w-3/4 lg:w-2/3 mr-3 md:mx-5 self-center rounded-3xl"
            />
          );
        }
      })}
    </div>
  );
};

const Indicator: React.FC<{ currentSlide: number; amtOfSlides: number }> = ({
  ...props
}) => {
  const indicators = [] as JSX.Element[];
  for (let i = 0; i < props.amtOfSlides; i++) {
    if (i === props.currentSlide) {
      indicators.push(
        <div className="rounded-full bg-lightModeDark dark:bg-darkModeLight w-4 h-4"></div>
      );
    } else {
      indicators.push(
        <div className="rounded-full bg-transparent border-4 border-lightModeDark dark:bg-darkModeLight w-4 h-4"></div>
      );
    }
  }
  return (
    <div className="flex justify-center mt-10">
      {indicators.map((indicator) => indicator)}
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
      <Indicator currentSlide={currentSlide} amtOfSlides={slides.length} />
    </div>
  );
};

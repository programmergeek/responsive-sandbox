import React, { useState } from "react";

// prop type definition

type carouselProps = {
  buttonColour?: string | "none";
  autoScroll?: boolean;
  loop?: boolean;
  hideNavigationButtons?: boolean;
  hideIndicator?: boolean;
  height?: string;
};

type indicatorProps = {
  numOfSlides: number;
  currentSlide: number;
  setCurrentSlide: (val: number) => void;
};

/**
 * Indicator:
 * Shows which slide you are currently on.
 * Can be used to navigate to any slide by clicking on the corresponding slide indicator.
 */

const indicators = (
  numOfSlides: number,
  currentSlide: number
): JSX.Element[] => {
  const indicators = [];
  for (let i = 0; i < numOfSlides; i++) {
    if (currentSlide === i) {
      indicators.push(
        <div className="w-4 h-4 cursor-pointer bg-lightModeDark rounded-full border-lightModeDark dark:bg-darkModeMid dark:border-darkModeMid"></div>
      );
    } else {
      indicators.push(
        <div className="w-4 h-4 cursor-pointer rounded-full border-[3px] border-lightModeDark dark:border-darkModeMid"></div>
      );
    }
  }
  return indicators;
};

const Indicator: React.FC<indicatorProps> = ({ ...props }) => {
  return (
    <div className="flex flex-row">
      {indicators(props.numOfSlides, props.currentSlide).map((i, key) => {
        return (
          <div
            key={key}
            className="mx-1"
            onClick={() => props.setCurrentSlide(key)}
          >
            {i}
          </div>
        );
      })}
    </div>
  );
};

/**
 * Carousel:
 * Displays elements passed in side by side. Elements to be displayed are passed in as child elements.
 * The component is built with image elements in mind, other types of elements can be passed in to varying degrees of success.
 *
 */
export const Carousel: React.FC<carouselProps> = ({ ...props }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  return (
    <div>
      <Indicator
        currentSlide={currentSlide}
        numOfSlides={5}
        setCurrentSlide={setCurrentSlide}
      />
    </div>
  );
};

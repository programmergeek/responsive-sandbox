import React, { useState } from "react";
import { Slides } from "./Slides";
import { LeftNav, RightNav } from "./NavButtons";

// prop type definition

type carouselProps = {
  loop?: boolean;
};

export const Carousel: React.FC<carouselProps> = ({ ...props }) => {
  //const [disableLeftNav, updateDisableLeftNav] = useState(true);
  //const [disableRightNav, updateDisableRightNav] = useState(false);
  const [currentSlide] = useState(0);
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

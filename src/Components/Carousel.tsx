import React from "react";

type carouselProps = {
  buttonColour?: string | "none";
  autoScroll?: boolean;
  loop?: boolean;
  hideNavigationButtons?: boolean;
  hideIndicator?: boolean;
  height?: string;
};

/**
 * Displays elements passed in side by side. Elements to be displayed are passed in as child elements.
 * The component is built with image elements in mind, other types of elements can be passed in to varying degrees of success.
 *
 */
export const Carousel: React.FC<carouselProps> = ({ ...props }) => {
  return <div></div>;
};

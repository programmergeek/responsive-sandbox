import React from "react";
import { IconButton } from "..";
import { ChevronRight } from "@styled-icons/boxicons-regular/ChevronRight";
import { ChevronLeft } from "@styled-icons/boxicons-regular/ChevronLeft";

export const LeftNav: React.FC<{
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

export const RightNav: React.FC<{
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

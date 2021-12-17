import React from "react";

type ButtonProps = {
  disabled: boolean;
  iconStart: Node;
  iconEnd: Node;
  type: "primary" | "secondary" | "tertiary";
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return <button>{props.children}</button>;
};

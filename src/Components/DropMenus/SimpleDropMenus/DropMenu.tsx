import React, { useState } from "react";
import { Button } from "../..";
import { CaretDownFill } from "@styled-icons/bootstrap/CaretDownFill";

type DropMenuProps = {
  menuName: string;
};

export const DropMenu: React.FC<DropMenuProps> = ({ ...props }) => {
  const [showMenu, updateShowMenu] = useState(false);

  return (
    <div>
      <Button
        iconEnd={<CaretDownFill />}
        onClick={() => updateShowMenu(!showMenu)}
      >
        Drop Menu
      </Button>
      <p className="text-base">{showMenu + ""}</p>
    </div>
  );
};

import React from "react";
import Icon from "../icon";

type Props = {};

const Menu = (props: Props) => {
  return (
    <div className="block lg:hidden">
      <button className="text-white">
        <Icon iconName="Hamburger" />
      </button>
    </div>
  );
};

export default Menu;

import Image from "next/image";
import React from "react";

const Slider = () => {
  const icons = [
    "/techs/html.png",
    "/techs/javascript.png",
    "/techs/figma.png",
    "/techs/mongodb.png",
    "/techs/reactjs.png",
    "/techs/docker.png",
    "/techs/redux.png",
    "/techs/tailwind.png",
    "/techs/css.png",
  ];
  return (
    <div className="flex justify-center items-center gap-16">
      {icons.map((icon, i) => (
        <Image key={i} src={icon} alt="icon" width={50} height={50} />
      ))}
    </div>
  );
};

export default Slider;

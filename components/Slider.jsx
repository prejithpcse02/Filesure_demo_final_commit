"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect } from "react";

const Slider = () => {
  useEffect(() => {
    gsap.fromTo(
      "#icon_anim",
      { x: -250, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#icon_anim",
          toggleActions: "restart reverse restart reverse",
          start: "top 85%",
        },
      }
    );
  }, []);
  const icons = [
    "/techs/html.png",
    "/techs/javascript.png",
    "/techs/figma.png",
    "/techs/mongodb.png",
    "/techs/next.svg",
    "/techs/reactjs.png",
    "/techs/docker.png",
    "/techs/redux.png",
    "/techs/tailwind.png",
    "/techs/css.png",
  ];
  return (
    <div className="flex justify-center items-center gap-16">
      {icons.map((icon, i) => (
        <Image
          key={i}
          src={icon}
          alt="icon"
          width={50}
          height={50}
          id="icon_anim"
        />
      ))}
    </div>
  );
};

export default Slider;

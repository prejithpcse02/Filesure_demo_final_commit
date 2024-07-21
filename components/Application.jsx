"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect } from "react";
import { desc1, desc2 } from "@constants";

const Application = () => {
  useEffect(() => {
    const staggerOptions = { stagger: 0.1 };
    gsap.fromTo(
      "#left",
      { x: -250, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#left",
          toggleActions: "restart reverse restart reverse",
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      "#right",
      { x: 250, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#right",
          toggleActions: "restart reverse restart reverse",
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section className="max-w-[90vw] xl:max-w-[1120px] mx-auto bg-white">
      <h1 className="head_text1">Application Development Stages</h1>
      <div className="flex sm:flex-row flex-col items-center gap-8 sm:gap-2 sm:justify-between my-16">
        <div className="flex flex-col gap-5 max-w-[392px]">
          {desc1.map((desc, i) => (
            <div
              key={i}
              id="left"
              className="flex flex-col gap-3 shadow-lg shadow-gray-300 bg-white border border-gray-200 px-6 py-6 rounded-lg"
            >
              <div className="flex gap-6">
                <Image src={desc.icons} alt="icon" width={30} height={20} />
                <span className="text-lg font-medium">{desc.title}</span>
              </div>
              <p className="text-sm">{desc.text}</p>
            </div>
          ))}
        </div>
        <Image src="/images/Phone3.svg" alt="phone" height={365} width={235} />
        <div className="flex flex-col gap-5 max-w-[392px]">
          {desc2.map((desc, i) => (
            <div
              key={i}
              id="right"
              className="flex flex-col gap-3 shadow-lg shadow-gray-300 bg-white border border-gray-200 px-6 py-6 rounded-lg"
            >
              <div className="flex gap-6">
                <Image src={desc.icons} alt="icon" width={30} height={20} />
                <span className="text-lg font-medium">{desc.title}</span>
              </div>
              <p className="text-sm">{desc.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Application;

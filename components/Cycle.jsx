import React from "react";
import Slider from "./Slider";
import Image from "next/image";

const Cycle = () => {
  const devs = [
    "iOS developement",
    "Android Development",
    "Web Development",
    "UI/UX design",
    "Testing",
    "Launch",
    "IT consulting",
  ];
  return (
    <section className="w-screen flex flex-col">
      <Slider />
      <div className="min-w-[1120px] mx-auto flex">
        <div className="flex-1 max-w-[496px] px-10">
          <h1 className="head_text1">Full Development Cycle</h1>
          <p className="para mt-4">We use proven technologies</p>
          <div className="pt-8">
            <p className="font-semibold text-lg text-black">Web</p>
            <p className="tech-font">
              PHP / Javascript / Node JS / Web Socket / Vue.js / Nuxt / MySQL /
              Laravel / GO Lang / django / Python
            </p>
          </div>
          <div className="pt-7">
            <p className="font-semibold text-lg text-black">Mobile</p>
            <p className="tech-font">
              Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm /
              Caroutine / RxJava / RxSwift / Unit Test / Navigation
            </p>
          </div>
        </div>
        <div className="flex-1 pt-[70px] pl-20">
          {devs.map((dev, i) => (
            <div key={i} className="flex gap-6 pt-5 cursor-pointer ">
              <span className="text-base text-gray-600 transition-all hover:text-[#80A948] border-b-0 hover:border-b-2 hover:border-[#80A948]">
                {dev}
              </span>
              <Image
                src="/images/right.svg"
                alt="Right"
                width={16}
                height={16}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cycle;

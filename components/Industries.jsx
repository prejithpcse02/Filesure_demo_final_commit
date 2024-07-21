"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useState } from "react";
import { list1, list2, list3, content } from "@constants";

gsap.registerPlugin(ScrollTrigger);

const Industries = () => {
  useEffect(() => {
    // Ensure this runs only on the client side

    const staggerOptions = { stagger: 0.1 };

    gsap.fromTo(
      "#industry1 .industry-item",
      { x: -250, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: staggerOptions.stagger,
        scrollTrigger: {
          trigger: "#industry1",
          toggleActions: "restart reverse restart reverse",
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      "#industry2 .industry-item",
      { x: -250, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: staggerOptions.stagger,
        scrollTrigger: {
          trigger: "#industry2",
          toggleActions: "restart reverse restart reverse",
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      "#industry3 .industry-item",
      { x: -250, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: staggerOptions.stagger,
        scrollTrigger: {
          trigger: "#industry3",
          toggleActions: "restart reverse restart reverse",
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      "#project_left",
      { x: -250, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#project_left",
          toggleActions: "restart reverse restart reverse",
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      "#project_right",
      { x: 250, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#project_right",
          toggleActions: "restart reverse restart reverse",
          start: "top 85%",
        },
      }
    );
  }, []);

  const [activePage, setActivePage] = useState(1);

  return (
    <section className="w-screen flex flex-col mt-20 bg-[#F2F4F7] pb-10">
      <h1
        className="head_text text-center max-w-[90vw] xl:w-[660px] mx-auto"
        id="title"
      >
        Developed more than <span className="text-[#80A948]">100</span> projects
        in <span className="text-[#80A948]">15</span> industries
      </h1>
      <div className="xl:min-w-[1120px] sm:mx-auto max-w-[90vw] flex sm:flex-row flex-col max-sm:pl-9 xl:gap-48 mt-20">
        <div className="flex flex-col gap-4 " id="industry1">
          {list1.map((item, i) => (
            <div key={i} className="flex gap-6 industry-item">
              <div className="w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center">
                <Image
                  src={item.icon}
                  alt="icon"
                  width={16}
                  height={16}
                  className="text-[#FFBA00] "
                />
              </div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 " id="industry2">
          {list2.map((item, i) => (
            <div key={i} className="flex gap-6 industry-item">
              <div className="w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center">
                <Image
                  src={item.icon}
                  alt="icon"
                  width={16}
                  height={16}
                  className="text-[#FFBA00] "
                />
              </div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 " id="industry3">
          {list3.map((item, i) => (
            <div key={i} className="flex gap-6 industry-item">
              <div className="w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center">
                <Image
                  src={item.icon}
                  alt="icon"
                  width={16}
                  height={16}
                  className="text-[#FFBA00] "
                />
              </div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[90vw] xl:max-w-[1120px] flex flex-col items-start mt-20 mx-auto">
        <h2 className="head_text1">Projects we are proud of</h2>
        <p className="para">
          Crafted an innovative rental property management app, seamlessly
          integrating secure login, absence registration, and a tenant notice
          board. Elevating the resident experience with user-friendly design and
          efficient communication channels
        </p>
        <div className="sm:flex gap-4 sm:space-x-4 my-8">
          {Object.keys(content).map((page) => (
            <button
              key={page}
              className={`p-2 border-b-2 ${
                activePage === parseInt(page)
                  ? "border-[#FFBA00] text-[#FFBA00]"
                  : "border-transparent text-gray-600"
              }`}
              onClick={() => setActivePage(parseInt(page))}
            >
              {content[page].title}
            </button>
          ))}
        </div>
        <div className="flex flex-row gap-20 w-full">
          <div className=" flex-1 sm:w-1/2" id="project_left">
            <h2 className="head_text1">{content[activePage].title}</h2>
            <p className="para">{content[activePage].text}</p>
            <p className="tech-font">{content[activePage].tech}</p>
            <div className="flex mt-5 gap-5">
              <div className="flex justify-center items-center gap-2">
                <Image
                  src="/icons-industries/location.svg"
                  alt="location"
                  width={20}
                  height={20}
                />
                <span className="para_link">{content[activePage].country}</span>
              </div>
              <div className="flex gap-2">
                <Image
                  src="/icons-industries/real.svg"
                  alt="real estate"
                  width={20}
                  height={20}
                />
                <span className="para_link">{content[activePage].sector}</span>
              </div>
            </div>
            <div className="flex gap-12 mt-5">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-slate-800">
                  {content[activePage].growth}
                </span>
                <span className="tech-font1">User Growth</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-slate-800">
                  {content[activePage].active}
                </span>
                <span className="tech-font1">Active Users</span>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <Image
                src="/images/Appstore.svg"
                alt="app store"
                width={136}
                height={40}
              />
              <Image
                src="/images/Playstore.svg"
                alt="play store"
                width={136}
                height={40}
              />
            </div>
          </div>
          <div className="hidden sm:flex w-1/2 p-8" id="project_right">
            <Image
              src={content[activePage].img}
              alt="Static Image"
              width={400}
              height={300}
              className="max-h-[450px] w-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;

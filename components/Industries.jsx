"use client";
import Image from "next/image";
import { useState } from "react";

const Industries = () => {
  const list1 = [
    { name: "Social Media", icon: "/images/right.svg" },
    { name: "Fitness & Sports", icon: "/images/right.svg" },
    { name: "Bank", icon: "/images/right.svg" },
    { name: "Construction", icon: "/images/right.svg" },
    { name: "Game Projects", icon: "/images/right.svg" },
  ];
  const list2 = [
    { name: "Education", icon: "/images/right.svg" },
    { name: "Auto & Transport", icon: "/images/right.svg" },
    { name: "Medicine & Health", icon: "/images/right.svg" },
    { name: "Restraunt & Food Delivery", icon: "/images/right.svg" },
    { name: "Market Place", icon: "/images/right.svg" },
  ];
  const list3 = [
    { name: "AR Technology", icon: "/images/right.svg" },
    { name: "TV Series", icon: "/images/right.svg" },
    { name: "Startups", icon: "/images/right.svg" },
    { name: "Regions", icon: "/images/right.svg" },
    { name: "Online Services", icon: "/images/right.svg" },
  ];
  const [activePage, setActivePage] = useState(1);

  const content = {
    1: {
      title: "Project 1",
      text: "Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels",
      tech: "Business Analyst / iOS / Android / QA / UI/UX Design",
      country: "India",
      sector: "Real Estate",
      growth: "400%",
      active: "+200000",
      img: "/images/Phone1.svg",
    },
    2: {
      title: "Project 2",
      text: "Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels",
      tech: "Software Development / iOS / Android / QA / UI/UX Design",
      country: "India",
      sector: "Real Estate",
      growth: "200%",
      active: "+100000",
      img: "/images/Phone3.svg",
    },
    3: {
      title: "Project 3",
      text: "Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels",
      tech: "Business Analyst / iOS / Android / QA / UI/UX Design",
      country: "India",
      sector: "Real Estate",
      growth: "400%",
      active: "+200000",
      img: "/images/Phone1.svg",
    },
    4: {
      title: "Project 2",
      text: "Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels",
      tech: "Software Development / iOS / Android / QA / UI/UX Design",
      country: "India",
      sector: "Real Estate",
      growth: "200%",
      active: "+100000",
      img: "/images/Phone3.svg",
    },
  };
  return (
    <section className="w-screen flex flex-col mt-20 bg-[#F2F4F7]">
      <h1 className="head_text text-center w-[660px] mx-auto">
        Developed more than <span className="text-[#80A948]">100</span> projects
        in <span className="text-[#80A948]">15</span> industries
      </h1>
      <div className="min-w-[1120px] mx-auto flex gap-48 mt-20">
        <div className="flex flex-col">
          {list1.map((item, i) => (
            <div key={i} className="flex gap-6">
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
        <div className="flex flex-col">
          {list2.map((item, i) => (
            <div key={i} className="flex gap-6">
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
        <div className="flex flex-col">
          {list3.map((item, i) => (
            <div key={i} className="flex gap-6">
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
      <div className="max-w-[1120px] flex flex-col items-start mt-20 mx-auto">
        <h2 className="head_text1">Projects we are proud of</h2>
        <p className="para">
          Crafted an innovative rental property management app, seamlessly
          integrating secure login, absence registration, and a tenant notice
          board. Elevating the resident experience with user-friendly design and
          efficient communication channels
        </p>
        <div className="flex space-x-4 my-8">
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
          <div className="w-1/2">
            <h2 className="head_text1">{content[activePage].title}</h2>
            <p className="para">{content[activePage].text}</p>
            <p className="tech-font">{content[activePage].tech}</p>
            <div className="flex mt-5 gap-5">
              <div className="flex gap-2">
                <Image
                  src="/images/right.svg"
                  alt="location"
                  width={20}
                  height={20}
                />
                <span className="para">{content[activePage].country}</span>
              </div>
              <div className="flex gap-2">
                <Image
                  src="/images/right.svg"
                  alt="location"
                  width={20}
                  height={20}
                />
                <span className="para">{content[activePage].sector}</span>
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
          <div className="w-1/2 p-8">
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

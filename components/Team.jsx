"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const teamMembersRef = useRef(null);
  const projectsRef = useRef(null);
  const yearsRef = useRef(null);

  useEffect(() => {
    const animateCount = (ref, endValue, suffix = "") => {
      gsap.fromTo(
        ref.current,
        { innerText: 0 },
        {
          innerText: endValue,
          duration: 2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "restart reverse restart reverse",
          },
          snap: { innerText: 1 },
          onUpdate: () => {
            ref.current.innerText = `${Math.ceil(
              ref.current.innerText
            )} ${suffix}`;
          },
        }
      );
    };

    animateCount(teamMembersRef, 28);
    animateCount(projectsRef, 100, "+");
    animateCount(yearsRef, 7, "years");
  }, []);

  return (
    <section className="w-screen bg-[#F2F4F7]">
      <div className="max-w-[90vw] xl:max-w-[1120px] min-h-[468px] mx-auto flex xl:flex-row flex-col justify-between max-xl:gap-8">
        <div className="flex flex-col gap-8 max-w-[560px]">
          <h1 className="head_text1">Our Team</h1>
          <p className="para2">
            Thousand is a full-cycle digital production company with its own
            product analytics, design, web and mobile development.
          </p>
          <div className="flex gap-4 sm:gap-8">
            <div className="flex flex-col items-center">
              <span
                ref={teamMembersRef}
                className="text-3xl sm:text-4xl font-bold"
              >
                0
              </span>
              <span className="font-medium text-sm text-slate-400 pt-2">
                Team Members
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span
                ref={projectsRef}
                className="text-3xl sm:text-4xl font-bold"
              >
                0+
              </span>
              <span className="font-medium text-sm text-slate-400 pt-2">
                projects
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span ref={yearsRef} className="text-3xl sm:text-4xl font-bold">
                0
              </span>
              <span className="font-medium text-sm text-slate-400 pt-2">
                in IT Sphere
              </span>
            </div>
          </div>
          <p className="para2">
            All the necessary specialists - from a designer to a tester - are on
            our staff. We hire the best specialists in the market. It&apos;s
            expensive but worth it.
          </p>
        </div>
        <Image
          src="/images/Team.svg"
          alt="team"
          width={500}
          height={400}
          className="max-sm:pb-10"
        />
      </div>
    </section>
  );
};

export default Team;

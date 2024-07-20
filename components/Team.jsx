import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <section className="w-screen bg-[#F2F4F7]">
      <div className="max-w-[1120px] min-h-[468px] mx-auto flex justify-between">
        <div className="flex flex-col gap-8 max-w-[560px]">
          <h1 className="head_text1">Our Team</h1>
          <p className="para2">
            Thousand is a full-cycle digital production company with its own
            product analytics, design, web and mobile development.
          </p>
          <div className="flex gap-8">
            <div className="flex flex-col">
              <span className="text-4xl font-bold">28</span>
              <span className="font-medium text-sm text-slate-400 pt-2">
                Team Members
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold">+100</span>
              <span className="font-medium text-sm text-slate-400 pt-2">
                projects
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold">7 years</span>
              <span className="font-medium text-sm text-slate-400 pt-2">
                in IT Sphere
              </span>
            </div>
          </div>
          <p className="para2">
            All the necessary specialists - from a designer to a tester - are on
            our staff. We hire the best specialists in the market. It&apos;s
            expensive but worth it
          </p>
        </div>
        <Image src="/images/Team.svg" alt="team" width={500} height={400} />
      </div>
    </section>
  );
};

export default Team;

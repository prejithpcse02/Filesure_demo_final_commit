import Image from "next/image";
import React from "react";

const Application = () => {
  const desc1 = [
    {
      title: "Analysis",
      icons: "/icons/analysis.svg",
      text: "We craft precise technical specs, aligning with your business, technology, and user requirements.",
    },
    {
      title: "Design",
      icons: "/icons/design.svg",
      text: "We adapt the customer's corporate identity to the platform guidelines. We draw convenient and understandable interfaces.",
    },
    {
      title: "Development",
      icons: "/icons/development.svg",
      text: "We create an extensible architecture, write clean and stable code. We integrate with customer technologies.",
    },
  ];
  const desc2 = [
    {
      title: "Testing",
      icons: "/icons/testing.svg",
      text: "We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions",
    },
    {
      title: "Launching",
      icons: "/icons/launching.svg",
      text: "We design the application page and publish it in the App Store and Google Play stores.",
    },
    {
      title: "Support",
      icons: "/icons/support.svg",
      text: "We monitor the stability of the application, update it for new devices and versions of iOS and Android.",
    },
  ];
  return (
    <section className="max-w-[1120px] mx-auto bg-white">
      <h1 className="head_text1">Application Development Stages</h1>
      <div className="flex justify-between my-16">
        <div className="flex flex-col gap-5 max-w-[392px] ">
          {desc1.map((desc, i) => (
            <div
              key={i}
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
        <div className="flex flex-col gap-5 max-w-[392px] ">
          {desc2.map((desc, i) => (
            <div
              key={i}
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

import Image from "next/image";
import React from "react";

const Footer = () => {
  const links = [
    {
      icon: "/icons/phone.svg",
      name: "Contact nums",
      value: "+91 0000000000",
    },
    {
      icon: "/icons/mail.svg",
      name: "Gmail",
      value: "demo@gmail.com",
    },
    {
      icon: "/icons/location.svg",
      name: "Address",
      value: "Mumbai, India",
    },
    {
      icon: "/icons/docs.svg",
      name: "Leave a request",
      value: "Leave a request",
    },
  ];
  return (
    <section className="w-screen bg-[#111111]">
      <div className="max-w-[90vw] xl:max-w-[1120px] mx-auto pt-20 pb-8 flex flex-col gap-8 sm:items-center">
        <Image
          src="/images/Footerlogo.svg"
          alt="Logo"
          width={240}
          height={113}
        />
        <div className="flex sm:flex-row flex-col gap-4 sm:gap-0 sm:justify-between w-full mt-8">
          {links.map((link, i) => (
            <div key={i} className="flex flex-col">
              <div className="flex gap-2">
                <Image src={link.icon} alt="link" width={20} height={20} />
                <span className="text-[#98A2B3]">{link.name}</span>
              </div>
              <span className="text-white font-semibold">{link.value}</span>
            </div>
          ))}
        </div>
        <p className="text-white text-sm font-light">
          We work thoughout the world
        </p>
      </div>
    </section>
  );
};

export default Footer;

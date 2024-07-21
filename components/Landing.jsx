"use client";
//import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Landing = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    business_name: "",
    business_email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setForm((prevForm) => ({
      ...prevForm,
      phone: value,
    }));
  };

  useEffect(() => {
    // Ensure this runs only on the client side
    gsap.fromTo(
      "#home-animation",
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.25,
      }
    );
  }, []);

  return (
    <div className="sm:w-[700px] flex flex-wrap z-10 relative sm:pl-16 h-fit">
      <h1 className="head_text text-left" id="home-animation">
        <span className="text-[#FFBA00]">User Centric Excellence</span>: Our App
        Development Services Tackles Your Pain Points
      </h1>
      <p className="para text-left" id="home-animation">
        Experience a Seamless Digital Journey with{" "}
        <span className="text-[#80A948] font-bold">Desun</span> - Where Every
        Line <br className="max-sm:hidden" />
        of Code Resolves Your Challenges and{" "}
        <span className="text-[#FFBA00] font-bold">
          Elevates Your App Experience
        </span>{" "}
        <br className="max-sm:hidden" />
        to Unparalleled Heights
      </p>
      <div
        id="home-animation"
        className="mt-8 w-full sm:w-[676px] h-auto px-8 py-8 rounded-lg shadow-lg shadow-gray-300 bg-white border border-gray-200 mb-[10rem]"
      >
        <p className="text-xl font-bold max-w-md">
          Leave your contacts and we will call you back within 30 minutes
        </p>
        <form className="w-full sm:w-[676px] flex flex-col sm:flex-row gap-4 mt-4">
          <div className="flex flex-col flex-1">
            <label className="flex flex-col w-[224px]">
              <span className="text-[#667085] text-sm font-medium mb-1 ">
                Full name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="My Name"
                className="input-style mt-2"
              />
            </label>
            <label className="flex flex-col mt-4 w-[224px]">
              <span className="text-[#667085] text-sm font-medium mb-1">
                Business Name
              </span>
              <input
                type="text"
                name="business_name"
                value={form.business_name}
                onChange={handleChange}
                placeholder="ABC Technologies PVT LTD"
                className="input-style"
              />
            </label>
          </div>
          <div className="flex flex-col flex-1 w-[224px] px-2">
            <label className="flex flex-col">
              <span className="text-[#667085] text-sm font-medium mb-1">
                Phone Number
              </span>
              <PhoneInput
                name="phone"
                country={"in"}
                value={form.phone}
                onChange={handlePhoneChange}
                containerStyle={{
                  width: "224px",
                  borderBottom: "2px solid #80A948",
                }}
                inputStyle={{
                  padding: "0 0 0 35px ",
                  width: "100%",
                  color: "#000",
                  fontSize: "0.875rem",
                  lineHeight: "1.25rem",
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",

                  ":focus": {
                    borderColor: "#007bff",
                  },
                }}
                buttonStyle={{
                  backgroundColor: "transparent",
                  border: "none",
                }}
              />
            </label>
            <label className="flex flex-col mt-4 w-[224px]">
              <span className="text-[#667085] text-sm font-medium mb-1">
                Business Email
              </span>
              <input
                type="email"
                name="business_email"
                value={form.business_email}
                onChange={handleChange}
                placeholder="demoaccount@gmail.com"
                className="input-style"
              />
            </label>
          </div>
          <div className="flex flex-1 items-end px-2">
            <button className="text-white bg-[#80A948] hover:bg-[#698b38] transition-all py-2 px-4 rounded w-[132px] h-[68px]">
              Get Consultation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Landing;

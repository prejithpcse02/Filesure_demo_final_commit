"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const Project = () => {
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
  return (
    <section className="w-screen h-auto sm:min-h-[350px] yellow_gradient">
      <div className="max-w-[90vw] sm:max-w-[1120px] mx-auto flex sm:flex-row flex-col justify-between">
        <div className="flex flex-col">
          <h1 className="head_text2 flex">
            Let&apos;s discuss <br />
            Your project
          </h1>
          <p className="para1">
            Let&apos;s figure out how to create an effective application,{" "}
            <br className="max-sm:hidden" /> its cost and terms of its
            development
          </p>
        </div>
        <form className="w-full sm:w-[520px] flex flex-col gap-4 bg-white rounded-xl mt-20 px-6 py-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col flex-1">
              <label className="flex flex-col w-[224px]">
                <span className="text-[#667085] text-sm font-medium mb-1">
                  Full name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="My Name"
                  className="input-style"
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
                    fontSize: "1rem",
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
          </div>
          <div className="flex justify-end mt-1">
            <button className="text-white bg-[#FFBA00] py-2 px-4 rounded  text-sm font-medium">
              Discuss the Project
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Project;

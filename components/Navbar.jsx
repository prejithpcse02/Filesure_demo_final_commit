"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { links } from "@constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="bg-white h-[80px] w-[90%] xl:w-[1220px] flex absolute top-6 left-1/2 transform -translate-x-1/2 items-center justify-between shadow-md z-20 px-6 rounded-xl">
      <Link href="/">
        <Image
          src="/images/Logo_new.png"
          alt="Logo"
          width={180}
          height={60}
          className="bg-transparent"
        />
      </Link>
      <nav className="hidden sm:flex justify-center items-center gap-6 font-semibold text-sm">
        {links.map((link, i) => (
          <Link href="/" key={i}>
            {link}
          </Link>
        ))}
      </nav>

      <nav className="sm:hidden flex gap-6 font-semibold text-sm">
        <Image
          src="/images/menu.svg"
          alt="img"
          width={37}
          height={37}
          className="rounded-full "
          onClick={() => setToggle((prev) => !prev)}
        />
        {toggle && (
          <div className="dropdown">
            <Link
              href="/"
              className="dropdown-link"
              onClick={() => setToggle(false)}
            >
              Services
            </Link>
            <Link
              href="/"
              className="dropdown-link"
              onClick={() => setToggle(false)}
            >
              Media
            </Link>
            <Link
              href="/"
              className="dropdown-link"
              onClick={() => setToggle(false)}
            >
              Cases
            </Link>
            <Link
              href="/"
              className="dropdown-link"
              onClick={() => setToggle(false)}
            >
              FAQ
            </Link>
            <Link
              href="/"
              className="dropdown-link"
              onClick={() => setToggle(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>

      <div className=" hidden xl:flex gap-4">
        <div className="flex gap-2 justify-center items-center cursor-pointer">
          <Image
            src="/images/Phone.svg"
            alt="phone"
            width={13.8}
            height={19.8}
          />
          <span className="text-[#80A948] text-sm">+91 0000000000</span>
        </div>
        <div className="flex gap-2 justify-center items-center cursor-pointer">
          <Image src="/images/Mail.svg" alt="mail" width={19.8} height={15.8} />
          <span className="text-[#80A948] text-sm">demo@gmail.com</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

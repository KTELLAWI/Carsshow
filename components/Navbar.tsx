"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

function  NavBar () {
  return (

    <section id="top header" className= "shadow-xl">
    <header className="absolute top-0 w-full h-20 shadow-sm flex items-center justify-around z-50 ">
      <div>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={140}
            height={140}
            priority
          />
        </Link>
      </div>
      <div className="hidden lg:block">
        {/* <ul className="flex items-center gap-6 font-medium">
          {navLink.map((data) => (
            <li key={data.id}>
              <Link
                href={data.url}
                className={`${
                  usePathname() === data.url ? "text-custom-orange" : ""
                } hover:text-custom-orange transition-all duration-300 ease-linear`}
                onClick={() => {
                  setMobileNavbar(false);
                }}
              >
                {data.link}
              </Link>
            </li>
          ))}
        </ul> */}
      </div>
      <div className="hidden lg:flex items-center gap-4 font-medium">
        <button className="hover:text-blue-100 font-sans  transition-all duration-300 ease-linear">
          تسجيل الدخول
        </button>
        <button className="bg-primary-blue py-2 font-sans rounded-[12%] px-7 text-white shadow-orange-bottom hover:shadow-orange-bottom-hov transition-all duration-300 ease-linear rounded">
          انشاء حساب
        </button>
      </div>
      <div className="lg:hidden">
        <button
          className="text-3xl transition-all duration-300 ease-linear hover:text-custom-orange"
          onClick={() => {}}
        >
          {/* <AiOutlineMenu /> */}
        </button>
      </div>
    </header>
  </section>

  
);
  }
export default NavBar;
// default Header;
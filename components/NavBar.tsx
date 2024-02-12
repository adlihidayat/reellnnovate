"use client";
import Image from "next/image";
import Link from "next/link";
import React, { lazy, useEffect, useState } from "react";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [posisiton, setPosisiton] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPosisiton(window.scrollY);
    });
    return () =>
      window.removeEventListener("scroll", () => {
        setPosisiton(window.scrollY);
      });
  }, []);

  return (
    <nav
      className={`${posisiton === 0 ? " bg-transparent" : "bg-white"}
      }  py-4 px-6 w-full flex justify-center items-center sticky top-0 z-30  text-black`}
    >
      <div className="flex justify-between items-center w-full max-w-5xl">
        <Link href={"/"} className="flex items-center space-x-3">
          <Image
            src={"/icon.webp"}
            alt=""
            width={100}
            height={100}
            className=" w-7"
            loading={"lazy"}
          />
          <span className="hidden md:block text-xl font-bold">
            Reellnnovate
          </span>
        </Link>
        <button
          onClick={() => setIsActive(!isActive)}
          className=" flex flex-col space-y-1 md:hidden"
        >
          <div className=" w-6 h-[2px] bg-black"></div>
          <div className=" w-6 h-[2px] bg-black"></div>
          <div className=" w-6 h-[2px] bg-black"></div>
        </button>
        <ul
          className={`bg-white md:bg-transparent absolute w-full top-14 left-0 px-10 pt-5 pb-10 md:p-0 rounded-b-3xl md:static md:w-auto ${
            isActive ? "flex" : "hidden md:flex"
          } flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-5 font-medium text-sm `}
        >
          <li>
            <Link
              className="link flex items-center space-x-2"
              href={"/solution"}
            >
              <Image
                src={"/icon/solution.svg"}
                alt=""
                width={100}
                height={100}
                className=" w-4 md:hidden"
              />
              <span>Solution</span>
            </Link>
          </li>
          <li>
            <Link
              className="link flex items-center space-x-2"
              href={"/pricing"}
            >
              <Image
                src={"/icon/pricing.svg"}
                alt=""
                width={100}
                height={100}
                className=" w-4 md:hidden"
              />
              <span>Pricing</span>
            </Link>
          </li>
          <li>
            <Link
              className="link flex items-center space-x-2"
              href={"/contact"}
            >
              <Image
                src={"/icon/contact.svg"}
                alt=""
                width={100}
                height={100}
                className=" w-4 md:hidden"
              />
              <span>Contact</span>
            </Link>
          </li>
          <li>
            <Link
              className="link flex items-center space-x-2"
              href={"/termsOfService"}
            >
              <Image
                src={"/icon/termsOfService.svg"}
                alt=""
                width={100}
                height={100}
                className=" w-4 md:hidden"
              />
              <span>Terms of Service</span>
            </Link>
          </li>
        </ul>
        <button className="hidden xl:flex duration-300 border border-black hover:bg-white hover:text-black ease-in-out bg-black text-white py-2 px-5 rounded-full text-sm">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

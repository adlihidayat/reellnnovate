"use client";
import Image from "next/image";
import React, { useState } from "react";

const FAQ = ({ q, a }: any) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className=" flex flex-col items-center w-full">
      <button
        className=" text-left bg-white hover:bg-[#f4f4f4] duration-300 p-3 lg:px-8 rounded-lg font-semibold w-full relative"
        onClick={() => setIsActive(!isActive)}
      >
        {q}
        <Image
          src={"/dropdown.svg"}
          alt=""
          width={100}
          height={100}
          className={`${
            isActive ? " rotate-180 top-[15px]" : " rotate-0 top-[18px]"
          } hidden lg:block absolute z-10 w-4 right-8 `}
        />
      </button>
      <p
        className={`${
          isActive ? "block" : "hidden"
        } bg-[#e1e1e1] p-3 w-[90%] md:w-[95%] duration-300 rounded-b-xl`}
      >
        {a}
      </p>
    </div>
  );
};

export default FAQ;

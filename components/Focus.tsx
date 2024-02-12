import Image from "next/image";
import React from "react";

const Focus = () => {
  return (
    <section className=" w-full  py-28 flex flex-col items-center bg-gray-00">
      <div className=" flex flex-col items-center space-y-2 mb-8 lg:mb-20">
        <span className=" font-semibold text-[#0062F4] text-sm">
          What Is Our primary focus ?
        </span>
        <h1 className="h1 w-80 sm:w-[500px] lg:w-[700px] text-center">
          creating smart and eco-friendly fishing gear.
        </h1>
      </div>
      <div className=" overflow-hidden w-[90%] max-w-5xl h-52 sm:h-72 lg:h-96 bg-slate-500 rounded-xl">
        <Image
          src={"/home/focus.webp"}
          alt=""
          width={500}
          height={500}
          className=" w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Focus;

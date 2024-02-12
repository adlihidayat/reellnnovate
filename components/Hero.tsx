import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className=" w-full text-center px-14 flex flex-col items-center py-20 md:py-40">
      <h1 className=" text-3xl sm:text-5xl md:text-6xl md:w-[550px] lg:w-[800px] font-semibold leading-7 mb-5">
        revolutionize the fishing experience.
      </h1>
      <p className=" p leading-4 mb-40 md:mb-20">
        incorporating cutting-edge technology and sustainable practices.
      </p>
      <div className="mb-4 w-full max-w-sm md:max-w-md lg:max-w-lg flex flex-col md:flex-row md:space-x-2 space-y-1 md:space-y-0 text-xs lg:text-sm">
        <button className="flex-1 border border-[#3B42C4] bg-[#3B42C4] text-white rounded-full py-2 transition hover:bg-transparent hover:text-[#3B42C4]">
          Learn More
        </button>
        <button className="flex-1 border border-black rounded-full py-2 transition hover:bg-black hover:text-white">
          See Pricing
        </button>
      </div>
      <div className=" text-xs font-medium flex flex-col md:flex-row items-center space-x-7">
        <div className="flex items-center space-x-2">
          <Image
            src={"/home/freeTrial.svg"}
            alt=""
            width={100}
            height={100}
            className=" w-3"
          />
          <span>
            <b>Free Trial</b> for a month
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Image
            src={"/home/quickRespon.svg"}
            alt=""
            width={100}
            height={100}
            className=" w-3"
          />
          <span>
            <b>Quick Response</b> customer sevice
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

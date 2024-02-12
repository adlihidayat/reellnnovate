import Image from "next/image";
import React from "react";

const Step = () => {
  return (
    <section className=" bg-gray-00 flex flex-col items-center space-y-10 md:space-y-20 px-10 pt-20 pb-32">
      <h1 className="h1 w-60 md:w-96 text-center">
        Simple <span className=" text-blue-600">move,</span> incredible{" "}
        <span className=" text-blue-600">Expereince</span>
      </h1>
      <div className=" flex flex-col  md:flex-row-reverse items-center space-y-10 md:space-y-0">
        <div className=" overflow-x-hidden w-40 md:w-72 md:ml-10 lg:ml-20">
          <Image
            src={"/home/step.webp"}
            alt=""
            width={1000}
            height={1000}
            className=" w-full h-full object-cover"
          />
        </div>
        <div className="flex space-x-5">
          <div className="flex flex-col items-center mt-1">
            <div className=" rounded-full w-4 h-4 border-4 border-[#0083FD]"></div>
            <div className=" w-1 h-28 lg:h-[135px] bg-[#0083FD]"></div>
            <div className=" rounded-full w-4 h-4 border-4 border-[#0083FD]"></div>
            <div className=" w-1 h-36 lg:h-40 bg-gradient-to-b from-[#0083FD] to-gray-300"></div>
            <div className=" rounded-full w-4 h-4 border-4 border-gray-300"></div>
            <div className=" w-1 h-56 bg-gray-300"></div>
          </div>
          <div className=" flex flex-col space-y-5 text-justify">
            <div className=" w-64 lg:w-96 bg-slate-00">
              <h2 className="lg:text-lg lg:font-bold font-semibold mb-1">
                Set Up the Smart Fishing Rod
              </h2>
              <p className="p2">
                unboxes the smart fishing rod and ensures it&apos;s fully
                charged and pairs it with their smartphone via Bluetooth. The
                app guides the user through a quick calibration process.
              </p>
            </div>
            <div className=" w-64 lg:w-96 bg-slate-00">
              <h2 className="lg:text-lg lg:font-bold font-semibold mb-1">
                Fishing with Real-Time Insights
              </h2>
              <p className="p2">
                The customer casts their line into the water it continuously
                monitors various parameters. As the customer fishes, the app
                displays real-time data on their smartphone screen. like water
                conditions and any detected fish activity.
              </p>
            </div>
            <div className=" w-64 lg:w-96 bg-slate-00">
              <h2 className="lg:text-lg lg:font-bold font-semibold mb-1">
                Review and Improve Fishing Experience
              </h2>
              <p className="p2">
                the app provides a summary of the day&apos;s activity, including
                the number of casts, successful catches, notable conditions, and
                review. customer has option to share their fishing experiences
                and data on the ReelInnovate community platform. Engaging with
                other users, the customer can learn from their experiences,
                exchange tips, and contribute to the growing community of
                fishing enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step;

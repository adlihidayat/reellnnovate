import React from "react";

const Portfolio = () => {
  return (
    <section className=" w-full  flex flex-col items-center space-y-5 md:flex-row md:justify-center md:space-x-10">
      <h1 className="text-2xl md:text-3xl font-semibold w-80 lg:w-[400px] 2xl:lg:w-[500px]">
        our portfolio has been proven to help the customer and environment
      </h1>
      <div className="w-80 lg:w-[400px] grid grid-cols-2 justify-between gap-y-8">
        <div className="">
          <h2 className="text-[#0062F4] text-3xl font-bold">20%+</h2>
          <p className=" text-xs lg:text-sm w-36 lg:w-48 ">
            increase in successful catches
          </p>
        </div>
        <div className="">
          <h2 className=" text-[#0062F4] text-3xl font-bold">30%</h2>
          <p className=" text-xs lg:text-sm w-36 lg:w-48 ">
            month-over-month increase in active users
          </p>
        </div>
        <div>
          <h2 className=" text-[#0062F4] text-3xl font-bold">90%+</h2>
          <p className=" text-xs lg:text-sm w-36 lg:w-48 ">
            users have expressed a positive experience
          </p>
        </div>
        <div>
          <h2 className=" text-[#0062F4] text-3xl font-bold">5000+</h2>
          <p className=" text-xs lg:text-sm w-36 lg:w-48 ">
            fish Released by catch-and-release system
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

import React from "react";

const Contacts = () => {
  return (
    <section className=" text-center w-full flex justify-center pt-20 pb-20">
      <div className=" bg-[#171717] rounded-3xl w-[90%] py-20 lg:py-32 flex flex-col items-center space-y-5">
        <span className=" font-semibold text-[#0062F4] text-sm">
          What Is Our primary focus ?
        </span>
        <h1 className=" h1 text-white">ready to work with us?</h1>
        <button className="w-max text-xs lg:text-sm font-medium border border-black rounded-full py-[6px] px-4 lg:px-8 transition bg-white hover:bg-transparent hover:text-white hover:border-white">
          Contact us
        </button>
      </div>
    </section>
  );
};

export default Contacts;

import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="pb-10">
      <main className=" min-h-screen flex flex-col items-center py-20">
        <div className=" px-10 mb-10 md:mb-24 z-20 text-center">
          <span className=" font-semibold text-[#0062F4] text-sm">
            Privacy & Policy
          </span>
          <h1 className="h1 mb-2">Our Privacy And Policy</h1>
          <p className="p">
            Read our terms below to learn more about ReelInnovatian Privacy And
            Policy
          </p>
        </div>
        <section className="flex flex-col md:flex-row md:space-y-0 md:space-x-2 lg:space-x-5 md:items-center space-y-5 text-white text-sm">
          <div className=" w-64 rounded-2xl bg-[#673E0E] py-10 px-10 ">
            <span className=" text-base font-semibold">Basic</span>
            <div className=" my-5">
              <span className=" text-5xl  font-semibold mr-2">$10</span>
              <span>/ month</span>
            </div>
            <p className="mb-3 ">Ideal For Personal</p>
            <div className="flex flex-col space-y-1 ">
              <div className="flex items-end space-x-2">
                <Image
                  src={"/pricing/check.svg"}
                  alt=""
                  width={100}
                  height={100}
                  className="w-4"
                />
                <span>only for 1 person</span>
              </div>
              <div className="flex items-end space-x-2">
                <Image
                  src={"/pricing/check.svg"}
                  alt=""
                  width={100}
                  height={100}
                  className="w-4"
                />
                <span>Basic Feature</span>
              </div>
              <div className="flex items-end space-x-2">
                <Image
                  src={"/pricing/check.svg"}
                  alt=""
                  width={100}
                  height={100}
                  className="w-4"
                />
                <span>Community Access</span>
              </div>
              <div className="flex items-end space-x-2">
                <Image
                  src={"/pricing/cross.svg"}
                  alt=""
                  width={100}
                  height={100}
                  className="w-4"
                />
                <span>Advanced report</span>
              </div>
              <div className="flex items-end space-x-2">
                <Image
                  src={"/pricing/cross.svg"}
                  alt=""
                  width={100}
                  height={100}
                  className="w-4"
                />
                <span>Advanced intergrations</span>
              </div>
            </div>
            <button className="mt-5 border border-white hover:bg-transparent hover:text-white transition bg-white text-black py-1 px-6 rounded-full text-sm">
              Buy
            </button>
          </div>
          <div className=" w-64 rounded-2xl bg-[#7D3131] py-10 px-10 md:py-16 md:w-64">
            <span className=" text-base font-semibold">Expert</span>
            <div className=" my-5">
              <span className=" text-5xl  font-semibold mr-2">$50</span>
              <span>/ month</span>
            </div>
            <p className="mb-3 ">Ideal For Company</p>
            <div className="flex flex-col space-y-1 ">
              <div className="flex items-end space-x-2">
                <Image
                  src={"/pricing/check.svg"}
                  alt=""
                  width={100}
                  height={100}
                  className="w-4"
                />
                <span>Up to 10 Person</span>
              </div>
              <div className="flex items-end space-x-2">
                <Image
                  src={"/pricing/check.svg"}
                  alt=""
                  width={100}
                  height={100}
                  className="w-4"
                />
                <span>Basic Feature</span>
              </div>
              <div className="flex items-end space-x-2">
                <Image
                  src={"/pricing/check.svg"}
                  alt=""
                  width={100}
                  height={100}
                  className="w-4"
                />
                <span>Community Access</span>
              </div>
              <div className="flex items-end space-x-2">
                <Image
                  src={"/pricing/check.svg"}
                  alt=""
                  width={100}
                  height={100}
                  className="w-4"
                />
                <span>Advanced report</span>
              </div>
              <div className="flex items-end space-x-2">
                <Image
                  src={"/pricing/check.svg"}
                  alt=""
                  width={100}
                  height={100}
                  className="w-4"
                />
                <span>Advanced intergrations</span>
              </div>
            </div>
            <button className="mt-5 border border-white hover:bg-transparent hover:text-white transition bg-white text-black py-1 px-6 rounded-full text-sm">
              Buy
            </button>
          </div>
          <div className=" w-64 rounded-2xl bg-[#272B30] py-10 px-10">
            <span className=" text-base font-semibold">Professional</span>
            <div className=" my-5">
              <span className=" text-5xl  font-semibold mr-2">$20</span>
              <span>/ month</span>
            </div>
            <p className="mb-3 ">Ideal For Company</p>
            <div className="flex flex-col space-y-1 ">
              <div className="flex items-end space-x-2">
                <Image
                  src={"/pricing/check.svg"}
                  alt=""
                  width={100}
                  height={100}
                  className="w-4"
                />
                <span>Ideal For 3 person</span>
              </div>
              <div className="flex items-end space-x-2">
                <Image
                  src={"/pricing/check.svg"}
                  alt=""
                  width={100}
                  height={100}
                  className="w-4"
                />
                <span>Basic Feature</span>
              </div>
              <div className="flex items-end space-x-2">
                <Image
                  src={"/pricing/check.svg"}
                  alt=""
                  width={100}
                  height={100}
                  className="w-4"
                />
                <span>Community Access</span>
              </div>
              <div className="flex items-end space-x-2">
                <Image
                  src={"/pricing/check.svg"}
                  alt=""
                  width={100}
                  height={100}
                  className="w-4"
                />
                <span>Advanced report</span>
              </div>
              <div className="flex items-end space-x-2">
                <Image
                  src={"/pricing/cross.svg"}
                  alt=""
                  width={100}
                  height={100}
                  className="w-4"
                />
                <span>Advanced intergrations</span>
              </div>
            </div>
            <button className="mt-5 border border-white hover:bg-transparent hover:text-white transition bg-white text-black py-1 px-6 rounded-full text-sm">
              Buy
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default page;

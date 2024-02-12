import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className=" w-full min-h-screen capitalize overflow-x-hidden py-20 relative">
      <div className="absolute bg-blue-200 h-80 w-80 rounded-full blur-3xl z-0 -left-40 top-0"></div>
      <div className="absolute bg-yellow-200 h-80 w-80 rounded-full blur-3xl z-0 -right-40 top-60"></div>
      <section className=" w-full flex flex-col space-y-10 items-center py-32 lg:py-40">
        <h1 className=" text-center w-80 text-xl md:text-2xl md:w-[500px]  lg:text-3xl lg:w-[600px] font-bold">
          revolutionizing the world of fishing with smart technology and
          sustainable practices. Dive into a new era of angling with our
          innovative products.
        </h1>
        <a
          href="https://youtu.be/PUamgvE8ALQ?feature=shared"
          className="flex duration-300 border border-black hover:bg-white hover:text-black ease-in-out bg-black text-white py-2 px-5 rounded-full text-sm"
        >
          Watch Video
        </a>
      </section>
      <section className=" w-full flex flex-col space-y-10 items-center py-20">
        <h1 className=" text-center w-80 text-xl md:text-2xl md:w-[500px]  lg:text-3xl lg:w-[600px] font-bold">
          Key Features
        </h1>
        <div className=" flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:justify-center lg:space-x-5 lg:w-[80%] overflow-x-hidden">
          <div className="w-80 md:w-96 md:h-48 h-40 bg-slate-300 rounded-2xl relative overflow-hidden">
            <Image
              src={"/solution/feature1.webp"}
              alt=""
              width={300}
              height={300}
              className=" w-full h-full object-cover absolute z-0"
            />
            <div className="absolute bottom-0 text-white p-7 text-justify bg-gradient-to-t from-black to-transparent">
              <h2 className=" font-medium">Smart Fishing Rod</h2>
              <p className=" text-[12px] leading-4">
                instantly access real-time data on water conditions and fish
                activity right from your smartphone.
              </p>
            </div>
          </div>
          <div className="w-80 md:w-96 md:h-48 h-40 bg-slate-300 rounded-2xl relative overflow-hidden">
            <Image
              src={"/solution/feature2.webp"}
              alt=""
              width={300}
              height={300}
              className=" w-full h-full object-cover absolute z-0"
            />
            <div className="absolute bottom-0 text-white p-7 text-justify bg-gradient-to-t from-black to-transparent">
              <h2 className=" font-medium">Real-Time Insights</h2>
              <p className=" text-[12px] leading-4">
                instantly access real-time data on water conditions and fish
                activity right from your smartphone.
              </p>
            </div>
          </div>
          <div className="w-80 md:w-96 md:h-48 h-40 bg-slate-300 rounded-2xl relative overflow-hidden">
            <Image
              src={"/solution/feature3.webp"}
              alt=""
              width={300}
              height={300}
              className=" w-full h-full object-cover absolute z-0"
            />
            <div className="absolute bottom-0 text-white p-7 text-justify bg-gradient-to-t from-black to-transparent">
              <h2 className=" font-medium">Eco-Friendly Tackle</h2>
              <p className=" text-[12px] leading-4">
                Fish sustainably with lures and bait crafted from
                environmentally conscious materials .
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-28 px-10 flex flex-col items-center lg:justify-center lg:space-y-0 lg:space-x-10 xl:space-x-20 space-y-10 lg:flex-row ">
        <div className=" max-w-lg lg:max-w-xl">
          <span className=" font-semibold text-[#0062F4] text-sm">
            Step-by-Step Guide
          </span>
          <h1 className="mb-3 text-xl md:text-2xl md:w-[500px]  lg:text-3xl lg:w-[600px] font-bold">
            Learn from anywhere and anytime
          </h1>
          <p className="p text-justify">
            Setting up your ReelInnovate Smart Fishing Rod is a breeze! Follow
            our step-by-step guide to pair it with your mobile device, calibrate
            the sensors, and configure personalized settings for an optimized
            fishing experience.
          </p>
        </div>
        <div className=" relative overflow-hidden max-w-lg w-full lg:w-72 h-40 md:h-60 lg:h-72 bg-slate-400 rounded-2xl">
          <Image
            src={"/solution/step.webp"}
            alt=""
            width={300}
            height={300}
            className=" w-full h-full object-cover absolute z-0"
          />
        </div>
      </section>
      <section className="py-28 px-10 flex flex-col items-center space-y-5">
        <h1 className="mb-3 text-xl md:text-2xl lg:text-3xl text-center font-bold">
          Customer Review
        </h1>
        <div className=" flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:justify-center lg:space-x-5 lg:w-[80%]">
          <div className="w-80 md:w-96  bg-white shadow-xl rounded-2xl relative overflow-hidden p-5">
            <div className="flex items-center space-x-3 mb-3">
              <div className=" w-7 h-7 md:w-9 md:h-9 md:mt-1 rounded-full overflow-hidden relative bg-slate-600">
                <Image
                  src={"/solution/face1.webp"}
                  alt=""
                  width={300}
                  height={300}
                  className=" w-full h-full object-cover absolute z-0"
                />
              </div>
              <div>
                <h2 className=" text-s font-medium leading-4 text-sm md:text-base">
                  Smart Fishing Rod
                </h2>
                <p className=" text-[12px] leading-3 text-justify text-gray-500">
                  4 years ReelInnovatian
                </p>
              </div>
            </div>
            <p className=" text-[12px] md:text-[13px] leading-4 text-justify">
              ReelInnovate transformed my fishing experience! The real-time data
              helped me catch more fish, and the community platform allowed me
              to connect with fellow anglers. A game-changer!
            </p>
          </div>
          <div className="w-80 md:w-96  bg-white shadow-xl rounded-2xl relative overflow-hidden p-5">
            <div className="flex items-center space-x-3 mb-3">
              <div className=" w-7 h-7 md:w-9 md:h-9 md:mt-1 rounded-full overflow-hidden relative bg-slate-600">
                <Image
                  src={"/solution/face2.webp"}
                  alt=""
                  width={300}
                  height={300}
                  className=" w-full h-full object-cover absolute z-0"
                />
              </div>
              <div>
                <h2 className=" text-s font-medium leading-4 text-sm md:text-base">
                  Smart Fishing Rod
                </h2>
                <p className=" text-[12px] leading-3 text-justify text-gray-500">
                  4 years ReelInnovatian
                </p>
              </div>
            </div>
            <p className=" text-[12px] md:text-[13px] leading-4 text-justify">
              ReelInnovate transformed my fishing experience! The real-time data
              helped me catch more fish, and the community platform allowed me
              to connect with fellow anglers. A game-changer!
            </p>
          </div>
          <div className="w-80 md:w-96  bg-white shadow-xl rounded-2xl relative overflow-hidden p-5">
            <div className="flex items-center space-x-3 mb-3">
              <div className=" w-7 h-7 md:w-9 md:h-9 md:mt-1 rounded-full overflow-hidden relative bg-slate-600">
                <Image
                  src={"/solution/face3.webp"}
                  alt=""
                  width={300}
                  height={300}
                  className=" w-full h-full object-cover absolute z-0"
                />
              </div>
              <div>
                <h2 className=" text-s font-medium leading-4 text-sm md:text-base">
                  Smart Fishing Rod
                </h2>
                <p className=" text-[12px] leading-3 text-justify text-gray-500">
                  4 years ReelInnovatian
                </p>
              </div>
            </div>
            <p className=" text-[12px] md:text-[13px] leading-4 text-justify">
              ReelInnovate transformed my fishing experience! The real-time data
              helped me catch more fish, and the community platform allowed me
              to connect with fellow anglers. A game-changer!
            </p>
          </div>
        </div>
      </section>
      <section className=" text-sm px-10 w-full flex flex-col items-center py-20 mb-10">
        <h1 className="mb-5 text-xl md:text-2xl lg:text-3xl text-left font-bold w-full max-w-4xl">
          FAQ
        </h1>
        <div className=" flex-col space-y-3 w-full max-w-4xl">
          <FAQ
            q="How does the catch-and-release system work, and is it safe for the fish?"
            a="The ReelInnovate catch-and-release system is designed to be fish-friendly and environmentally conscious. Non-Invasive Measurement: The Smart Fishing Rod includes a non-invasive measurement tool to determine the size of the catch without causing harm. Quick and Gentle Release: Once the fish is measured, the catch-and-release system allows for a quick and gentle release back into the water. This minimizes stress on the fish and increases its chances of survival."
          />
          <FAQ
            q="How long does the battery of the Smart Fishing Rod last, and is it rechargeable?"
            a="The Smart Fishing Rod comes with a rechargeable battery that provides ample usage on a single charge. The battery life depends on usage patterns but typically lasts for a full day of fishing. Recharging is convenient using the provided USB cable, and a full charge takes approximately 10 hours."
          />
          <FAQ
            q="Can I use ReelInnovate's smart fishing gear in both freshwater and saltwater environments?"
            a="Absolutely! ReelInnovate's smart fishing gear is designed to withstand both freshwater and saltwater conditions. The materials used in our products are corrosion-resistant, ensuring durability and performance in various fishing environments."
          />
          <FAQ
            q="Is the ReelInnovate community platform accessible to all users, and how can I join?"
            a="Yes, the ReelInnovate community platform is open to all users! To join, simply create an account on our website or through the mobile app. Once registered, you can explore fishing stories, share your experiences, and connect with a vibrant community of anglers. It's a space to learn, exchange tips, and celebrate the joy of fishing together."
          />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default page;

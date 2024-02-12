import Image from "next/image";
import React from "react";

const ProductsAndServices = () => {
  return (
    <section className=" w-full flex flex-col items-center py-20">
      <div className=" text-center flex flex-col items-center mb-10 lg:mb-16">
        <h1 className="h1 mb-3 w-[250px] sm:w-max ">Products and Services</h1>
        <p className="p w-[300px] sm:w-max">
          incorporating cutting-edge technology and sustainable practices.
        </p>
      </div>
      <div className=" flex flex-col items-center md:flex-row-reverse">
        <div>
          <Image
            src={"/home/product.webp"}
            alt=""
            width={300}
            height={300}
            className=" w-60 lg:w-80 lg:h-96 rounded-3xl bg-green-500 mb-10 md:mb-0"
          />
        </div>
        <div className=" w-72  flex flex-col text-left md:text-base md:mr-20 lg:mr-60">
          <button className=" link text-left border-b border-black  text-sm lg:text-xl py-3 lg:py-4 lg:w-96 px2">
            Smart Fishing Rods
          </button>
          <button className="link text-left border-b border-black  text-sm lg:text-xl py-3 lg:py-4 lg:w-96 px2">
            Eco-Friendly Tackle
          </button>
          <button className="link text-left border-b border-black  text-sm lg:text-xl py-3 lg:py-4 lg:w-96 px2">
            Fish Conservation Technology
          </button>
          <button className="link text-left border-b border-black  text-sm lg:text-xl py-3 lg:py-4 lg:w-96 px2">
            Community Platform
          </button>
          <button className="link text-left border-b border-black  text-sm lg:text-xl py-3 lg:py-4 lg:w-96 px2">
            Fisheries Monitoring
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsAndServices;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className=" w-full  flex flex-col lg:flex-row justify-between space-y-2 px-8 md:px-[15%]">
      <div className=" text-[13px] flex flex-col space-y-2">
        <div className="flex space-x-2">
          <a
            href="https://www.instagram.com/"
            className="w-7 h-6 py-[1px] link  rounded"
          >
            <Image
              src={"/icon/instagram.svg"}
              alt=""
              width={100}
              height={100}
              className="h-5"
            />
          </a>
          <a href="https://www.facebook.com/" className="w-7 h-5 link rounded">
            <Image
              src={"/icon/facebook.svg"}
              alt=""
              width={100}
              height={100}
              className="h-5"
            />
          </a>
          <a href="https://www.youtube.com/" className="w-9 h-5 link rounded">
            <Image
              src={"/icon/youtube.svg"}
              alt=""
              width={100}
              height={100}
              className="h-[22px]"
            />
          </a>
          <a href="https://www.tiktok.com/" className="w-7 h-5 link rounded">
            <Image
              src={"/icon/tiktok.svg"}
              alt=""
              width={100}
              height={100}
              className="h-5"
            />
          </a>
        </div>
        <span>@ Reellnnovate, Inc. All Right Reserved</span>
      </div>
      <ul className="flex items-center text-[11px] md:text-xs space-x-3 text-gray-500">
        <li>
          <Link href={"/termsOfService"} className="link">
            Terms of Service
          </Link>
        </li>
        <li>
          <Link href={"/privacyPolicy"} className="link">
            Privacy and Policy
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Footer;

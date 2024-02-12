import Footer from "@/components/Footer";
import React from "react";

const Li = ({ title, p }: any) => {
  return (
    <li className="text-lg md:text-2xl font-medium max-w-5xl">
      <h1 className=" leading-6">{title}</h1>
      <p className="text-xs lg:text-base md:text-sm leading-4 font-normal">
        {p}
      </p>
    </li>
  );
};

const page = () => {
  return (
    <main className=" min-h-screen text-center py-20 relative overflow-x-hidden w-full">
      <div className="absolute bg-blue-200 h-80 w-80 rounded-full blur-3xl z-0 -left-40 top-0"></div>
      <div className="absolute bg-yellow-200 h-80 w-80 rounded-full blur-3xl z-0 -right-40 top-40"></div>
      <div className=" px-10 mb-10 md:mb-24 z-20">
        <span className=" font-semibold text-[#0062F4] text-sm">
          Terms of service
        </span>
        <h1 className="h1 mb-2">Our terms of service</h1>
        <p className="p">
          Read our terms below to learn more about your rights and
          responsibilities as a ReelInnovatian
        </p>
      </div>
      <section className=" px-14 text-justify mb-32 z-30">
        <ol className="list-decimal flex items-center flex-col space-y-4">
          <Li
            title="Acceptance of Terms"
            p="By using our Service, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please refrain from using the Service."
          />
          <Li
            title="Eligibility"
            p="You must be at least 18 years old to use our Service. By using the Service, you affirm that you are at least 18 years old and are fully capable of understanding and accepting these Terms."
          />
          <Li
            title="User Accounts"
            p="To access certain features of the Service, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account information and agree to accept responsibility for all activities that occur under your account."
          />
          <Li
            title="Use of the Service"
            p="You agree to use the Service for lawful purposes and in accordance with these Terms. You may not use the Service in any way that could damage, disable, overburden, or impair our servers or networks."
          />
          <Li
            title="Privacy"
            p="Your use of the Service is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and disclose information."
          />
          <Li
            title="Intellectual Property"
            p="The content, design, and functionality of the Service are the exclusive property of ReelInnovate. You may not reproduce, distribute, modify, or create derivative works from any part of the Service without our prior written consent."
          />
          <Li
            title="Warranty Disclaimer"
            p="The Service is provided 'as is' and 'as available' without any warranties of any kind, either express or implied. ReelInnovate does not warrant that the Service will be uninterrupted or error-free."
          />
          <Li
            title="Limitation of Liability"
            p="ReelInnovate and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with the use of the Service."
          />
          <Li
            title="Changes to Terms"
            p="We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the Service after any changes indicates your acceptance of the modified Terms."
          />
          <Li
            title="Governing Law"
            p="These Terms are governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising under or in connection with these Terms shall be resolved in the courts of [Jurisdiction]."
          />
        </ol>
      </section>
      <Footer />
    </main>
  );
};

export default page;

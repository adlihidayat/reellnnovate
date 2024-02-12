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
    <main className=" min-h-screen text-center py-20 relative w-full overflow-x-hidden">
      <div className="absolute bg-blue-200 h-80 w-80 rounded-full blur-3xl z-0 -left-40 top-0"></div>
      <div className="absolute bg-yellow-200 h-80 w-80 rounded-full blur-3xl z-0 -right-40 top-40"></div>
      <div className=" px-10 mb-10 md:mb-24 z-20">
        <span className=" font-semibold text-[#0062F4] text-sm">
          Privacy & Policy
        </span>
        <h1 className="h1 mb-2">Our Privacy And Policy</h1>
        <p className="p">
          Read our terms below to learn more about ReelInnovatian Privacy And
          Policy
        </p>
      </div>
      <section className=" px-14 text-justify mb-32 z-30">
        <ol className="list-decimal flex items-center flex-col space-y-4">
          <Li
            title="Introduction"
            p="Welcome to ReelInnovate! This Privacy Policy outlines how we collect, use, disclose, and protect your personal information. By using our website, mobile application, and related services (collectively referred to as the `Service`), you agree to the terms of this Privacy Policy."
          />
          <Li
            title="Information We Collect"
            p="We may collect personal information that you voluntarily provide when using our Service. This may include, but is not limited to, your name, email address, contact information, and payment details. We automatically collect information about your use of the Service, including IP address, device information, browser type, and pages visited. This data helps us analyze and improve the performance and functionality of our Service. With your consent, we may collect location information to provide location-based services, such as localized content or weather conditions for fishing."
          />
          <Li
            title="How We Use Your Information"
            p="To provide and maintain the Service, To personalize your experience and deliver relevant content, To process transactions and send transaction-related communications, To improve and optimize the Service, To send promotional and marketing communications based on your preferences"
          />
          <Li
            title="How We Share Your Information"
            p="With service providers who assist in the operation of the Service, With your consent or at your direction, To comply with legal obligations or protect our rights"
          />
          <Li
            title="Data Security"
            p="We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute security."
          />
          <Li
            title="Your Choices"
            p="You may choose not to provide certain personal information, but this may limit your ability to use specific features of the Service. You can update your preferences or unsubscribe from marketing communications at any time."
          />
          <Li
            title="Children's Privacy"
            p="The Service is not directed to individuals under the age of 18. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete the information."
          />
          <Li
            title="Changes to Privacy Policy"
            p="We reserve the right to update or modify this Privacy Policy at any time without prior notice. Your continued use of the Service after any changes indicates your acceptance of the modified Privacy Policy."
          />
        </ol>
      </section>
      <Footer />
    </main>
  );
};

export default page;

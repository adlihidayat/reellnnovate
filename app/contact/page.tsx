import Form from "@/components/Form";
import React from "react";

const page = () => {
  return (
    <main className=" min-h-screen px-10 py-20 lg:pt-40 lg:pb-0">
      <h1 className=" text-center mb-10 lg:mb-5 text-3xl sm:text-4xl lg:text-5xl  font-semibold leading-7 lg:mr-[700px]">
        Contact Us
      </h1>
      <div className=" w-full flex flex-col lg:flex-row-reverse space-y-10 lg:space-y-0 lg:justify-center items-center">
        <Form />
        <div className=" flex flex-col space-y-10 px-5 ">
          <p>
            email, call, or contact us from any social media can connect you
            with us
          </p>
          <ul>
            <li className=" underline">reellnnovate@gmail.com</li>
            <li>321-123-111</li>
            <li>@rellnovate</li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-10 space-y-5 md:space-y-0">
            <div className=" text-justify">
              <h2 className=" font-semibold lg:font-bold">Customer support</h2>
              <p className="md:w-40 text-gray-500">
                our support is available 24hour to address any concern or
                question from any reellnnovatian
              </p>
            </div>
            <div className=" text-justify">
              <h2 className=" font-semibold lg:font-bold">
                Feedback/suggestion{" "}
              </h2>
              <p className="md:w-40 text-gray-500">
                we value your feedback and are continously working to improve
                snappy. your input is crucial
              </p>
            </div>
            <div className=" text-justify">
              <h2 className=" font-semibold lg:font-bold">Services</h2>
              <p className="md:w-40 text-gray-500">
                for media realted questions or press inqueries, please contact
                us
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;

"use client";
import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = () => {
    setEmail("");
    setMessage("");
  };

  return (
    <form
      action=""
      onSubmit={submitForm}
      className=" flex flex-col space-y-3 w-[90%] md:w-[550px] lg:w-80 bg-white p-5 rounded-xl lg:ml-14"
    >
      <input
        type="text"
        placeholder="user@email.com"
        className="border border-gray-600 px-3 py-1 rounded-lg"
        onChange={(e: any) => setEmail(e.target.value)}
        value={email}
      />
      <textarea
        name=""
        id=""
        cols={30}
        rows={5}
        placeholder="message.."
        className="border border-gray-600 px-3 py-1 rounded-lg"
        onChange={(e: any) => setMessage(e.target.value)}
        value={message}
      ></textarea>
      <input
        type="submit"
        disabled={email === "" || message === ""}
        className=" disabled:opacity-50 cursor-pointer bg-[#01112D] hover:bg-transparent hover:text-black hover:border-black border border-transparent duration-300 text-white text-sm rounded-full py-[10px]"
      />
    </form>
  );
};

export default Form;

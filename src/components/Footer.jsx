import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div
        className="flex flex-row h-[3.5rem] w-full bg-transparent p-5 md:px-10 lg:h-[5rem] lg:items-center"
        id="footer"
      >
        <div className="flex flex-row w-1/2 items-center gap-x-3 text-slate-300 lg:gap-x-5">
          <FaFacebook className="w-5 h-5 lg:w-[2.5rem] lg:h-[2.5rem]" />
          <FaInstagram className="w-5 h-5 lg:w-[2.5rem] lg:h-[2.5rem]" />
          <FaYoutube className="w-5 h-5 lg:w-[2.5rem] lg:h-[2.5rem]" />
          <FaGithub className="w-5 h-5 lg:w-[2.5rem] lg:h-[2.5rem]" />
        </div>
        <h2 className="text-[0.6rem] ml-auto text-slate-300 font-body lg:text-[1rem]">
          2024 Juno All Rights Reserved.
        </h2>
      </div>
    </>
  );
};

export default Footer;

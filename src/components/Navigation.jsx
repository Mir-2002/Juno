import React from "react";
import { LuActivity } from "react-icons/lu";

const Navigation = () => {
  return (
    <>
      <nav className="flex flex-row p-5 gap-x-3 w-[100vw] bg-secondary h-[9.5vh] items-center sticky top-0 z-30 md:px-10 lg:h-[10.5vh] lg:px-[7rem]">
        <a
          href="hero"
          className="flex flex-row items-center justify-center gap-x-3"
        >
          <LuActivity className="text-lime-400 w-8 h-8 border-2 border-lime-400 rounded-full lg:w-16 lg:h-16" />
          <h1 className="font-logo text-lime-400 text-3xl lg:text-[2.5rem]">
            Juno
          </h1>
        </a>
        <button className="group h-10 w-10 rounded-lg ml-auto md:hidden">
          <div className="grid justify-items-center gap-1.5 max-h-full">
            <span className="h-1 w-8 rounded-full bg-text group-hover:rotate-45"></span>
            <span className="h-1 w-8 rounded-full bg-text"></span>
            <span className="h-1 w-8 rounded-full bg-text group-hover:-rotate-45"></span>
          </div>
        </button>
        <div className="hidden md:flex flex-row ml-auto items-center text-text font-body gap-x-10 lg:text-2xl">
          <a href="#features" className="hover:text-slate-300">
            Features
          </a>
          <a href="#pricing" className="hover:text-slate-300">
            Pricing
          </a>
          <a href="#about" className="hover:text-slate-300">
            About
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

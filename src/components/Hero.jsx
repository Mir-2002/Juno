import React from "react";
import Section from "./Section";
import Vinyl from "../assets/images/vinyl.jpg";

const Hero = () => {
  return (
    <>
      <Section
        className="relative overflow-hidden flex flex-col gap-y-5 h-[90vh]"
        id="hero"
      >
        <div className="flex flex-col h-[50%] items-center justify-center relative w-full">
          <img
            src={Vinyl}
            alt=""
            className="w-[16rem] h-[16rem] absolute -top-36 opacity-80 z-0 md:-top-28 lg:w-[36rem] lg:h-[36rem] lg:-top-0"
          />
          <h1 className="uppercase text-lime-400 mt-[10rem] text-[2.4rem] font-medium font-logo text-center leading-[3rem] md:text-[2.8rem] md:leading-[3.2rem] lg:text-[5rem] lg:leading-[6rem] z-10">
            <span>Your Personalized</span>
            <br />
            <span className="text-[3.2rem] text-violet-500 md:text-[3.8rem] lg:text-[7rem]">
              Music Discovery
            </span>
            <br />
            <span>Partner</span>
          </h1>
        </div>
        <div className="flex flex-col flex-grow items-center h-[50%] gap-y-10 justify-center lg:mt-8">
          <h2 className="text-zinc-700 font-body text-center lg:text-[2rem] md:w-full lg:w-1/2">
            <span className="font-semibold text-slate-800 lg:text-[2rem]">
              Explore your sound with{" "}
              <span className="text-lime-600 text-xl font-bold lg:text-[2rem]">
                Juno.
              </span>
            </span>{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            quae impedit dolor?
          </h2>
          <button className="p-4 rounded-2xl bg-lime-500 font-logo text-white text-[1.3rem] shadow-lg lg:text-[2.2rem] lg:p-6 hover:bg-lime-600">
            Start Exploring!
          </button>
        </div>
      </Section>
    </>
  );
};

export default Hero;

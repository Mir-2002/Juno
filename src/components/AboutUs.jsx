import React from "react";
import Section from "./Section";
import HeadingText from "./HeadingText";
import { HiGlobeAsiaAustralia } from "react-icons/hi2";
import { FaMusic } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <>
      <Section
        className="flex flex-col gap-y-5 items-start justify-center h-[100vh] md:h-[90vh]"
        id="about"
      >
        <HeadingText title="About Juno" />
        <div className="flex flex-col items-center relative mt-20">
          <HiGlobeAsiaAustralia className="w-28 h-28 text-background z-0 lg:w-[16rem] lg:h-[16rem]" />
          <div className="absolute bottom-0 right-0 p-1 bg-white rounded-full lg:right-4">
            <FaMusic className="w-8 h-8 text-emerald-400 lg:w-[4rem] lg:h-[4rem]" />
          </div>
        </div>
        <h2 className="text-xl text-center font-body font-[500] lg:text-[2.5rem] lg:leading-10">
          Juno aims to connect the world, <br />{" "}
          <span className="text-lime-600 font-semibold">
            one track at a time.
          </span>
        </h2>
      </Section>
    </>
  );
};

export default AboutUs;

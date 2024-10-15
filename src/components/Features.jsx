import React from "react";
import Section from "./Section";
import { RiRobot2Fill } from "react-icons/ri";
import { FaUserFriends, FaSearch } from "react-icons/fa";
import HeadingText from "./HeadingText";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <>
      <Section
        className="py-10 gap-y-10 relative justify-center h-[100vh] md:h-[90vh]"
        id="features"
      >
        <HeadingText title="Features" />
        <div className="grid grid-rows-3 grid-cols-1 bg-slate-200 rounded-xl p-8 w-full h-[24rem] z-10 shadow-lg lg:w-[70%]">
          <FeatureCard body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, culpa? A officia totam sapiente soluta non?">
            <RiRobot2Fill className="w-[3.5rem] h-[3.5rem] md:w-[4.5rem] md:h-[4.5rem] lg:w-[5.5rem] lg:h-[5.5rem] text-secondary" />
          </FeatureCard>
          <FeatureCard
            isReversed
            body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus inventore eius quae, quidem deserunt repudiandae"
          >
            <FaUserFriends className="w-[3.5rem] h-[3.5rem] md:w-[4.5rem] md:h-[4.5rem] lg:w-[5.5rem] lg:h-[5.5rem] text-secondary" />
          </FeatureCard>
          <FeatureCard body="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor molestias ab iste voluptate. Laudantium, facere!">
            <FaSearch className="w-[3.5rem] h-[3.5rem] md:w-[4.5rem] md:h-[4.5rem] lg:w-[5.5rem] lg:h-[5.5rem] text-secondary" />
          </FeatureCard>
        </div>
      </Section>
    </>
  );
};

export default Features;

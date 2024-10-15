import React from "react";
import Section from "./Section";
import HeadingText from "./HeadingText";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <>
      <Section
        className="py-10 gap-y-5 justify-center h-[100vh] md:h-[90vh] lg:h-[90.5vh] lg:items-center lg:gap-y-20"
        id="pricing"
      >
        <HeadingText title="Plans" />
        <div className="flex flex-grow flex-col w-full gap-y-5 font-body lg:flex-row lg:flex-grow-0 lg:h-full lg:justify-center lg:items-center">
          <PricingCard
            title="Basic"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam non at facere."
            price="1.99"
            className="border-2 border-footer lg:border-4 lg:h-1/2 lg:transition lg:ease-in-out lg:delay-100 lg:hover:scale-110"
            bookmarkColor="bg-footer"
          />
          <PricingCard
            title="Premium"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aspernatur sit, quas iusto facilis molestiae vero."
            price="4.99"
            className="border-4 lg:border-8 border-background lg:h-[60%] lg:transition lg:ease-in-out lg:delay-100 lg:hover:scale-110 z-10"
            bookmarkColor="bg-background"
          />
          <PricingCard
            title="Max"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quod id hic velit natus."
            price="9.99"
            className="border-2 border-teal-700 lg:border-4 lg:h-1/2 lg:transition lg:ease-in-out lg:delay-100 lg:hover:scale-110 z-0"
            bookmarkColor="bg-teal-700"
          />
        </div>
      </Section>
    </>
  );
};

export default Pricing;

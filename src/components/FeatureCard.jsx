import React from "react";

const FeatureCard = ({ isReversed, body, children }) => {
  return (
    <>
      <div
        className={`flex ${
          isReversed ? "flex-row-reverse" : "flex-row"
        } gap-x-3`}
      >
        <div className="flex items-center justify-center">{children}</div>
        <div className=" px-5 flex items-center lg:w-1/2">
          <p className="text-[0.75rem] font-body text-center font-[500] md:text-[0.9rem] lg:text-[1.2rem]">
            {body}
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;

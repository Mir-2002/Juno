import React from "react";

const PricingCard = ({
  className,
  title,
  description,
  price,
  bookmarkColor,
}) => {
  return (
    <>
      <div
        className={`flex flex-row p-4 w-full h-1/3 rounded-2xl items-center relative shadow-lg bg-white lg:flex-col lg:rounded-3xl ${className}`}
      >
        <div className="flex flex-col justify-center w-1/2 flex-grow lg:w-full lg:p-5">
          <h1 className="text-[1.5rem] font-semibold md:text-[2rem] lg:text-[3rem]">
            {title}
          </h1>
          <p className="text-[0.7rem] md:text-[0.9rem] lg:text-[1.5rem]">
            {description}
          </p>
        </div>
        <div className="flex flex-row justify-end w-1/2 flex-grow items-center font-medium lg:justify-center">
          <p className="text-[1.5rem]">$</p>
          <h1 className="text-[2.5rem] lg:text-[3rem]">{price}</h1>
        </div>
        <div
          className={`h-[80%] w-20 absolute -right-[5.1rem] ${bookmarkColor} lg:hidden`}
        />
      </div>
    </>
  );
};

export default PricingCard;

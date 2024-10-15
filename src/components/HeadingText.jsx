import React from "react";

const HeadingText = ({ className, title, subtitle }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="uppercase text-lime-500 text-[2.5rem] font-medium font-logo text-center lg:text-[5rem]">
          {title}
        </h1>
        <p className="text-zinc-700 font-body lg:text-[1.3rem]">
          | Lorem ipsum dolor sit amet consectetur. |
        </p>
      </div>
    </>
  );
};

export default HeadingText;

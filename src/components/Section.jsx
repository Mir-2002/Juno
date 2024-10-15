import React from "react";

const Section = ({ children, id, className }) => {
  return (
    <>
      <section
        className={`flex flex-col items-center px-10 md:px-20 lg:px-56 ${
          className || ""
        } `}
        id={id}
      >
        {children}
      </section>
    </>
  );
};

export default Section;

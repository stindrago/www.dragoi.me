import React from "react";
import { copyright } from "../constants";

const Footer = () => {
  return (
    <section>
      <div className="mx-auto flex max-w-screen-sm items-center justify-center p-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray">
          {copyright}
        </p>
        {/* <div className="mx-4 aspect-square h-1 rounded-full bg-gray"></div> */}
      </div>
    </section>
  );
};

export default Footer;

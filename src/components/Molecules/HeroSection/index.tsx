import { Images } from "assets/Images";
import React from "react";

interface HeroSectionProps {
  bgSrc: string;
  children?: React.ReactNode | any;
  items?: 'center' | 'end';
}

export const HeroSection = ({ bgSrc, children, items = "center"}: HeroSectionProps) => {
  const additionalStyles = `before:content-[''] before:absolute before:left-0 before:top-15 before:w-0 before:h-0 before:border-t-[150px] before:border-t-[#0B0B0B] before:border-r-transparent before:border-r-[150px] after:content-['']  after:absolute after:right-0 after:bottom-0 after:w-0 after:h-0 after:border-t-[150px] after:border-t-transparent after:border-r-[150px] after:border-r-[#0B0B0B]`;

  return (
    <div>
      <div className="h-100vh w-full absolute ">
        <img
          className="h-full w-full object-fill relative z-10"
          src={Images.BLUR}
          alt=""
        />
      </div>
      <div className={`${additionalStyles} `}>
        <div className={`absolute z-40 flex justify-center items-${items} min-h-[90vh] w-full`}>
          {children}
        </div>
        <div className=" h-100vh p-5">
          <img className="h-full w-full object-fill" src={bgSrc} alt="" />
        </div>
      </div>
    </div>
  );
};

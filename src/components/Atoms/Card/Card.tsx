import React from "react";

interface CardPros {
  children: React.ReactNode | any;
}

export const Card = ({ children }: CardPros) => {
  return (
    <div className="relative h-[450px] w-[400px] border-2 border-dashed border-lightprimary bg-background-blacklight z-20 before:content-[''] before:bg-transparent before:absolute before:-top-[2px] before:-left-[2px] before:w-[30px] before:h-[30px] before:border-t-[2px] before:border-t-primary before:border-r-transparent before:border-l-[2px] before:border-l-primary  after:content-[''] after:bg-transparent after:absolute after:-bottom-[2px] after:-right-[2px] after:w-[30px] after:h-[30px] after:border-b-[2px] after:border-b-primary after:border-l-transparent after:border-r-[2px] after:border-r-primary">
      {children}
    </div>
  );
};

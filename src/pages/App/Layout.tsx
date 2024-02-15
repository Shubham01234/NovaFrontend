
import React from "react";
import Header from "../../components/Header/header";

const Layout = ({ children }: any) => {
  return (
    <div className="h-screen w-screen">
        <Header/>
      <div className="w-full">
          {children}
      </div>
    </div>
  );
};

export default Layout;

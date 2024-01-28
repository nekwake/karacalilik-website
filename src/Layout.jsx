import React from "react";
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";

export const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

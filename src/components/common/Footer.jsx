import React from "react";
import CutLogo from "../../images/white-logo-smaller.png";
import { Container } from "./Container";

export const Footer = () => {
  return (
    <div className="footer-container h-auto md:h-96 w-full bg-krcgreen ">
      <Container>
        <div className="footer-inner-container flex h-full w-full items-center justify-between px-6 py-6 ">
          <div className="logo h-full w-auto lg:flex-[2] flex-[2]">
            <a href="/" className="h-full w-auto">
              <img
                src={CutLogo}
                alt="Dernek Logo"
                className="h-full w-auto md:h-72 "
              />
            </a>
          </div>
          <div className="links text-white flex flex-col lg:flex-row gap-2 lg:gap-12 lg:flex-[5] w-full justify-end flex-[3] lg:items-start items-end">
            <a href="/" className="text-white">
              Anasayfa
            </a>
            <a href="/hakkimizda" className="text-white">
              Hakkımızda
            </a>
            <a href="/sulaleler" className="text-white">
              Sülaleler
            </a>
            <a href="/galeri" className="text-white">
              Galeri
            </a>
            <a href="/etkinlikler" className="text-white">
              Etkinlikler
            </a>
            <a href="/iletisim" className="text-white">
              İletişim
            </a>
          </div>
        </div>
      </Container>
      <div className="footer-text text-white text-center pb-2 text-xs md:text-base">
        <p>© Gökberk Tanış - 2024</p>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import Logo from "../../images/logo-yazisiz-yesil.png";
import { Container } from "./Container";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="header-container md:h-20 h-12 w-full flex items-center shadow-md">
      <Container>
        <div className="header-inner-container flex relative justify-between">
          <div className="logo md:flex hidden h-20 py-1">
            <a href="/">
              <img src={Logo} alt="Dernek Logo" className="h-full w-auto" />
            </a>
          </div>
          <div className="mobil-logo md:hidden flex absolute z-50 left-2 h-20 py-2 -mt-3">
            <a href="/">
              <img src={Logo} alt="Dernek Logo" className="h-full w-auto" />
            </a>
          </div>
          <div className="links md:flex hidden items-center gap-12 ">
            <a
              href="/"
              className="text-krcgreen hover:text-black transition-colors"
            >
              Anasayfa
            </a>
            <a
              href="/hakkimizda"
              className="text-krcgreen hover:text-black transition-colors"
            >
              Hakkımızda
            </a>
            <a
              href="/sulaleler"
              className="text-krcgreen hover:text-black transition-colors"
            >
              Sülaleler
            </a>
            <a
              href="/galeri"
              className="text-krcgreen hover:text-black transition-colors"
            >
              Galeri
            </a>
            <a
              href="/etkinlikler"
              className="text-krcgreen hover:text-black transition-colors"
            >
              Etkinlikler
            </a>
            <a
              href="/iletisim"
              className="text-krcgreen hover:text-black transition-colors"
            >
              İletişim
            </a>
          </div>
          <div
            className={`mobile-links md:hidden flex absolute w-full flex-col items-center gap-5 z-40 bg-white top-10 shadow-md ${
              isMenuOpen ? "active" : ""
            }`}
          >
            <a
              href="/"
              className="text-krcgreen hover:text-black transition-colors delay-200"
            >
              Anasayfa
            </a>
            <a
              href="/hakkimizda"
              className="text-krcgreen hover:text-black transition-colors delay-200"
            >
              Hakkımızda
            </a>
            <a
              href="/sulaleler"
              className="text-krcgreen hover:text-black transition-colors delay-200"
            >
              Sülaleler
            </a>
            <a
              href="/galeri"
              className="text-krcgreen hover:text-black transition-colors delay-200"
            >
              Galeri
            </a>
            <a
              href="/etkinlikler"
              className="text-krcgreen hover:text-black transition-colors delay-200"
            >
              Etkinlikler
            </a>
            <a
              href="/iletisim"
              className="text-krcgreen hover:text-black transition-colors delay-200"
            >
              İletişim
            </a>
          </div>
          <div className="menu md:hidden flex justify-end w-full px-2">
            <IoIosMenu
              className="w-8 h-8 text-krcgreen"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

import React from "react";
import video from "../images/bgvideo.mp4";
import { Container } from "../components/common/Container";

export const Home = () => {
  return (
    <div className="home-container relative">
      <video
        className="bgvideo sm:min-h-screen min-h-[60vh] w-full h-auto object-cover"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="center-content absolute w-11/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="font-black text-4xl sm:text-5xl md:text-6xl mb-4">
          Diasporada bir Çerkes Köyü.
        </h1>
        <p className="text-lg sm:text-base md:text-xl">
          Karaçalılık Çerkes Derneği websitesine hoş geldiniz. Derneğimize
          kaydolabilir veya tüzüğümüzü okuyabilirsiniz.
        </p>
        <div className="buttons-container mt-4">
          <button
            type="button"
            className="register-button text-krcwhite bg-krcgreen hover:text-krcgreen hover:bg-krcwhite transition-colors font-medium rounded-2xl text-xl sm:text-lg md:text-xl px-5 py-2.5 text-center me-2 mb-2"
          >
            Üye Kayıt Formu
          </button>
          <button
            type="button"
            className="constitution-button text-krcgreen bg-krcwhite hover:text-krcwhite hover:bg-krcgreen transition-colors font-medium rounded-2xl text-xl sm:text-lg md:text-xl px-5 py-2.5 text-center me-2 mb-2"
          >
            Dernek Tüzüğü
          </button>
        </div>
      </div>
      <Container></Container>
    </div>
  );
};

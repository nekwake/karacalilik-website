import React from "react";
import TolgaTosun from "../images/galeripics/tolga-tosun-1.jpg";
import TolgaTosun2 from "../images/galeripics/tolga-tosun-2.jpg";
import TolgaTosun3 from "../images/galeripics/tolga-tosun-3.jpg";
import TolgaTosun4 from "../images/galeripics/tolga-tosun-4.jpg";
import IlceBsk1 from "../images/galeripics/ilce-bsk-1.jpg";
import IlceBsk2 from "../images/galeripics/ilce-bsk-2.jpg";
import IlceBsk3 from "../images/galeripics/ilce-bsk-3.jpg";
import IlceBsk4 from "../images/galeripics/ilce-bsk-4.jpg";
import IlceBsk5 from "../images/galeripics/ilce-bsk-5.jpg";
import IlceBsk6 from "../images/galeripics/ilce-bsk-6.jpg";
import YucelYlmz from "../images/galeripics/yucelyilmaz-1.jpg";
import YucelYlmz2 from "../images/galeripics/yucelyilmaz-2.jpg";
import YucelYlmz3 from "../images/galeripics/yucelyilmaz-3.jpg";
import YucelYlmz4 from "../images/galeripics/yucelyilmaz-4.jpg";
import YucelYlmz5 from "../images/galeripics/yucelyilmaz-5.jpg";
import YucelYlmz6 from "../images/galeripics/yucelyilmaz-6.jpg";
import YucelYlmz7 from "../images/galeripics/yucelyilmaz-7.jpg";
import YucelYlmz8 from "../images/galeripics/yucelyilmaz-8.jpg";
import YucelYlmz9 from "../images/galeripics/yucelyilmaz-9.jpg";
import YucelYlmz10 from "../images/galeripics/yucelyilmaz-10.jpg";
import YucelYlmz11 from "../images/galeripics/yucelyilmaz-11.jpg";
import YucelYlmz12 from "../images/galeripics/yucelyilmaz-12.jpg";
import YucelYlmz13 from "../images/galeripics/yucelyilmaz-13.jpg";
import { Container } from "../components/common/Container";

export const Galeri = () => {
  const galeryList = [
    {
      img: IlceBsk1,
    },
    {
      img: IlceBsk2,
    },
    {
      img: IlceBsk3,
    },
    {
      img: IlceBsk4,
    },
    {
      img: IlceBsk5,
    },
    {
      img: IlceBsk6,
    },
    {
      img: YucelYlmz,
    },
    {
      img: YucelYlmz2,
    },
    {
      img: YucelYlmz3,
    },
    {
      img: YucelYlmz4,
    },
    {
      img: YucelYlmz5,
    },
    {
      img: YucelYlmz6,
    },
    {
      img: YucelYlmz7,
    },
    {
      img: YucelYlmz10,
    },
    {
      img: YucelYlmz11,
    },
    {
      img: YucelYlmz8,
    },
    {
      img: YucelYlmz9,
    },

    {
      img: YucelYlmz12,
    },
    {
      img: YucelYlmz13,
    },
    {
      img: TolgaTosun,
    },
    {
      img: TolgaTosun2,
    },
    {
      img: TolgaTosun3,
    },
    {
      img: TolgaTosun4,
    },
  ];
  return (
    <Container>
      <div class="grid-container grid md:grid-cols-4 grid-cols-3 my-10 gap-4 md:px-0 px-6 ">
        {galeryList.map((galeri, index) => {
          return (
            <div class="grid-item text-center" key={index}>
              <div className="img-container">
                <img
                  src={galeri.img}
                  className="mix-blend-multiply shadow-krc2 md:rounded-xl rounded-md"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  alt={`Galeri ${index + 1}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

import React from "react";
import Acmuj from "../images/sulaleler/acmuj.png";
import NoPhoto from "../images/nophoto.png";
import Basti from "../images/sulaleler/basti.png";
import Bjaso from "../images/sulaleler/bjaso.png";
import Cuyeko from "../images/sulaleler/cuyeko.png";
import Hantuv from "../images/sulaleler/hantuv.png";
import Hidzelt from "../images/sulaleler/hidzelt.png";
import Hust from "../images/sulaleler/hust.png";
import Jane from "../images/sulaleler/jane.png";
import Kitij from "../images/sulaleler/kitij.png";
import Thawko from "../images/sulaleler/thawko.png";
import Tletseruk from "../images/sulaleler/tletseruk.png";
import { Container } from "../components/common/Container";

export const Sulaleler = () => {
  const sulaleList = [
    {
      img: Acmuj,
      name: "Acmuj",
      desc: "Barslan, Evgin, Kızıldere Aileleri",
    },
    {
      img: NoPhoto,
      name: "Aşuko",
      desc: "Yüken Ailesi",
    },
    {
      img: Basti,
      name: "Basti",
      desc: "Ergün Ailesi",
    },
    {
      img: Bjaso,
      name: "Bjaşö",
      desc: "Özay Ailesi",
    },
    {
      img: Cuyeko,
      name: "Cuyeko",
      desc: "Akbulat Ailesi",
    },
    {
      img: Hantuv,
      name: "Hantuv",
      desc: "Tören Ailesi",
    },
    {
      img: Hidzelt,
      name: "Hıdzelt",
      desc: "Evre Ailesi",
    },
    {
      img: NoPhoto,
      name: "Hupşı",
      desc: "Göçmez Ailesi",
    },
    {
      img: Hust,
      name: "Huşt",
      desc: "Baykala Ailesi",
    },
    {
      img: Jane,
      name: "Jane",
      desc: "Tanış Ailesi",
    },
    {
      img: Kitij,
      name: "Kıtıj",
      desc: "İçöz Ailesi",
    },
    {
      img: NoPhoto,
      name: "Psınow",
      desc: "Arslanhan Ailesi",
    },
    {
      img: Thawko,
      name: "Thawko",
      desc: "Erşayan Ailesi",
    },
    {
      img: Tletseruk,
      name: "Tletseruk",
      desc: "Samsa Ailesi",
    },
    {
      img: NoPhoto,
      name: "Yogume",
      desc: "Bayburi Ailesi",
    },
  ];
  return (
    <Container>
      <div class="grid-container grid md:grid-cols-4 grid-cols-3 my-10 gap-4 md:px-0 px-6">
        {sulaleList.map((sulale) => {
          return (
            <div class="grid-item text-center">
              <div className="img-container rounded-full border-4 border-krcgreen">
                <img
                  src={sulale.img}
                  alt={sulale.name}
                  className="mix-blend-multiply"
                />
              </div>
              <h3 className="font-bold md:text-xl text-base mt-2">
                {sulale.name}
              </h3>
              <p className="md:text-base text-sm mb-4">{sulale.desc}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

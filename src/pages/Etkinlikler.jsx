import React from "react";
import { Container } from "../components/common/Container";
import { etkinliklerList } from "../data/etkinlikler";

export const Etkinlikler = () => {
  const etkinlikler = etkinliklerList;
  return (
    <div className="etkinlikler">
      {etkinlikler.map((etkinlik) => {
        return (
          <div className="etkinlik" type="">
            <Container>
              <div className="etkinlik-inner-container md:h-[500px] rounded-2xl my-5 md:flex lg:flex mx-4 shadow-krc">
                <div className="etkinlik-img-container p-5 md:max-w-[400px] md:min-w-[400px] max-w-[450px] min-w-full">
                  <img
                    src={etkinlik.img}
                    alt="Etkinlik"
                    className="justify-center items-center h-full object-cover rounded-xl shadow-krc2"
                  />
                </div>
                <div className="etkinlik-content-container py-5 md:px-5 px-5">
                  <div className="etkinlik-title-container text-xl pb-5 text-krcgreen">
                    <h1 className="etkinlik-title">{etkinlik.title}</h1>
                  </div>
                  <div className="etkinlik-description-container">
                    <p className="etkinlik-description">{etkinlik.text}</p>
                  </div>
                  <div className="etkinlik-date-container">
                    <p className="etkinlik-date text-gray-400 text-right">
                      {etkinlik.date}
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        );
      })}
    </div>
  );
};

import React from "react";
import Iframe from "react-iframe";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { Container } from "../components/common/Container";

export const Iletisim = () => {
  return (
    <div className="contact-container flex justify-center">
      <Container>
        <div className="contact-inner-container md:m-14 m-2 my-7 md:p-8 p-2 rounded-2xl shadow-krc">
          <div className="map-description flex justify-center py-2">
            <FaMapMarkerAlt className="map-icon fill-krcgreen self-center" />
            <p>Karaçalılık Mahallesi/Bandırma/Balıkesir</p>
          </div>
          <div className="map-container flex justify-center md:mx-64 my-1 md:p-8 p-2 rounded-2xl shadow-krc">
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1525.7058576176494!2d28.10150088928217!3d40.11082737132499!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1706031304374!5m2!1str!2str"
              width="640px"
              height="320px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </div>
          <div className="phone-description flex justify-center py-2">
            <FaPhone className="phone-icon fill-krcgreen self-center" />
            <p>
              <a href="tel:+905455952839">+90 545 595 2839</a>
            </p>
          </div>
          <div className="mail-description flex justify-center py-2">
            <IoMail className="mail-icon fill-krcgreen self-center" />
            <p>
              <a href="mailto:karacalilikcerkesdernegi@gmail.com">
                karacalilikcerkesdernegi@gmail.com
              </a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

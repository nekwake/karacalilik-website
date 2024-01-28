import React from "react";
import aboutus1 from "../images/aboutus1.jpg";
import aboutus2 from "../images/aboutus2.jpg";
import { Container } from "../components/common/Container";

export const Hakkimizda = () => {
  return (
    <div className="about-us-container md:flex px-3">
      <Container>
        <div className="about-us-inner-container rounded-3xl shadow-krc md:p-10 p-9 my-10">
          <h1 className="text-krcgreen text-3xl mb-4 md:l-14">Hakkımızda</h1>
          <div className="row flex">
            <div className="text flex-1 md:p-12">
              <p>
                1764 yılında resmi olarak başlayan, tarihte Rus – Kafkas
                Savaşları olarak geçen savaş sonunda uzun yıllardır
                anavatanlarında özgürce yaşayan Kafkas halkları soykırıma
                uğrayarak vatanlarından sürgün edildi. 1864 yılında en üst
                noktaya ulaşan sürgün, Dünyanın bir çok noktasında savrulacak
                Çerkes halkları için acılarla geçen bir yüzyılın bitişi, yeni
                acıların ve bilinmezliğe yolculuğun başladığı tarihtir.
                Karaçalılık Köyünü kuran büyüklerimiz Sürgün öncesinde
                Kafkasya’da Maykop yakınlarındaki Penexes’te yaşamaktaydı.
                Yurtlarından koparılıp sürgüne sochı limanı üzerinden
                gönderildiler. İlk durakları İstanbul’da Beyoğlu oldu. Osmanlı
                Hükümeti bu bölgeyi kendilerine yer göstererek burada yaşamaları
                için tahsis etti. Sürgün edilen grubun ‘thamede’ leri (Önde
                gelen, lider, sözü geçen), bu bölgenin tarıma, mısır
                yetiştiriciliğine uygun olmadığını belirterek buradan
                ayrıldılar. Bandırma’ya geldiler. Bandırma’da bir süre
                konakladıktan sonra adaya** gönderildiler. O dönemi kasıp
                kavuran, ciddi toplu ölümlere sebep olan Sıtma hastalığı Adaya
                gelen yeni misafirleri de kötü etkiledi. Adada kaldıkları sürede
                büyük kayıplar yaşayan grup buradan da ayrılarak Havdançeşme’ye
                geldiler.
              </p>
            </div>
            <div className="img flex-1 md:flex hidden">
              <img
                src={aboutus1}
                alt="resim"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
          <div className="row flex">
            <div className="img flex-1 md:flex hidden">
              <img
                src={aboutus2}
                alt="resim2"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="text flex-1 md:p-12">
              <p>
                Havdançeşme halkı sürgün edilen, sıtma hastalığı ile boğuşan,
                dillerini bilmedikleri, farklı kıyafetler giyen bu grubu sıcak
                karşılamadı. Bu bölgenin uğursuz olduğunu, şanssızlık ve kötü
                kaderin peşlerini bırakmayacağına ikna ederek bölgeden
                ayrılmalarını sağladı. Son durakları o dönem Bursa Valiliğine
                bağlı olan, Karadere yakınındaki Karaçalılık bölgesi oldu.
                Buraya yerleştirilen grup, dönemin Bursa Valisinin çizdiği köy
                planına göre yerleşti. 1880’li yıllardan beri bu bölgede
                Karaçalılık Köyü olarak varlığını sürdürmektedir. Karaçalılık
                Köyü, Bandırmaya 32, Susurluğa 28, Manyas’a 15, yeni yapılan
                İstanbul – İzmir Otobanına 20 km mesafede Karadere’nin hemen
                yanında bulunan Bandırma’nın son köyüdür. Bandırma – Balıkesir
                yolunun 1,5 km içerisinde kurulu olan köy, 56 haneden
                oluşmaktadır. Yaz ve kış dönemlerinde değişmekle beraber
                ortalama 192 nüfusu vardır. ** Berzeg Emel Bezek Arşivinden
                alınmıştır.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

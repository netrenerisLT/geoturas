import React from "react";
import scss from "./About.module.scss";
import midPhoto from "../../assets/images/mid-photo.jpg";

function About() {
  return (
    <div className={scss.block}>
      <div className={scss.block__top}>
        <div className={scss.block__top__image}>
          <img src={midPhoto} alt="geodeziniu matavimu planai" />
        </div>
        <div className={scss.block__top__aboutUs}>
          <div className={`${scss.block__top__aboutUs__line} ${"aboutus"}`}>
            <br />
          </div>
          <h4 className={scss.block__top__aboutUs__text}>Apie Mus</h4>
        </div>
      </div>
      <div className={scss.block__bottom}>
        <h4 className={scss.block__bottom__title}>10+ metų patirtis</h4>
        <p className={scss.block__bottom__text}>
          Sukaupus didžiulę patirtį ir igijus aukštą kvalifikaciją gimė įdėja
          sukurti įmonę „Geoturas“, kuri savo veiklą pradėjo 2019 metais.
          Moderniausia įranga ir noras tobulėti, leidžia užsakovams pasiūlyti
          ypač gerą darbų kokybę bei terminus. Esame lankstūs, todėl visada
          randame bendrą kalbą su klientais. Mūsų tikslas – savo klientams laiku
          suteikti aukščiausios kokybės paslaugas už prieinamą kainą.
          Geodezinius darbus atliekame visoje vakarų Lietuvoje.
        </p>
      </div>
    </div>
  );
}

export default About;

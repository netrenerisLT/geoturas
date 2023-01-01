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
          <div className={scss.block__top__aboutUs__line}>
            <br />
          </div>
          <h4 className={scss.block__top__aboutUs__text}>Apie Mus</h4>
        </div>
      </div>
      <div className={scss.block__bottom}>
        <h4 className={scss.block__bottom__title}>Vitalijus Maksimovas</h4>
        <p className={scss.block__bottom__text}>
          Lankstus darbų grafikas yra didelis įmonės privalumas. Dirbame vakarų
          regione, bet pagal susitarimą darbus galime atlikti visoje
          Lietuvoje.Lankstus darbų grafikas yra didelis įmonės privalumas.
          Dirbame vakarų regione, bet pagal susitarimą darbus galime atlikti
          visoje Lietuvoje.Lankstus darbų grafikas yra didelis įmonės
          privalumas. Dirbame vakarų regione, bet pagal susitarimą darbus galime
          atlikti visoje Lietuvoje.
        </p>
      </div>
    </div>
  );
}

export default About;

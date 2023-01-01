import React from "react";
import scss from "./Services.module.scss";

function Services() {
  return (
    <div className={scss.block}>
      <div className={scss.services}>
        <ul className={scss.services__list}>
          <li className={scss.services__list__item}>
            <h4 className={scss.services__list__item__title}>
              Statybinė Geodezija
            </h4>
            <p className={scss.services__list__item__text}>
              Lankstus darbų grafikas yra didelis įmonės privalumas. Dirbame
              vakarų regione, bet pagal susitarimą darbus galime atlikti visoje
              Lietuvoje.
            </p>
          </li>
          <li className={scss.services__list__item}>
            <h4 className={scss.services__list__item__title}>
              Topografiniai Planai
            </h4>
            <p className={scss.services__list__item__text}>
              Lankstus darbų grafikas yra didelis įmonės privalumas. Dirbame
              vakarų regione, bet pagal susitarimą darbus galime atlikti visoje
              Lietuvoje.
            </p>
          </li>
          <li className={scss.services__list__item}>
            <h4 className={scss.services__list__item__title}>
              Kadastriniai Matavimai
            </h4>
            <p className={scss.services__list__item__text}>
              Lankstus darbų grafikas yra didelis įmonės privalumas. Dirbame
              vakarų regione, bet pagal susitarimą darbus galime atlikti visoje
              Lietuvoje.
            </p>
          </li>
          <li className={scss.services__list__item}>
            <h4 className={scss.services__list__item__title}>
              Visi nužymėjimo darbai
            </h4>
            <p className={scss.services__list__item__text}>
              Lankstus darbų grafikas yra didelis įmonės privalumas. Dirbame
              vakarų regione, bet pagal susitarimą darbus galime atlikti visoje
              Lietuvoje.
            </p>
          </li>
          <li className={scss.services__list__item}>
            <h4 className={scss.services__list__item__title}>
              (Išpildomosios) geodezinės nuotraukos
            </h4>
            <p className={scss.services__list__item__text}>
              Lankstus darbų grafikas yra didelis įmonės privalumas. Dirbame
              vakarų regione, bet pagal susitarimą darbus galime atlikti visoje
              Lietuvoje.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Services;

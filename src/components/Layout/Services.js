import React from "react";
import scss from "./Services.module.scss";
import fav1 from "../../assets/images/icon/kadastras.svg";
import fav2 from "../../assets/images/icon/statybine.svg";
import fav3 from "../../assets/images/icon/topografine.svg";
import fav4 from "../../assets/images/icon/ispildomosios.svg";
import fav5 from "../../assets/images/icon/nuzymejimo.svg";
import fav6 from "../../assets/images/icon/statin-kadastras.svg";

function Services() {
  const services = [
    {
      heading: "Žemės sklypų kadastriniai (geodeziniai) matavimai",
      desc: `Tai sklypų geodeziniai matavimai vietovėje, kurių metu nustatomi
      būtini kadastro duomenys (tikslus plotas, naudmenys, apribojimai,
      servitutai, sklypo vertė, sklypo ribos užnešamos valstybinėje
      koordinačių sistemoje), bei suformuojama žemės sklypo kadastrinių
      matavimų byla.`,
      img: { icons: fav1, imgDesc: "Kadastriniai matavimai ikonėlė" },
    },
    {
      heading: "Statybinė geodezija (darbas statybose)",
      desc: `Tai ypač tikslūs ir atsakingi geodeziniai matavimaim kurie
      atliekami prieš statybas, statybų eigoje ir pabaigus statybą.
      Prieš pradedant darbus, svarbu tinkamai pasiruošti, išanalizuoti
      visą topografinę ir projektinę medžiagą. Atliekami darbai: Statybinio tinklo įkūrimas; Pastatų projektinių ašių nužymėjimas vietovėje; Pastato dalių ar statybos etapų kontrolinės (išpildomosios) geodezinės nuotraukos; Aukščių perkėlimo darbai.`,
      img: { icons: fav2, imgDesc: "Statybinė geodezija ikonėlė" },
    },
    {
      heading: "Topografiniai planai ikonėlė",
      desc: `Topografiniai planai sudaromi prieš projektuojant naujus
      statinius, požemines inžinerines komunikacijas, kelius ar
      atliekant jų rekonstrukciją, rengiant detaliuosius planus ir pan.
      Planai, vadovaujantis nustatyta tvarka yra derinami su
      savivaldybėmis. Topografiniame plane tiksliai vaizduojama esama
      situacija, pagal pasirinktą mastelį. T.y. relijefas su aukšiais,
      objektai, situacija bei visos antžeminės ir požeminės inžinerinės
      komunikacijos.`,
      img: {
        icons: fav3,
        imgDesc: "Topografiniai planai ikonėlė ikonėlė",
      },
    },
    {
      heading: "Geodezinės (išpildomosios) nuotraukos",
      desc: `Matavimai atliekami pastačius naujus arba rekonstravus esamas
      statinius, požemines ar antžemines komunikacijas, dangas (keliai,
      takeliai, aikštelės). Šiais matavimais nustatoma erdvinė padėtis,
      gylis, aukštis, koordinatės, charakterizuojami atskiri elementai.`,
      img: {
        icons: fav4,
        imgDesc: "Geodezinės (išpildomosios) nuotraukos ikonėlė",
      },
    },
    {
      heading: "Visi nužymėjimo darbai",
      desc: `Tai matavimai, kurių metu tiksliai pažymimi objektai, ribos ar
      ašies vieta pagal projektą. Nužymėjimai yra būtini, siekiant
      nenukrypti nuo projekto ir sužinoti tikslią vietą. Atliekame visų
      tipų nužymėjimo darbus. Galime nužymėti sklypo ribas, požeminiu ir
      antžeminių komunikacijų planinę padėtį, statinių ašis ir kt.`,
      img: { icons: fav5, imgDesc: "Visi nužymėjimo darbai ikonėlė" },
    },
    {
      heading: "Statinių ir inžinerinių tinklų kadastriniai matavimai",
      desc: `Šie matavimai yra atliekami pastačius ar rekonstravus pastatus bei
      įrengus inžinerines komunikacijas ir statinius. Vadovaujantis
      parengtomis geodezinėmis (išpildomosiomis) nuotraukomis yra
      parengiamos kadastrinės bylos, kurių metu nustatomos medžiagos,
      plotai, tūriai, ilgiai, baigtumo procentai, kadastro duomenys ir
      kt.`,
      img: {
        icons: fav6,
        imgDesc:
          "Statinių ir inžinerinių tinklų kadastriniai matavimai ikonėlė",
      },
    },
  ];

  return (
    <div className={scss.block}>
      <div className={`${scss.services} ${"services"}`}>
        <ul className={scss.services__list}>
          {services.map((item) => {
            return (
              <li className={scss.services__list__item} key={item.img.icons}>
                <img src={item.img.icons} alt={item.img.desc} />
                <h4 className={scss.services__list__item__title}>
                  {item.heading}
                </h4>
                <p className={scss.services__list__item__text}>{item.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Services;

import React from "react";
import scss from "./Header.module.scss";
import logo from "../../assets/images/logo-white.png";
import cover from "../../assets/images/cover.jpg";
import Button from "../UI/Button/Button";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={scss.header}>
        <section className={scss["nav-bar"]}>
          <a className={scss["nav-bar__logo"]} href="/">
            <img src={logo} alt="geoturas logo" />
          </a>
          <nav>
            <ul className={scss["nav-bar__list"]}>
              <li className={scss["nav-bar__list"]}>
                <a className={scss["nav-bar__link"]} href="index.html">
                  Paslaugos
                </a>
              </li>
              <li className={scss["nav-bar__list"]}>
                <a className={scss["nav-bar__link"]} href="index.html">
                  Apie Mus
                </a>
              </li>
              <li className={scss["nav-bar__list"]}>
                <a className={scss["nav-bar__link"]} href="index.html">
                  Kontaktai
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <section className={scss.cover}>
          <div className={scss["cover__first-block"]}>
            <div className={scss["cover__text-block"]}>
              <h1 className={scss["cover__title"]}>
                <p>Geodezija, Topografija, Kadastriniai Matavimai </p>
              </h1>
              <h2 className={scss["cover__title-side"]}>
                Daugiametė patirtis, bei naudojama moderniausia įranga, leidžia
                greitai ir kokybiškai atlikti geodezijos darbus.
              </h2>
            </div>
            <div>
              <img
                className={scss["cover__image"]}
                src={cover}
                alt="geodezininkas matuoja"
              />
            </div>
          </div>
          <div className={scss["cover__second-block"]}>
            <p className={scss["cover__second-block-p"]}>
              Susisiekite ir gaukite nuolaidą pirmam užsakymui!
            </p>
            <Button type="submit">Susisiekti</Button>
          </div>
        </section>
      </header>
    </React.Fragment>
  );
};

export default Header;
import React from "react";
import { Link } from "react-scroll";
import scss from "./Header.module.scss";
import logo from "../../assets/images/logo-white.png";
import cover from "../../assets/images/cover.jpg";
import Button from "../UI/Button/Button";

const Header = (props) => {
  // const scroll = useRef(null);
  // const executeScroll = () =>
  //   scroll.current.scrollIntoView({ behavior: "smooth" });

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
                <Link
                  className={scss["nav-bar__link"]}
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={500}
                >
                  Paslaugos
                </Link>
              </li>
              <li className={scss["nav-bar__list"]}>
                <Link
                  className={scss["nav-bar__link"]}
                  to="aboutus"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={500}
                >
                  Apie Mus
                </Link>
              </li>
              <li className={scss["nav-bar__list"]}>
                <Link
                  className={scss["nav-bar__link"]}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={500}
                >
                  Susisiekite
                </Link>
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
            <Link
              className={scss["nav-bar__link"]}
              to="contact"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              <Button type="submit">Susisiekti</Button>
            </Link>
          </div>
        </section>
      </header>
    </React.Fragment>
  );
};

export default Header;

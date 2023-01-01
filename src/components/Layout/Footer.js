import React from "react";
import scss from "./Footer.module.scss";
import logo from "../../assets/images/logo-grey.png";
import favicon from "../../assets/images/logo512.png";

function Footer() {
  return (
    <footer className={scss.footer}>
      <div className={scss.block}>
        <div className={scss.block__left}>
          <a href="/">
            <img
              src={logo}
              alt="geoturas logo"
              className={scss.block__left__logo}
            />
          </a>

          <p className={scss.block__left__text}>
            © {new Date().getFullYear()} Visos Teisės Saugomos
          </p>
        </div>
        <div className={scss.block__right}>
          <div className={scss.block__right__top}>
            <div className={scss.block__right__top__element}>
              <img src={favicon} alt="ikonėlė" />
              <p>Suteikiu Garantiją</p>
            </div>
            <div className={scss.block__right__top__element}>
              <img src={favicon} alt="ikonėlė" />
              <p>Suteikiu mokymus</p>
            </div>
            <div className={scss.block__right__top__element}>
              <img src={favicon} alt="ikonėlė" />
              <p>Suteikiu apsaugą</p>
            </div>
          </div>
          <div className={scss.block__right__bottom}>
            <div className={scss.block__right__bottom__left}>
              <h4>Rekvizitai</h4>
              <h5>Geoturas, IĮ</h5>
              <p>Įmonės kodas: 305218290</p>
            </div>
            <div className={scss.block__right__bottom__right}>
              <h4>Kontaktai</h4>
              <address className={scss.block__right__bottom__right__adress}>
                <div>
                  <h5>Elektroninis paštas:</h5>
                  <a href="mailto:infogeoturas@gmail.com">
                    infogeoturas@gmail.com
                  </a>
                </div>
                <div>
                  <h5>Telefonas:</h5>
                  <a href="tel:+37067400887">+37067400887</a>
                </div>
                <div>
                  <h5>Adresas:</h5>
                  <a href="https://goo.gl/maps/FVkN7Tq3jYT54iMp6">
                    Klaipėda, Baltijos pr. 33, LT-94130
                  </a>
                </div>
              </address>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

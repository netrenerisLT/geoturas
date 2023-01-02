import React from "react";
import EmailJs from "../UI/Forms/EmailJs";
import scss from "./ContactForm.module.scss";

function ContactForm() {
  return (
    <div className={scss.block}>
      <div className={`${scss.block__contactUs} ${"contact"}`}>
        <div className={scss.block__contactUs__line}>
          <br />
        </div>
        <h4 className={scss.block__contactUs__text}>Susisiekite</h4>
      </div>
      <EmailJs />
    </div>
  );
}

export default ContactForm;

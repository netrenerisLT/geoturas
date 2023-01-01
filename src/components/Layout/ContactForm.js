import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import scss from "./ContactForm.module.scss";
import Button from "../UI/Button/Button";

function ContactForm() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState(false);
  const success = "Žinutė išsiųsta sėkmingai!";
  const failed = "Nepavyko išsiųsti žinutės. Bandykite dar kartą.";
  const timer = () => {
    setTimeout(() => {
      setShow(false);
    }, 5000);
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_shkyiji",
        "template_1nos57s",
        form.current,
        "iEmkKYNk-UL7tGSVD"
      )
      .then(
        (result) => {
          setShow(true);
          setMessage(true);
          timer();
          console.log(result.text);
        },
        (error) => {
          setShow(true);
          setMessage(false);
          timer();
          console.log(error.text);
        }
      );
  };

  return (
    <div className={scss.block}>
      <div className={scss.block__contactUs}>
        <div className={scss.block__contactUs__line}>
          <br />
        </div>
        <h4 className={scss.block__contactUs__text}>Susisiekite</h4>
      </div>
      <div className={scss.block__form}>
        <form ref={form} onSubmit={sendEmail}>
          <textarea
            name="message"
            placeholder="Jūsų žinutė"
            className={scss.block__form__text}
            required
          />
          <div className={scss.block__form__bottom}>
            <input
              type="text"
              name="user_name"
              placeholder="Vardas"
              className={scss.block__form__name}
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="El. paštas"
              className={scss.block__form__email}
              required
            />
            <Button type="submit">Siųsti</Button>
          </div>
        </form>
        {show && (
          <p className={scss.block__form__message}>
            {message ? success : failed}
          </p>
        )}
      </div>
    </div>
  );
}

export default ContactForm;

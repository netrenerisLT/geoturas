import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import scss from "../../Layout/ContactForm.module.scss";
import Button from "../Button/Button";

function EmailJs() {
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
        "service_lfi6bkx",
        "template_r4f42bn",
        form.current,
        "QrLGkyOZSKq4t9-0x",
        "g-recaptcha-response"
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
    <div className={scss.block__form}>
      <form ref={form} onSubmit={sendEmail} id="contactForm">
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
          {/* <div
            className="g-recaptcha"
            data-sitekey="6LdaRcUjAAAAACiaZwq__8OoErV1ItCYOYV8RmkD"
          ></div> */}
          <Button type="submit">Siųsti</Button>
        </div>
      </form>
      {show && (
        <p className={scss.block__form__message}>
          {message ? success : failed}
        </p>
      )}
    </div>
  );
}

export default EmailJs;

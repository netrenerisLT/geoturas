import React from "react";
import scss from "./Button.module.scss";

function Button(props) {
  return (
    <button className={scss.button} type={props.type || "button"}>
      {props.children}
    </button>
  );
}

export default Button;

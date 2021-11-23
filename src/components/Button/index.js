import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Button.module.css";

function Button({ children, path }) {
  return (
    <Link to={path ?? ""}>
      <button
        className={Styles.buttonMain}
        onClick={() => path && window.scrollTo(0, 0)}
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;

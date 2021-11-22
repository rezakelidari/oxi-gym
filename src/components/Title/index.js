import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Title.module.css";

function Title({ link }) {
  return (
    <Link to={link ? "/" : ""} onClick={() => link && window.scrollTo(0, 0)}>
      <div className={Styles.titleMain}>
        Oxi Gym <span className={Styles.titleDot}></span>
      </div>
    </Link>
  );
}

export default Title;

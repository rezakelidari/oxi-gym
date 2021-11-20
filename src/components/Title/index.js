import React from "react";
import Styles from "./Title.module.css";

function Title() {
  return (
    <div className={Styles.titleMain}>
      Oxi Gym <span className={Styles.titleDot}></span>
    </div>
  );
}

export default Title;

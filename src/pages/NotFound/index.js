import React from "react";
import { Link } from "react-router-dom";
import Styles from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={Styles.notFoundMain}>
      <h1 className={Styles.errorTitle}>Page Not Foud - 404!</h1>
      <p className={Styles.errorDesc}>
        The page you are looking for seems does not exist
      </p>
      <Link to="/">Go to Home page</Link>
    </div>
  );
}

export default NotFound;

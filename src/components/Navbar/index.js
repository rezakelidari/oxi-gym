import React, { useState } from "react";
import Title from "../Title";
import Styles from "./Navbar.module.css";

function Navbar() {
  const [navClassName, setNavClassName] = useState(`${Styles.navbarMain}`);

  window.addEventListener("scroll", () => {
    window.scrollY > 0
      ? setNavClassName(`${Styles.navbarMain} ${Styles.scrolled}`)
      : setNavClassName(`${Styles.navbarMain}`);
  });

  return (
    <nav className={navClassName}>
      <Title />
    </nav>
  );
}

export default Navbar;

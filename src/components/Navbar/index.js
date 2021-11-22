import React, { useReducer, useState } from "react";
import Styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Title from "../Title";

function Navbar() {
  const burgerReducer = (state, action) => {
    return state ? false : true;
  };

  const [navClassName, setNavClassName] = useState(`${Styles.navbarMain}`);
  const [navBurgerState, dispatch] = useReducer(burgerReducer, false);

  window.addEventListener("scroll", () => {
    window.scrollY > 0
      ? setNavClassName(`${Styles.navbarMain} ${Styles.scrolled}`)
      : setNavClassName(`${Styles.navbarMain}`);
  });

  return (
    <nav className={navClassName}>
      <NavLink name="Trainers" path="/trainers" />
      <Title link />
      <NavLink name="Pricing" path="/pricing" />

      <span
        className={`${Styles.navBurger} ${navBurgerState ? Styles.opened : ""}`}
        onClick={dispatch}
      ></span>
      <ul
        className={`${Styles.navDropDown} ${navBurgerState ? Styles.show : ""}`}
      >
        <li>
          <Link to="/trainers" onClick={() => window.scrollTo(0, 0)}>
            Trainers
          </Link>
        </li>
        <li>
          <Link to="/pricing" onClick={() => window.scrollTo(0, 0)}>
            Pricing
          </Link>
        </li>
      </ul>
    </nav>
  );

  function NavLink({ name, path }) {
    return (
      <Link to={path} onClick={() => window.scrollTo(0, 0)}>
        <div className={Styles.navLink}>{name}</div>
      </Link>
    );
  }
}

export default Navbar;

import React from "react";
import Title from "../Title";
import Button from "../Button";
import Styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={Styles.footerMain}>
      <div className={Styles.footerWrapper}>
        <div className={Styles.footerContainer1}>
          <Title />
          <p className={Styles.footerDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={Styles.footerContainer2}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4789.5445011055235!2d-80.11951855639792!3d25.931804451151862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad1f478ee53d%3A0x7a47730c6e6f2ccf!2sFitness%20Time!5e0!3m2!1sfa!2s!4v1637527269490!5m2!1sfa!2s"
            className={Styles.footerMap}
            loading="lazy"
          ></iframe>
          <div className={Styles.footerLinks}>
            <a href="#">Home</a>
            <a href="#">Pricing</a>
            <a href="#">Trainers</a>
            <a href="#">Contact us</a>
          </div>
        </div>
      </div>
      <div className={Styles.footerLine}></div>
      <div className={Styles.footerAboutMe}>
        <h3>By Reza Kelidari</h3>
        <Button>Open in Github</Button>
      </div>
    </div>
  );
}

export default Footer;

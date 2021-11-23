import React from "react";
import Styles from "./Trainers.module.css";

import avatarJessica from "../../assets/img/trainerJessica.png";
import avatarAmita from "../../assets/img/trainerAmita.png";
import avatarPaulo from "../../assets/img/trainerPaulo.png";

import logoFacebook from "../../assets/icons/facebook.png";
import logoTwitter from "../../assets/icons/twitter.png";
import logoInstagram from "../../assets/icons/instagram.png";

function Trainers() {
  const trainersList = [
    {
      name: "Jessica Mino",
      avatar: avatarJessica,
      desc: "Woman Trainer",
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
    {
      name: "Amit Khan",
      avatar: avatarAmita,
      desc: "Men Trainer",
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
    {
      name: "Paulo Rolac",
      avatar: avatarPaulo,
      desc: "Men Trainer",
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  ];

  return (
    <div className={Styles.trainersMain}>
      <h1 className={Styles.trainersHeader}>Our Trainers:</h1>
      <p className={Styles.trainersDesc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <br />
      <div className={Styles.trainersList}>
        {trainersList.map((trainer) => (
          <Trainer
            name={trainer.name}
            avatar={trainer.avatar}
            desc={trainer.desc}
            facebook={trainer.facebook}
            twitter={trainer.twitter}
            instagram={trainer.instagram}
            key={trainer.name}
          />
        ))}
      </div>
    </div>
  );
}

function Trainer({ name, avatar, desc, facebook, twitter, instagram }) {
  return (
    <div className={Styles.trainerMain}>
      <img className={Styles.trainerAvatar} src={avatar} alt={avatar} />
      <div className={Styles.trainerBox}>
        <h3 className={Styles.trainerName}>{name}</h3>
        <h3 className={Styles.trainerDesc}>{desc}</h3>
        <div className={Styles.trainerSocial}>
          <a href={facebook} className={Styles.socialFacebook}>
            <img
              src={logoFacebook}
              alt="Facebook logo"
              className={Styles.socialIcon}
            />
          </a>
          <a href={twitter} className={Styles.socialTwitter}>
            <img
              src={logoTwitter}
              alt="Twitter logo"
              className={Styles.socialIcon}
            />
          </a>
          <a href={facebook} className={Styles.socialInstagram}>
            <img
              src={logoInstagram}
              alt="Instagram logo"
              className={Styles.socialIcon}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Trainers;

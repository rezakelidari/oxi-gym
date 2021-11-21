import React from "react";
import Styles from "./Home.module.css";
import Button from "../../components/Button";

import YogaIcon from "../../assets/icons/yoga.png";
import WeightliftingIcon from "../../assets/icons/weightlifting.png";
import BodybuildingIcon from "../../assets/icons/bodybuilding.png";
import WeightLossingIcon from "../../assets/icons/weight_lossing.png";

function Home() {
  return (
    <>
      <Heading />
      <ForBAndG />
      <Features />
    </>
  );
}

function Heading() {
  return (
    <div className={Styles.headingMain}>
      <div className={Styles.headingBox}>
        <h3 className={Styles.headingSubHeading}>Build up your</h3>
        <h1 className={Styles.headingHeading}>Body shape</h1>
        <p className={Styles.headingDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button>Join us</Button>
      </div>
    </div>
  );
}

function ForBAndG() {
  return (
    <div className={Styles.forMain}>
      <Card className={Styles.forGirls}>
        <h1 className={Styles.forHeading}>For Girls</h1>
        <p className={Styles.forDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button>Join us</Button>
      </Card>
      <Card className={Styles.forBoys}>
        <h1 className={Styles.forHeading}>For Boys</h1>
        <p className={Styles.forDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button>Join us</Button>
      </Card>
    </div>
  );

  function Card({ children, className }) {
    return <div className={`${Styles.forCard} ${className}`}>{children}</div>;
  }
}

function Features() {
  const featuresList = [
    {
      name: "Yoga",
      icon: YogaIcon,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Weightlifting",
      icon: WeightliftingIcon,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Bodybuilding",
      icon: BodybuildingIcon,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Weight Lossing",
      icon: WeightLossingIcon,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className={Styles.feauresMain}>
      <h1 className={Styles.featuresHeading}>Our Features</h1>
      <p className={Styles.feauresDesc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <br />
      <div className={Styles.featuresContainer}>
        {featuresList.map((feature) => (
          <Feature
            name={feature.name}
            icon={feature.icon}
            desc={feature.desc}
            key={feature.name}
          />
        ))}
      </div>
    </div>
  );

  function Feature({ name, icon, desc }) {
    return (
      <div className={Styles.featureMain}>
        <div className={Styles.featureContainer}>
          <img className={Styles.featureIcon} src={icon} alt={name} />
          <h2 className={Styles.featureName}>{name}</h2>
        </div>
        <p className={Styles.featureDesc}>{desc}</p>
      </div>
    );
  }
}

export default Home;

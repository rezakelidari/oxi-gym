import React from "react";
import Styles from "./Pricing.module.css";
import Button from "../../components/Button";

function Pricing() {
  const priceList = [
    {
      title: "Begginer",
      price: 25,
      features: ["Trainer Advice", "Locker"],
    },
    {
      title: "Expert",
      price: 35,
      features: ["Trainer Advice", "Locker + Bathroom", "Personal trainer"],
    },
    {
      title: "Professional",
      price: 45,
      features: [
        "Trainer Advice",
        "Locker + Bathroom",
        "Personal trainer",
        "Individual specific diet",
      ],
    },
  ];

  return (
    <div className={Styles.pricingMain}>
      <h1 className={Styles.pricingHeader}>Pricing:</h1>
      <p className={Styles.pricingDesc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <br />
      <div className={Styles.pricingList}>
        {priceList.map((price) => (
          <Price
            title={price.title}
            price={price.price}
            features={price.features}
          />
        ))}
      </div>
    </div>
  );
}

function Price({ title, price, features }) {
  return (
    <div className={Styles.priceMain}>
      <h3 className={Styles.priceName}>{title}</h3>
      <h3 className={Styles.priceValue}>${price}/m</h3>
      <ul className={Styles.priceFeatures}>
        {features.map((feature) => (
          <li className={Styles.featureMain}>{feature}</li>
        ))}
      </ul>
      <Button>Join us</Button>
    </div>
  );
}

export default Pricing;

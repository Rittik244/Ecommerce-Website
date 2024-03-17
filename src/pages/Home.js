import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FeatureProducts from "../components/FeatureProducts";

const Home = () => {
  document.title = "Home | Dream Designers";

  const data = {
    name: "Customized Printed Tees",
  };

  return (
    <>
      <Hero myData={data} />
      <FeatureProducts />
      <Services />
    </>
  );
};

export default Home;

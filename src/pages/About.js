import Hero from "../components/Hero";

const About = () => {
  document.title = "About - EcomSite";

  const data = {
    name: "Dream Designers",
  };

  return (
    <div>
      <Hero myData={data} />
    </div>
  );
};

export default About;

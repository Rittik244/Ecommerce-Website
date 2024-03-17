import Hero from "../components/Hero";

const About = () => {
  document.title = "About | Dream Designers";

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

import React from "react";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import LastSection from "../components/LastSection";

const Home = (): JSX.Element => {
  return (
    <div className="home-container">
      <Hero />
      <Profile />
      <Skills />
      <Projects />
      <LastSection />
    </div>
  );
};

export default Home;

import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/hero.css";

const Hero = (): JSX.Element => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const header = document.querySelector("header") as HTMLElement | null;
    const headerHeight = header ? header.offsetHeight : 0;

    if (section) {
      window.scrollTo({
        top: section.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  const handleGoProjects = () => {
    if (window.location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => scrollToSection("projects"), 100);
    } else {
      scrollToSection("projects");
    }
  };

  return (
    <section id="top" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">なければ、作る</h1>
        <p className="hero-subtitle">
          ピアノ調律師からエンジニアへ。42Tokyoで制限された環境の中、
          自作関数で環境を構築してきた経験を通して「ゼロから組み立てる力」を身につけました。
        </p>
        <p className="hero-subtitle">
          現在はC/C++を軸にしながら、ReactやPythonなどの扱いやすい言語も取り入れつつ、
          フルスタックエンジニアとして実践力を磨いています。
        </p>

        <button type="button" className="hero-button" onClick={handleGoProjects}>
          プロジェクトを見る
        </button>
      </div>
    </section>
  );
};

export default Hero;


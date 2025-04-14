import React from 'react';
import '../styles/hero.css';

// ヒーローセクション
const Hero = (): JSX.Element => {
  return (
    <section id="top" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">なければ、作る</h1>
        <p className="hero-subtitle">
          ピアノ調律師からエンジニアへ。42Tokyoで制限された環境の中、
          自作関数で環境を構築してきた経験を通して「ゼロから組み立てる力」を身につけました。
        </p>
        <p className="hero-subtitle">
          現在はフルスタックエンジニアとして実践力を磨いています。
        </p>
        <a href="#projects" className="hero-button">プロジェクトを見る</a>
      </div>
    </section>
  );
};

export default Hero;
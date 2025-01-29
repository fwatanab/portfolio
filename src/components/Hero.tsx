import React from 'react';
import '../styles/hero.css';

// ヒーローセクション
const Hero = (): JSX.Element => {
  return (
    <section id="top" className="hero">
      <div className="hero-content">
        <h1>ようこそ！</h1>
        <p>ピアノ調律師からエンジニアへ。柔軟な発想と学習意欲で挑戦を続けています。</p>
        <a href="#projects" className="cta-button">プロジェクトを見る</a>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/header.css';

const Header = (): JSX.Element => {
  const navigate = useNavigate();

  // 指定されたセクションにスクロール
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // クリック時の処理
  const handleNavigation = (sectionId: string) => {
    if (window.location.pathname !== "/") {
      // Home に移動後、スクロール
      navigate("/", { replace: true });
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      // 直接スクロール
      scrollToSection(sectionId);
    }
  };

  return (
    <header>
      <h1>Portfolio</h1>
      <nav>
        <ul>
          <li><button onClick={() => handleNavigation("top")}>トップ</button></li>
          <li><button onClick={() => handleNavigation("skills")}>スキル</button></li>
          <li><button onClick={() => handleNavigation("projects")}>プロジェクト</button></li>
          <li><button onClick={() => handleNavigation("contact")}>お問い合わせ</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

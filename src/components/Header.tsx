import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/header.css';

const Header = (): JSX.Element => {
  const navigate = useNavigate();

  // 指定されたセクションにスクロール
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const header = document.querySelector('header') as HTMLElement;
    const headerHeight = header ? header.offsetHeight : 0;

    if (section) {
      window.scrollTo({
        top: section.offsetTop - headerHeight,
        behavior: 'smooth',
      });
    }
  };

  // Homeに戻ってからスクロール or そのままスクロール
  const handleNavigation = (sectionId: string) => {
    if (window.location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  // 左上「Portfolio」をクリックしたらトップへ
  const handleClickPortfolio = () => {
    handleNavigation("top");
  };

  // プロジェクト詳細ページへ移動（ルーティング）
  const goProject = (path: string) => {
    navigate(path);
  };

  return (
    <header>
      {/* h1自体をボタン的にクリック可能に */}
      <h1
        className="brand"
        onClick={handleClickPortfolio}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleClickPortfolio()}
      >
        Portfolio
      </h1>

      <nav>
        <ul>
          <li><button onClick={() => handleNavigation("top")}>トップ</button></li>
          <li><button onClick={() => handleNavigation("profile")}>プロフィール</button></li>
          <li><button onClick={() => handleNavigation("skills")}>スキル</button></li>

          {/* ドロップダウン付きのプロジェクト */}
          <li className="has-dropdown">
            <button onClick={() => handleNavigation("projects")}>プロジェクト</button>
            <ul className="dropdown" aria-label="プロジェクト一覧">
              <li><button onClick={() => goProject("/projects/chillow")}>Chillow</button></li>
              <li><button onClick={() => goProject("/projects/taskHub")}>TaskHub</button></li>
              <li><button onClick={() => goProject("/projects/flappyBird")}>flappyBird</button></li>
              <li><button onClick={() => goProject("/projects/inception")}>inception</button></li>
              <li><button onClick={() => goProject("/projects/cub3D")}>cub3d</button></li>
              <li><button onClick={() => goProject("/projects/minishell")}>minishell</button></li>
            </ul>
          </li>

          <li><button onClick={() => handleNavigation("last")}>最後に</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/projects.css';

const projects = [
  {
    name: "minishell",
    description: "C言語でBashを実装\nパイプ処理・リダイレクト対応",
    techStack: ["C"],
    link: "/projects/minishell",
    backgroundImage: "images/home/minishell-img.jpg"
  },
  {
    name: "cub3d",
    description: "レイトレーシング技術を用いた3Dエンジン\nWASD移動 & 視点操作可能",
    techStack: ["C", "MinilibX"],
    link: "/projects/cub3D",
    backgroundImage: "images/home/cub3d-img.png"
  },
  {
    name: "easyChat",
    description: "WebSocketを活用したリアルタイムチャット\nReact + Go + MySQL構成",
    techStack: ["React", "Go", "MySQL"],
    link: "/projects/easyChat",
    backgroundImage: "images/home/easychat-img.png"
  },
  {
    name: "inception",
    description: "Docker ComposeでWeb3層アーキテクチャを構築\nNginx + WordPress + MariaDB", techStack: ["Docker", "nginx", "MariaDB", "WordPress"],
    link: "/projects/inception",
    backgroundImage: "images/home/inception-img.png"
  },
  {
    name: "flappyBird",
    description: "Kivyで実装したFlappy Bird風ゲーム\nPython + Kivy構成",
    techStack: ["Python", "Kivy"],
    link: "/projects/flappyBird",
    backgroundImage: "images/home/flappybird-img.png"
//  },
//  {
//    name: "puyoGame",
//    description: "C++ & SDL2で開発したぷよぷよ風ゲーム\nDockerでGUI実行",
//    techStack: ["C++", "SDL2", "Docker"],
//    link: "/projects/puyoGame",
//    backgroundImage: "images/home/puyoGame-img.png"
  }
];

const Projects = (): JSX.Element => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  // ⬇ 自動スクロール用タイマー
  const autoplayRef = useRef<number | null>(null);
  const AUTOPLAY_MS = 5000;

  const startAutoplay = () => {
    // いったん止めてから開始（二重起動防止）
    if (autoplayRef.current !== null) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
    autoplayRef.current = window.setInterval(() => {
      setScrollIndex((prev) => (prev + 1 >= projects.length ? 0 : prev + 1));
    }, AUTOPLAY_MS);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current !== null) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay(); // クリーンアップ
  }, []);

  // 手動スクロール（クリック時に自動スクロールをリセット）
  const handleScroll = (direction: 'left' | 'right') => {
    setScrollIndex(prevIndex => {
      if (direction === 'left') {
        return prevIndex === 0 ? projects.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === projects.length - 1 ? 0 : prevIndex + 1;
      }
    });
    // ← 手動操作のたびにタイマーをリセット
    startAutoplay();
  };

  // 矢印キーでも同じ処理をする
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setScrollIndex(prev => (prev === 0 ? projects.length - 1 : prev - 1));
        startAutoplay(); // ← リセット
      }
      if (e.key === 'ArrowRight') {
        setScrollIndex(prev => (prev === projects.length - 1 ? 0 : prev + 1));
        startAutoplay(); // リセット
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []); // 依存なしでグローバル


  const currentProject = projects[scrollIndex];

  return (
    <section id="projects" className="projects">
      <h2>プロジェクト一覧</h2>
      <div className="scroll-container" ref={containerRef}>
        <div 
          className="project-display" 
          style={{ backgroundImage: `url(${currentProject.backgroundImage})` }}>
          <div className="project-item" onClick={() => navigate(currentProject.link)}>
            <h3>{currentProject.name}</h3>
            <p className="project-description">
              {currentProject.description.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <div className="tech-stack">
              {currentProject.techStack.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-buttons">
        <button className="scroll-left" onClick={() => handleScroll('left')}>&lt;</button>
        <button className="scroll-right" onClick={() => handleScroll('right')}>&gt;</button>
      </div>

      {/* インジケーター */}
      <div className="scroll-indicator">
        {projects.map((_, index) => (
          <span
            key={index}
            className={`indicator-dot ${scrollIndex === index ? 'active' : ''}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

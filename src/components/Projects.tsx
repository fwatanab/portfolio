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

//const Projects = (): JSX.Element => {
//  const navigate = useNavigate();
//  const containerRef = useRef<HTMLDivElement>(null);
//  const [scrollIndex, setScrollIndex] = useState(0);
//
//  useEffect(() => {
//    const container = containerRef.current;
//    if (!container) return;
//
//    // 自動スクロールのインターバル
//    const interval = setInterval(() => {
//      setScrollIndex(prevIndex => {
//        const nextIndex = prevIndex+ 1;
//        if (nextIndex >= projects.length) {
//          return 0;
//        }
//        return nextIndex;
//      });
//    }, 5000); // 5秒ごとにスクロール
//    return () => clearInterval(interval); // クリーンアップ
//  }, []);
//
//  const currentProject = projects[scrollIndex];
//
//  // 手動スクロールのための関数
//  const handleScroll = (direction: 'left' | 'right') => {
//    setScrollIndex(prevIndex => {
//      if (direction === 'left') {
//        return prevIndex === 0 ? projects.length - 1 : prevIndex - 1; // 0の時に左矢印が押されると最終に戻る
//      } else {
//        return prevIndex === projects.length - 1 ? 0 : prevIndex + 1; // 最後の時に右矢印が押されると1に戻る
//      }
//    });
//  };
//
//  return (
//    <section id="projects" className="projects">
//      <h2>プロジェクト一覧</h2>
//      <div className="project-display">
//        <div className="project-item" onClick={() => navigate(currentProject.link)}>
//          <h3>{currentProject.name}</h3>
//          <p className="project-description">
//            {currentProject.description.split("\n").map((line, i) => (
//              <React.Fragment key={i}>
//                {line}
//                <br />
//              </React.Fragment>
//            ))}
//          </p>
//          <div className="tech-stack">
//            {currentProject.techStack.map((tech, i) => (
//              <span key={i} className="tech-badge">{tech}</span>
//            ))}
//          </div>
//        </div>
//      </div>
//      <div className="scroll-buttons">
//        <button onClick={() => handleScroll('left')}>←</button>
//        <button onClick={() => handleScroll('right')}>→</button>
//      </div>
//    </section>
//  );
//};

const Projects = (): JSX.Element => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const currentProject = projects[scrollIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex(prevIndex => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= projects.length) {
          return 0;  // 末尾に達したら最初に戻る
        }
        return nextIndex;
      });
    }, 5000); // 5秒ごとにスクロール
    return () => clearInterval(interval); // クリーンアップ
  }, []);

  // 手動スクロールのための関数
  const handleScroll = (direction: 'left' | 'right') => {
    setScrollIndex(prevIndex => {
      if (direction === 'left') {
        return prevIndex === 0 ? projects.length - 1 : prevIndex - 1; // 0の時に左矢印が押されると最終に戻る
      } else {
        return prevIndex === projects.length - 1 ? 0 : prevIndex + 1; // 最後の時に右矢印が押されると1に戻る
      }
    });
  };

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
        <button className="scroll-left" onClick={() => handleScroll('left')}>←</button>
        <button className="scroll-right" onClick={() => handleScroll('right')}>→</button>
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

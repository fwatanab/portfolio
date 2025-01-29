import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/projects.css';

const projects = [
  {
    name: "minishell",
    description: "C言語でBashを実装\nパイプ処理・リダイレクト対応",
    techStack: ["C"],
    link: "/projects/minishell"
  },
  {
    name: "cub3D",
    description: "レイトレーシング技術を用いた3Dエンジン\nWASD移動 & 視点操作可能",
    techStack: ["C", "MinilibX"],
    link: "/projects/cub3D"
  },
  {
    name: "easyChat",
    description: "WebSocketを活用したリアルタイムチャット\nReact + Go + MySQL構成",
    techStack: ["React", "Go", "MySQL"],
    link: "/projects/easyChat"
  },
  {
    name: "inception",
    description: "Docker ComposeでWeb3層アーキテクチャを構築\nNginx + WordPress + MariaDB",
    techStack: ["Docker", "nginx", "MariaDB", "WordPress"],
    link: "/projects/inception"
  },
  {
    name: "puyoGame",
    description: "C++ & SDL2で開発したぷよぷよ風ゲーム\nDockerでGUI実行",
    techStack: ["C++", "SDL2", "Docker"],
    link: "/projects/puyoGame"
  }
];

const Projects = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="projects">
      <h2>プロジェクト一覧</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-item"
            onClick={() => navigate(project.link)}
          >
            <h3>{project.name}</h3>
            {/* \n を <br /> に変換して改行を有効に */}
            <p className="project-description">
              {project.description.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <div className="tech-stack">
              {project.techStack.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

import React, { useState } from 'react';
import '../styles/skills.css';

// スキルセット（カテゴリーごとに整理）
const skills = [
  {
    category: "言語・技術スタック",
    items: [
      { name: "C", level: 70, description: "2つのプロジェクトで使用。OSの基礎知識も理解" },
      { name: "C++", level: 60, description: "ゲーム開発（puyoGame）で使用。SDL2を利用" },
      { name: "Docker", level: 60, description: "Web3層アーキテクチャ（inception）を構築" },
      { name: "MySQL", level: 50, description: "DB設計・運用（easyChat）で使用。基本的なクエリは理解" },
      { name: "React", level: 40, description: "フロントエンド開発（easyChat）で使用。調べながら実装可能" },
      { name: "JavaScript / TypeScript", level: 40, description: "React開発に使用。基本的な構文を理解" },
      { name: "HTML / CSS", level: 50, description: "Reactを扱う上で必要なため使用経験あり" },
      { name: "Go", level: 40, description: "バックエンド開発（easyChat）で使用。調べながら実装可能" },
    ],
  },
  {
    category: "ツール・開発環境",
    items: [
      { name: "Git", level: 80, description: "全てのプロジェクトで使用。GitHub運用経験あり" },
      { name: "Vim", level: 70, description: "ほぼ全てのコードをVimで実装" },
      { name: "VSCode", level: 60, description: "ReactやTypeScriptの開発で使用" },
      { name: "Linux / Unix ターミナル", level: 70, description: "CLI操作に慣れており、スクリプト作成経験あり" },
    ],
  },
  {
    category: "知識・経験",
    items: [
      { name: "アルゴリズム・データ構造", level: 60, description: "基本的なアルゴリズムとデータ構造を理解" },
      { name: "OSの基礎知識", level: 50, description: "プロセス管理・シグナルなどの基礎理解あり" },
      { name: "コンテナ技術（Docker Compose）", level: 60, description: "コンテナの設定・運用経験あり" },
      { name: "ネットワーク / Web（WebSocket）", level: 50, description: "リアルタイム通信の実装経験あり" },
      { name: "ゲーム開発（SDL2）", level: 50, description: "C++でのGUIゲーム開発経験あり" },
    ],
  },
  {
    category: "その他",
    items: [
      { name: "実務経験", level: 0, description: "未経験エンジニア" },
      { name: "チーム開発経験", level: 40, description: "42Tokyoの課題でペアプログラミング経験あり" },
      { name: "OSSコントリビューション", level: 0, description: "未経験" },
    ],
  },
];

const Skills = (): JSX.Element => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="skills">
      <h2>スキルセット</h2>
      <p className="skill-info">
        スキル評価基準は <a href="/skills/evaluation">こちら</a>
      </p>
      {skills.map((skillSet, index) => (
        <div key={index} className="skill-category">
          <h3>{skillSet.category}</h3>
          <div className="skill-list">
            {skillSet.items.map((skill, i) => (
              <div
                key={i}
                className={`skill-card ${activeSkill === skill.name ? 'active' : ''}`}
                onClick={() => setActiveSkill(activeSkill === skill.name ? null : skill.name)}
              >
                <div className="skill-header">
                  <span>{skill.name}</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" data-level={skill.level} style={{ width: `${skill.level}%` }}></div>
                </div>
                {activeSkill === skill.name && <p className="skill-description">{skill.description}</p>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;

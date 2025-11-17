import React, { useState } from 'react';
import '../styles/skills.css';

// スキルセット（カテゴリーごとに整理）
const skills = [
  {
    category: "言語・技術スタック",
    items: [
      { name: "C", level: 75, description: "42Tokyoで学習の中心として使用。ライブラリを制限された環境でシェルや3D描画エンジンなどを開発。" },
      { name: "C++", level: 65, description: "Cから発展して学習。SDL2を用いたGUIゲーム開発でオブジェクト指向を実践的に経験。" },
      { name: "React / TypeScript", level: 70, description: "ChillowやTaskHubのフロント全体をReact + TypeScriptで構築。Tailwindや状態管理(Recoil)まで含めて自力で設計・実装。" },
      { name: "Next.js & NextAuth", level: 60, description: "TaskHubでPages Router, NextAuth, API Routes, AppLayoutを組み合わせたフルスタック構成を実装。Prisma Adapter連携も経験。" },
      { name: "Go", level: 65, description: "Chillow / EasyChatでWebSocket Hub, REST API, GORMによるDB連携を担当。モデレーションやJWT Cookie認証を含むバックエンドを実装。" },
      { name: "Docker / Compose", level: 65, description: "Chillowでは複数サービスをDocker Compose + Makefileで起動。環境変数やストレージ切り替えまで自動化。" },
      { name: "MySQL", level: 60, description: "Chillowの本番想定でMySQL 8 + GORMを活用。スキーマ設計、マイグレーション、添付データの保全まで対応。" },
      { name: "PostgreSQL / Prisma", level: 55, description: "TaskHubでNeon(PostgreSQL)とPrisma 6を使い、migrate・型生成・API連携を実践。Next.jsのAPI Routesへ安全に組み込み。" },
      { name: "Python", level: 45, description: "ゲーム開発や補助スクリプト作成を通じて活用。扱いやすさとデータ処理・GUI開発への応用を学習中。" },
    ],
  },
  {
    category: "ツール・開発環境",
    items: [
      { name: "Git", level: 80, description: "全てのプロジェクトでGitHubベースで運用。共同での運用経験あり。" },
      { name: "Vim", level: 70, description: "ほぼ全てのコードをVimで実装" },
      { name: "VSCode", level: 60, description: "ReactやTypeScriptの開発で使用" },
      { name: "Linux / Unix ターミナル", level: 70, description: "VimやMakefileを活用したUNIX環境での開発に精通。CLI操作が日常的。" },
    ],
  },
];

const Skills = (): JSX.Element => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [showGuideline, setShowGuideline] = useState(false);

  return (
    <section id="skills" className="skills">
      <h2>スキルセット</h2>
      <div className="skill-guideline-container">
        <button
          className="guideline-toggle"
          onClick={() => setShowGuideline(!showGuideline)}
        >
          {showGuideline ? "評価基準を隠す" : "評価基準を表示"}
        </button>

        {showGuideline && (
          <div className="skill-guideline">
            <table>
              <thead>
                <tr>
                  <th>レベル</th>
                  <th>評価名</th>
                  <th>説明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>80〜100</td>
                  <td>実務相当レベル</td>
                  <td>要件定義から設計・実装・レビューまでを自走できるレベル。</td>
                </tr>
                <tr>
                  <td>60〜79</td>
                  <td>実装可能レベル</td>
                  <td>基本構文・ライブラリに習熟し、一通りの機能を自力で実装できる。</td>
                </tr>
                <tr>
                  <td>40〜59</td>
                  <td>基礎理解レベル</td>
                  <td>文法や構造の基本を理解し、調べながらであれば実装できる。</td>
                </tr>
                <tr>
                  <td>20〜39</td>
                  <td>入門・初学レベル</td>
                  <td>簡単な処理やチュートリアル経験あり。継続学習中。</td>
                </tr>
                <tr>
                  <td>0〜19</td>
                  <td>未経験・非使用</td>
                  <td>知識のみ、または未使用。今後の習得対象。</td>
                </tr>
              </tbody>
            </table>
            <p className="guideline-note">
              ※あくまで自己評価に基づいた目安であり、今後の学習や経験によって変化します。
            </p>
          </div>
        )}
      </div>
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

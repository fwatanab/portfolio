import React from "react";
import "../styles/profile.css";

const Profile = (): JSX.Element => {
  return (
    <section id="profile" className="profile-container">
      <div className="profile">
        <div className="profile-header">
          <img className="profile-avatar" src="./images/home/profile-icon-img.png" alt="fwatanab" />
          <div className="profile-info">
            <h1 className="profile-name">fwatanab</h1>
            <h2 className="profile-position">ITエンジニア</h2>
          </div>
        </div>

        <div className="profile-description">
          <p className="profile-text">
            元々、楽器に携わる仕事をしており、ピアノ調律師としての経験を積んだ後、IT分野に転職しました。
            42TokyoでC言語から学び、さらにC++に発展させる中で、<strong>低レイヤーの理解</strong>や
            <strong>オブジェクト指向の本質的な概念</strong>を身につけました。
          </p>
          <p className="profile-text">
            自己主導型の学習環境で、制限されたライブラリの中で必要な機能をすべて自作する経験を通じて、
            問題解決能力と「なければ作る」というアプローチを養いました。
          </p>
          <p className="profile-text">
            現在は、ReactやTypeScriptなどのモダンな技術を使用し、フロントエンド開発にも力を入れています。
            柔軟で本質的なアプローチで技術を探求し続けています。
          </p>

          <p className="profile-text">
            代表的な成果物には、C言語で作成したBash風シェル「minishell」や、3D探索ゲーム「cub3D」などがあります。
            また、GoとReactを用いたリアルタイムチャットアプリ「easyChat」など、バックエンドとフロントエンド両方を学びながら取り組んでいます。
          </p>
        </div>

        <a className="github-link" href="https://github.com/fwatanab" target="_blank" rel="noopener noreferrer">
          GitHub リポジトリを見る
        </a>
      </div>
    </section>
  );
};

export default Profile;
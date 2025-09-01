import React from "react";
import "../styles/profile.css";

const Profile = (): JSX.Element => {
  return (
    <section id="profile" className="profile-container">
      <div className="profile">
        <div className="profile-header">
          <img className="profile-avatar" src="/portfolio/images/home/profile-icon-img.png" alt="fwatanab" />
          <div className="profile-info">
            <h1 className="profile-name">fwatanab <span className="realname">(本名: 渡邉楓太)</span></h1>
            <h2 className="profile-position">ITエンジニア</h2>
          </div>
        </div>

        <div className="profile-description">
          <p className="profile-text">
            元々、ピアノ調律師技能士として楽器に携わる仕事をしておりましたが、IT分野に強い興味を惹かれ転職することを決意しました。
            <a href="https://42tokyo.jp/" target="_blank" rel="noopener noreferrer">
              42Tokyo
            </a>
            でC言語から学び、さらにC++に発展させる中で、<strong>低レイヤーの理解</strong>や
            <strong>オブジェクト指向の本質的な概念</strong>を身につけました。
          </p>
          <p className="profile-text">
            自己主導型の学習環境で、制限されたライブラリの中で必要な機能をすべて自作する経験を通じて、
            問題解決能力と「なければ作る」というアプローチを養いました。
          </p>
          <p className="profile-text">
            現在は、ReactやTypeScriptを中心にフロントエンド開発を行うだけでなく、Goを用いたAPI設計やデータベース連携など、本格的なアプリケーション開発にも取り組んでいます。
            柔軟かつ本質的なアプローチで、幅広い領域の技術を探求し続けています。
          </p>

          <p className="profile-text">
            成果物としては、C言語で作成したBash風シェル「minishell」や、3D探索ゲーム「cub3D」に加え、GoとReactによるリアルタイムチャットアプリ「easyChat」、Docker Composeを活用してWeb3層アーキテクチャを構築した「Inception」、さらにPythonとKivyで実装したゲーム「Flappy Bird」などがあります。
            フロントエンドからバックエンド、インフラ構築、ゲーム開発まで、多様な分野で経験を積んでいます。
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

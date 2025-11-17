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
            現在はReactやTypeScriptでのUI実装に留まらず、Goを使ったAPI設計・DB連携、Docker Composeによる開発環境の整備まで含めた
            <strong>Webアプリケーション開発</strong>
            に注力しています。特に
            <strong>Chillow</strong>
            と
            <strong>TaskHub</strong>
            では、OAuth認証やリアルタイム通信、データモデルの設計を一貫して担い、
            「プロダクトを自走して作り切る力」を実務さながらの要件で磨いてきました。
            今後もWebアプリ開発の現場で、チームの課題をプロダクトで解決する役割を担いたいと考えています。
          </p>

          <p className="profile-text">
            これらのフルスタックプロジェクトを軸にしつつ、
            <strong>minishell</strong> や
            <strong>cub3D</strong>、
            <strong>Inception</strong>、
            <strong>Flappy Bird</strong>
            といった低レイヤー・3D・インフラ・ゲーム領域の経験も積み重ねています。
            フロントエンドからバックエンド、インフラまでを横断し、必要な技術を自ら学び取り入れる姿勢を大切にしています。
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

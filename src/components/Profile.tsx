import React from "react";
import "../styles/profile.css";

const Profile = (): JSX.Element => {
  return (
	<section className="profile-container">
      <h2 className="section-title">About Me</h2>
      <p className="profile-text">
        はじめまして、<strong>fwatanab</strong>です。
        元は楽器に携わる仕事に就いており、高校卒業後はピアノ調律の専門的な教育機関で1年間学びました。
        その後、ヤマハ特約店にてピアノ調律師として勤務し、多くの現場経験を積みました。
      </p>
      <p className="profile-text">
        論理的なものづくりに興味を持ち、IT分野に強く惹かれたことから、42Tokyoに入学。
        ここで私はC言語を基礎から徹底的に学び、さらにC++へと発展させる中で、
        <strong>低レイヤーの理解</strong>や<strong>オブジェクト指向の本質的な概念</strong>を身につけました。
      </p>
      <p className="profile-text">
        42Tokyoは講師が存在しない自己主導型の学習環境で、課題に挑戦しながら仲間と切磋琢磨し、
        自ら調べ、考え、実装する力を育む場所です。
        特に、<strong>制限された標準ライブラリのもとで必要な機能をすべて自作</strong>する経験を通じて、
        「なければ作る」というスタンスと深い問題理解力を養いました。
      </p>
      <p className="profile-text">
        コアカリキュラムの最終課題直前まで多くのプロジェクトに取り組み、実践力を高めました。
        CやC++での開発に加え、<strong>GitやVimを用いたUNIX環境での操作</strong>にも精通しています。
      </p>
      <p className="profile-text">
        現在はフロントエンド開発にも力を入れており、ReactやTypeScriptなどのモダンな技術を用いた
        Webアプリケーションの制作に取り組んでいます。
        プログラムの根本を理解したエンジニアとして、柔軟かつ本質的なアプローチで
        技術を探求し続けていきます。
      </p>
	  <p className="profile-text">
        これまでに取り組んだ代表的な成果物としては、C言語で作成したBash風シェル「minishell」、
        レイキャスティングを用いた3D探索ゲーム「cub3D」、Dockerを活用したWebインフラ構築「inception」などがあります。
        いずれも42Tokyoの課題として設計・実装されたものであり、低レイヤーからインフラまでを幅広くカバーしています。
        また、個人開発としてはGoとReactを用いたリアルタイムチャットアプリ「easyChat」、
        C++とSDL2で構築中の「PuyoGame」などにも取り組み、バックエンドとフロントエンドの両側面からスキルを磨いています。
      </p>
    </section>
  );
};

export default Profile;
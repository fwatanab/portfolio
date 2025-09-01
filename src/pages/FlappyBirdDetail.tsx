import React from "react";
import "../styles/flappybird-detail.css";

const FlappyBirdDetail = (): JSX.Element => {
  return (
    <div className="flappybird-detail">
      <h2 className="project-name">Flappy Bird</h2>

      {/* プロジェクト全体カード */}
      <div className="flappybird-card">
        {/* プロジェクト概要 */}
        <section className="summary">
          <h2>プロジェクト概要 :</h2>
          <p className="message">
            Kivy を用いて実装した Flappy Bird 風のシンプルなゲームです。
            メニュー画面からゲームを開始し、スペースキーやクリックで鳥を操作してパイプの間を通り抜けます。
          </p>
        </section>

        {/* 開発環境 */}
        <section className="environment">
          <h2>開発環境と要件 :</h2>
          <ul>
            <li className="message">言語: Python</li>
            <li className="message">フレームワーク: Kivy</li>
            <li className="message">対応OS: macOS / Windows / Linux</li>
          </ul>
        </section>

        {/* 実装機能 */}
        <section className="function">
          <h2>実装機能 :</h2>
          <table>
            <thead>
              <tr>
                <th>機能</th>
                <th>説明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>メニュー画面</td>
                <td className="message">ゲーム開始前のメニュー画面を表示</td>
              </tr>
              <tr>
                <td>鳥の操作</td>
                <td className="message">スペースキーまたはマウスクリックで鳥を羽ばたかせる</td>
              </tr>
              <tr>
                <td>パイプ生成・衝突判定</td>
                <td className="message">パイプの生成と衝突判定を実装</td>
              </tr>
              <tr>
                <td>スコア管理</td>
                <td className="message">パイプを通り抜けるたびにスコアが加算される</td>
              </tr>
              <tr>
                <td>ゲームオーバー判定</td>
                <td className="message">画面外やパイプに衝突した場合にゲームオーバーになる</td>
              </tr>
              <tr>
                <td>描画調整</td>
                <td className="message">ウィンドウサイズに応じて描画を調整（モバイルはフルスクリーン）</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* デモ画像 */}
        <section className="demonstration">
          <h2>デモンストレーション :</h2>
          <h3>サンプル映像</h3>
          <div className="message">
            <video
              src="/portfolio/images/flappybird/sample.mp4"
              controls
              width="100%"
              style={{ borderRadius: "5px" }}
            >
              お使いのブラウザは動画再生に対応していません。
            </video>
          </div>
        </section>

        {/* GitHubリンク */}
        <section className="github">
          <h2>GitHub</h2>
          <a
            href="https://github.com/fwatanab/flappy_bird"
            target="_blank"
            rel="noreferrer"
          >
            ソースコードを見る
          </a>
        </section>
      </div>
    </div>
  );
};

export default FlappyBirdDetail;


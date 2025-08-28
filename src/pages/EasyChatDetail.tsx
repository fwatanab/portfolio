import React from "react";
import "../styles/easychat-detail.css";

const EasyChatDetail = (): JSX.Element => {
  return (
    <div className="easychat-detail">
      <h2 className="project-name">EasyChat</h2>

      {/* プロジェクト全体カード */}
      <div className="easychat-card">
        {/* プロジェクト概要 */}
        <section className="summary">
          <h2>プロジェクト概要 :</h2>
          <p className="message">
            EasyChatは、WebSocketを使用してリアルタイムでメッセージをやり取りできる
            シンプルなチャットアプリです。Web系の言語・技術を初めて触れる中で、
            フロントエンド（React）、バックエンド（Go）、データベース（MySQL）の関係を学ぶために作成しました。
            実用性よりも「形になるものを作る」ことを重視しています。
          </p>
        </section>

        {/* 開発環境 */}
        <section className="environment">
          <h2>開発環境と要件 :</h2>
          <ul>
            <li className="message">言語: React (JSX), CSS, Go, SQL</li>
            <li className="message">フレームワーク/ライブラリ: React, WebSocket, MySQL</li>
            <li className="message">対応OS: macOS</li>
          </ul>
        </section>

        {/* 機能一覧 */}
        <section className="function">
          <h2>詳細機能一覧 :</h2>
          <table>
            <thead>
              <tr>
                <th>機能</th>
                <th>説明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ユーザー名でログイン</td>
                <td className="message">任意のユーザー名でチャットに参加可能</td>
              </tr>
              <tr>
                <td>リアルタイムチャット</td>
                <td className="message">WebSocketを用いて即座にメッセージが表示される</td>
              </tr>
              <tr>
                <td>メッセージ表示</td>
                <td className="message">ユーザー名、メッセージ、送信時刻を表示</td>
              </tr>
              <tr>
                <td>メッセージ削除</td>
                <td className="message">7日経過したメッセージは自動でDBから削除</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* デモ画像 */}
        <section className="demonstration">
          <h2>デモンストレーション :</h2>
          <h3>ログイン画面</h3>
          <div className="message">
            <img src={`${process.env.PUBLIC_URL}/images/easychat/login.png`} alt="ログイン画面" />
          </div>
          <h3>チャット画面</h3>
          <div className="message">
            <img src={`${process.env.PUBLIC_URL}/images/easychat/chat.png`} alt="チャット画面" />
          </div>
          <h3>サンプル映像</h3>
          <div className="message">
            <video
              src={`${process.env.PUBLIC_URL}/images/easychat/sample.mp4`}
              controls
              width="100%"
              style={{ borderRadius: "5px" }}
            >
              お使いのブラウザは動画再生に対応していません。
            </video>
          </div>
        </section>

        {/* 学び */}
        <section className="comment">
          <h2>学んだこと :</h2>
          <p className="message">
            フロントエンド、バックエンド、データベースを組み合わせて
            「形になるもの」を作る経験を通じて、Webアプリケーションの基礎構造を理解しました。
            特にReactのコンポーネント構造、GoでのWebSocketサーバー、
            MySQLによるデータ保存の関係性を学ぶことができました。
          </p>
          <p className="message">
            ユーザー管理やセキュリティは未実装ですが、初めてWeb系技術に触れた学習プロジェクトとして
            価値のある経験となりました。
          </p>
        </section>

        {/* GitHubリンク */}
        <section className="github">
          <h2>GitHub</h2>
          <a
            href="https://github.com/fwatanab/EasyChat"
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

export default EasyChatDetail;


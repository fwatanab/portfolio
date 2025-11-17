import React from "react";
import "../styles/chillow-detail.css";

const ChillowDetail = (): JSX.Element => {
  return (
    <div className="chillow-detail">
      <h2 className="project-name">Chillow</h2>

      <div className="chillow">
        <section className="summary">
          <h2>プロジェクト概要</h2>
          <p>
            Chillowは、Google OAuthでのログインからWebSocketベースのチャット、
            管理者によるモデレーションまでをワンストップで体験できるリアルタイムWebアプリです。
            JWT Cookieで認証を維持しつつ、友達検索・申請・承認フロー、既読/タイピング表示、
            添付アップロードのワークロードをGo製バックエンドとReactフロントでさばいています。
          </p>
        </section>

        <section className="architecture">
          <h2>アーキテクチャ / 技術スタック</h2>
          <div className="architecture-grid">
            <article>
              <h3>フロントエンド</h3>
              <ul>
                <li>React + TypeScript / Vite</li>
                <li>Recoilでグローバル状態管理</li>
                <li>Tailwind CSSでテーマ切り替え</li>
              </ul>
            </article>
            <article>
              <h3>バックエンド</h3>
              <ul>
                <li>Go 1.24 + Gin + GORM</li>
                <li>REST API と WebSocket Hub を同居</li>
                <li>JWT Cookie認証を共通化</li>
              </ul>
            </article>
            <article>
              <h3>データ / ストレージ</h3>
              <ul>
                <li>MySQL 8.x (Docker Compose)</li>
                <li>添付はローカル or S3互換バケット</li>
                <li>レポート証跡の保全処理を実装</li>
              </ul>
            </article>
            <article>
              <h3>開発補助</h3>
              <ul>
                <li>Docker Compose + Makefile</li>
                <li>eslint / prettier / gofmt</li>
                <li>docs/配下で要件とAPI仕様を共有</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="features">
          <h2>主要機能</h2>
          <ul>
            <li>Google OAuth → JWT Cookieによるセッション管理</li>
            <li>フレンドコード検索から申請/承認/拒否フロー</li>
            <li>テキスト・画像・スタンプ・絵文字の投稿、編集、削除</li>
            <li>既読 / タイピング / オンラインステータスのリアルタイム同期</li>
            <li>ルームごとの添付ストレージ選択（ローカル or S3互換）</li>
            <li>プロフィール編集、ログアウト、アカウント削除</li>
          </ul>
        </section>

        <section className="realtime">
          <h2>リアルタイム / レジリエンス</h2>
          <div className="realtime-grid">
            <article>
              <h3>WebSocket Hub</h3>
              <p>
                Cookie認証を通過したクライアントだけを接続し、ルーム単位でイベントを配信。
                `room:revoked` などのシステムイベントも共通化しています。
              </p>
            </article>
            <article>
              <h3>友達解除の即時反映</h3>
              <p>
                フレンド解除と同時に対象ルームのメッセージ・既読・添付をパージし、
                WebSocket経由で双方のUIからチャットを閉じます。
              </p>
            </article>
            <article>
              <h3>通報 / BAN ワークフロー</h3>
              <p>
                ユーザーはメッセージを通報、管理者はAPI/UIからBAN/解除。
                BAN時はREST/WebSocket双方のアクセスを遮断し、アクティブセッションも強制切断します。
              </p>
            </article>
          </div>
        </section>

        <section className="environment">
          <h2>環境変数サンプル</h2>
          <p>Docker Composeでもローカル実行でも同じ`.env`を共有し、既存の環境変数は上書きしません。</p>
          <pre>
            <code>
{`FRONTEND_URL=http://localhost:5173
BACKEND_URL=http://localhost:8080
GOOGLE_CLIENT_ID=xxx.apps.googleusercontent.com
DB_HOST=127.0.0.1
ATTACHMENT_STORAGE=local # or s3
ADMIN_EMAILS=ops@example.com`}
            </code>
          </pre>
        </section>

        <section className="workflow">
          <h2>開発ワークフロー</h2>
          <div className="workflow-steps">
            <article>
              <h3>Docker + Make</h3>
              <pre>
                <code>
{`make up        # docker compose up -d
make dev       # ログを眺めつつ起動
make down      # 片付け
make reset-db  # MySQLを再初期化`}
                </code>
              </pre>
            </article>
            <article>
              <h3>手動実行</h3>
              <ul>
                <li>frontend: npm install → npm run dev</li>
                <li>backend: go mod tidy → go run main.go</li>
                <li>gofmt / eslintで差分を自動整形</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="moderation">
          <h2>管理者機能</h2>
          <ul>
            <li>`ADMIN_EMAILS`に登録されたGoogleアカウントのみadminロール化</li>
            <li>通報一覧(`/admin/events`)をSSEで配信し、UIはリロード不要</li>
            <li>REST APIでBAN/解除、レポート解決、BANリスト取得を提供</li>
            <li>モデレーション操作時に対象ユーザーのWebSocketを即座に切断</li>
          </ul>
        </section>

        <section className="github">
          <h2>GitHub</h2>
          <a
            href="https://github.com/fwatanab/Chillow"
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

export default ChillowDetail;


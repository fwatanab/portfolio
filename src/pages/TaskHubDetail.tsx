import React from "react";
import "../styles/taskhub-detail.css";

const taskhubDesktopShots = [
  {
    src: "/portfolio/images/taskhub/signin.png",
    caption: "サインイン",
    description: "Googleアカウントを選択するNextAuth画面。",
  },
  {
    src: "/portfolio/images/taskhub/create.png",
    caption: "タスク作成フォーム",
    description: "タイトル必須＋詳細は任意。バリデーションと即時反映を実装。",
  },
  {
    src: "/portfolio/images/taskhub/home.png",
    caption: "ヒーロー / ダッシュボード",
    description: "チームの進捗状況とアクションボタンをまとめたトップ画面。",
  },
  {
    src: "/portfolio/images/taskhub/detail.png",
    caption: "モーダル詳細",
    description: "全文をスクロールして確認し、そのまま編集・保存が可能。",
  },
];

const taskhubMobileShots = [
  {
    src: "/portfolio/images/taskhub/signin_mobile.png",
    caption: "モバイルサインイン",
    description: "NextAuthのGoogleログインを1カラムに最適化。",
  },
  {
    src: "/portfolio/images/taskhub/home_mobile.png",
    caption: "モバイルTaskBoard",
    description: "カードを縦並びにし、親指操作でCRUDを完結。",
  },
];

const TaskHubDetail = (): JSX.Element => {
  return (
    <div className="taskhub-detail">
      <h2 className="project-name">TaskHub</h2>

      <div className="taskhub">
        <section className="summary">
          <h2>プロジェクト概要</h2>
          <p>
            TaskHubはNext.js 16 (Pages Router) と NextAuth、Prisma、Neon(PostgreSQL)で構成した
            タスク管理アプリです。Googleアカウントでログインしたユーザーごとにタスクを完全分離し、
            REST API経由で作成・取得・更新・削除をすべて完結させています。
            Tailwind CSSでUIを素早く組み立て、カード表示＋モーダル詳細の2段構成で長文タスクも読みやすくしました。
          </p>
        </section>

        <section className="screens">
          <h2>デスクトップ UI ギャラリー</h2>
          <div className={`screenshot-grid ${taskhubDesktopShots.length === 4 ? "two-column" : ""}`}>
            {taskhubDesktopShots.map((shot) => (
              <figure key={shot.src} className="screenshot">
                <img src={shot.src} alt={shot.caption} loading="lazy" />
                <figcaption>
                  <strong>{shot.caption}</strong>
                  <span>{shot.description}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="screens mobile">
          <h2>モバイル UI ギャラリー</h2>
          <div className={`screenshot-grid ${taskhubMobileShots.length === 4 ? "two-column" : ""}`}>
            {taskhubMobileShots.map((shot) => (
              <figure key={shot.src} className="screenshot">
                <img src={shot.src} alt={shot.caption} loading="lazy" />
                <figcaption>
                  <strong>{shot.caption}</strong>
                  <span>{shot.description}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="stack">
          <h2>技術スタック</h2>
          <div className="stack-grid">
            <article>
              <h3>アプリケーション</h3>
              <ul>
                <li>Next.js 16 / React 19 / TypeScript</li>
                <li>Pages RouterでAPI Routesと画面を両立</li>
                <li>Tailwind CSS v4でダーク/ライトの調整</li>
              </ul>
            </article>
            <article>
              <h3>認証</h3>
              <ul>
                <li>NextAuth (Google Provider + PrismaAdapter)</li>
                <li>常にアカウント選択を出すため `prompt: "select_account"` を付与</li>
                <li>セッション情報をhooksにも型安全に共有</li>
              </ul>
            </article>
            <article>
              <h3>データ層</h3>
              <ul>
                <li>Prisma 6 + Neon (PostgreSQL)</li>
                <li>`useTasks`フックでCRUDロジックを集約</li>
                <li>タイトル必須 / 詳細は任意でnull許容</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="features">
          <h2>主な機能</h2>
          <ul>
            <li>Googleログイン / ログアウト（NextAuth）</li>
            <li>ユーザー自身のタスクのみを返すREST API（GET/POST/PATCH/DELETE）</li>
            <li>TaskBoard：タスク作成フォーム + リスト + モーダル詳細</li>
            <li>長いタイトル/詳細をカード内で省略表示し、クリックで全文をモーダル表示</li>
            <li>モーダル上でそのまま編集 → 保存/削除まで完結</li>
          </ul>
        </section>

        <section className="api">
          <h2>API / 設計のポイント</h2>
          <div className="api-grid">
            <article>
              <h3>型安全なCRUD</h3>
              <p>
                `src/hooks/useTasks.ts` に fetch ロジックと型を集約。
                フロントからは `useTasks` のメソッドを呼ぶだけで状態更新とAPI通信を両立できます。
              </p>
            </article>
            <article>
              <h3>NextAuth保護</h3>
              <p>
                API Routesは`getServerSession`で常時ガードし、未ログイン時は401を返却。
                認証済みなら`session.user.id`を使ってPrismaクエリをスコープします。
              </p>
            </article>
            <article>
              <h3>Neon/PostgreSQL</h3>
              <p>
                Neonを使うことでクラウドDBを即座に準備。
                Prisma SchemaにはcreatedAt/updatedAt、ロールバック用のmigrate履歴も揃えています。
              </p>
            </article>
          </div>
        </section>

        <section className="environment">
          <h2>必要な環境変数</h2>
          <p>Next.js側で `.env` を管理し、Prisma/NextAuthの両方で利用します。</p>
          <pre>
            <code>
{`DATABASE_URL=postgresql://...
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=ランダム文字列
GOOGLE_CLIENT_ID=xxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=yyyy`}
            </code>
          </pre>
        </section>

        <section className="ui">
          <h2>UI / DXの工夫</h2>
          <ul>
            <li>カード + モーダル構成で大量のタスクでも視線移動が少ない</li>
            <li>Tailwindプリセットで余白・配色を統一、保守コストを削減</li>
            <li>`npm run build` で `prisma generate` → `next build` の順に実行し、Vercelでもビルド一発</li>
          </ul>
        </section>

        <section className="demo">
          <h2>公開中のデモ</h2>
          <p>
            TaskHubはVercelにデプロイ済みで、以下のURLから最新状態を確認できます。
          </p>
          <a
            className="demo-link"
            href="https://task-hub-ivory.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            https://task-hub-ivory.vercel.app/
          </a>
        </section>

        <section className="github">
          <h2>GitHub</h2>
          <a
            href="https://github.com/fwatanab/TaskHub"
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

export default TaskHubDetail;

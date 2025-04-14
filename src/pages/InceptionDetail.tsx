import React from "react";
import "../styles/inception-detail.css"

const InceptionDetail = (): JSX.Element => {
  return (
    <div className="inception-detail">
      <h2 className="project-name">Inception</h2>
      <div className="inception">
        <section className="summary">
          <h2>📦 プロジェクト概要</h2>
          <p>
            Inceptionは、Dockerを活用して仮想インフラを構築する42Tokyoのシステム管理課題です。
            Webサーバー、データベース、CMSを含む複数のサービスを個別のコンテナで構築し、セキュリティやネットワーク設計、データ永続化の基礎を学びました。
          </p>
        </section>

        <section className="environment">
          <h2>🧰 開発環境と構成</h2>
          <ul>
            <li>使用技術: Docker / Docker Compose</li>
            <li>ベースOS: Alpine / Debian</li>
            <li>CMS: WordPress + PHP-FPM</li>
            <li>Webサーバー: NGINX（TLSv1.2/1.3対応）</li>
            <li>データベース: MariaDB</li>
            <li>永続化: ボリュームによるデータ保持</li>
          </ul> </section>

        <section className="function">
          <h2>⚙️ 実装した主な機能</h2>
          <table>
            <thead>
              <tr>
                <th>機能</th>
                <th>説明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HTTPS通信</td>
                <td>NGINXでTLSv1.2/1.3対応のHTTPSサーバーを構築</td>
              </tr>
              <tr>
                <td>WordPress構築</td>
                <td>PHP-FPMと組み合わせてWordPress環境を構築</td>
              </tr>
              <tr>
                <td>MariaDB</td>
                <td>WordPressと連携するDBを構築。ユーザー設定も含む</td>
              </tr>
              <tr>
                <td>環境変数管理</td>
                <td>.envファイルを使用し、機密情報を安全に管理</td>
              </tr>
              <tr>
                <td>Dockerネットワーク</td>
                <td>サービス間通信を構成する独自ネットワーク設計</td>
              </tr>
              <tr>
                <td>自動再起動</td>
                <td>コンテナがクラッシュしても自動で再起動</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="usage">
          <h2>🧪 使い方</h2>
          <p>
            このプロジェクトは仮想マシン上で構築・実行されることを前提としています。
            下記手順に従うことで、ローカルで仮想インフラを構築・起動できます。
          </p>
          <ol>
            <li>
              <strong>環境準備：</strong> VirtualBox などで Linux 仮想マシンを用意し、
              Docker / docker-compose をインストールします。
            </li>
            <li>
              <strong>.envファイルを作成：</strong> 機密情報（パスワードやドメイン名）を
              <code>.env</code> ファイルに記述します。
            </li>
            <li>
              <strong>ビルドと起動：</strong> プロジェクトルートで下記コマンドを実行します。
              <pre>
                {`make build`}
              </pre>
            </li>
            <li>
              <strong>アクセス：</strong> <code>https://[ドメイン名]</code> にブラウザでアクセスすると、
              NGINX → WordPress サイトに到達します。
            </li>
          </ol>
          <p>
            TLS（HTTPS）の設定、環境変数による秘密情報管理、クラッシュ時の自動再起動などが
            自動的に適用される構成になっています。
          </p>
        </section>

        <section className="comment">
          <h2>🚀 最後に</h2>
          <p>
            Inceptionを通して、インフラ構成の自動化やセキュリティ設定、
            ボリュームによる永続化、ネットワーク構成など、実践的なDevOpsスキルを身につけることができました。
            Dockerfileの作成や、entrypointの設計なども含めて、システム構築の基礎を体系的に学べた経験となりました。
          </p>
        </section>

        <section className="github">
          <h2>GitHub</h2>
          <a
            href="https://github.com/fwatanab/inception"
            target="_blank"
            rel="noreferrer"
          >
            リポジトリを見る
          </a>
        </section>
      </div>
    </div>
  );
};

export default InceptionDetail;
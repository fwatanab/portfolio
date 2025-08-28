import React from "react";
import '../styles/cub3d-detail.css';

const Cub3DDetail = (): JSX.Element => {
  return (
    <div className="cub3d-detail">
      <h2 className="project-name">Cub3D</h2>
      <div className="cub3d">
        <section className="summary">
          <h2>プロジェクト概要</h2>
          <p>
            「cub3D」は、伝説的なゲーム「Wolfenstein 3D」にインスパイアされたプロジェクトです。
            C言語とMiniLibXを用いて、リアルタイムで迷路内を探索できる3Dレイキャスターを実装しました。
          </p>
        </section>

        <section className="goal">
          <h2>目的</h2>
          <ul>
            <li>低レイヤーでの描画処理の理解</li>
            <li>線形代数・三角関数を用いた視点変換</li>
            <li>Cによる構造化・責務分離</li>
          </ul>
        </section>

        <section className="tech">
          <h2>使用技術と開発環境</h2>
          <ul>
            <li>言語: C</li>
            <li>描画: MiniLibX</li>
            <li>ツール: Makefile, libft（自作ライブラリ）</li>
            <li>アルゴリズム: レイキャスティング、DDA法</li>
            <li>OS: macOS / Linux</li>
          </ul>
        </section>

        <section className="features">
          <h2>実装機能</h2>
          <ul>
            <li>.cub形式のマップ読み込み</li>
            <li>視点に基づく3D空間の動的描画</li>
            <li>テクスチャの壁面ごとの割り当て</li>
            <li>床・天井のカラー設定</li>
            <li>キー入力による移動（WASD）と視点回転（← →）</li>
            <li>ESCキー、×ボタンで終了</li>
          </ul>
        </section>

        <section className="highlights">
          <h2>工夫した点</h2>
          <ul>
            <li>マップのバリデーションとエラー処理設計</li>
            <li>描画速度と精度のバランス</li>
            <li>責務を明確にした関数分割</li>
            <li>開発環境を考慮したMakefile構成</li>
          </ul>
        </section>

        <section className="gallery">
          <h2>サンプル映像</h2>
          <div className="message">
            <video
              src={`${process.env.PUBLIC_URL}/images/cub3d/sample.mp4`}
              controls
              width="100%"
              style={{ borderRadius: "5px" }}
            >
              お使いのブラウザは動画再生に対応していません。
            </video>
          </div>
        </section>

        <section className="learning">
          <h2>課題と学び</h2>
          <p>
            このプロジェクトを通じて、リアルタイムレンダリングの難しさと面白さを体感しました。
            計算量の最適化、エラーハンドリング、メモリ管理の重要性を学びました。
          </p>
        </section>

        <section className="github">
          <h2>GitHub</h2>
          <a
            href="https://github.com/fwatanab/cub3d"
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

export default Cub3DDetail;

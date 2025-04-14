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
            <li>C言語の熟練度向上</li>
            <li>アルゴリズム設計力の強化</li>
            <li>数学を駆使したグラフィックス処理</li>
            <li>リアルタイム描画の実装</li>
          </ul>
        </section>

        <section className="tech">
          <h2>使用技術と開発環境</h2>
          <ul>
            <li>言語: C</li>
            <li>グラフィックス: MiniLibX</li>
            <li>ライブラリ: math.h, libft (自作のライブラリ)</li>
            <li>技術: レイキャスティングによる3D描画</li>
            <li>コンパイラ: CC</li>
          </ul>
        </section>

        <section className="features">
          <h2>実装機能</h2>
          <ul>
            <li>.cubファイルのマップ読み込み</li>
            <li>視点からの3D描画</li>
            <li>壁の方角ごとに異なるテクスチャ</li>
            <li>床・天井のカラー設定</li>
            <li>W/A/S/Dで移動、矢印キーで視点回転</li>
            <li>ESCキー・ウィンドウ×ボタンで終了</li>
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
          <h2>サンプル画像</h2>
          <img src="/images/cub3d/demo1.png" alt="cub3D 基本描画" />
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
            リポジトリを見る
          </a>
        </section>
      </div>
    </div>
  );
};

export default Cub3DDetail;

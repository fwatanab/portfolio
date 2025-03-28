import React from "react";
import '../styles/cub3DDetail.css';

const Cub3DDetail = (): JSX.Element => {
  return (
    <div className="cub3d-detail">
      <h1>cub3D</h1>
      <section className="summary">
        <h2>概要</h2>
        <p>C言語とMiniLibXライブラリを用いて、1992年の「Wolfenstein 3D」をオマージュしたレイトレーシング型3D迷路ゲームを制作しました。視点移動・回転、壁テクスチャ描画、床・天井の色表現など、グラフィック描画処理とイベント制御を学習しました。</p>
      </section>

      <section className="objectives">
        <h2>目的</h2>
        <ul>
          <li>C言語の実践的な使用</li>
          <li>MiniLibXによるグラフィック描画</li>
          <li>レイキャスティング技術の理解と実装</li>
          <li>マップファイルのパース設計</li>
          <li>イベント駆動型プログラミングの習得</li>
        </ul>
      </section>

      <section className="tech">
        <h2>使用技術</h2>
        <ul>
          <li>C言語</li>
          <li>MiniLibX</li>
          <li>Ray-Casting</li>
          <li>Makefile</li>
          <li>Libft</li>
          <li>Git/GitHub</li>
        </ul>
      </section>

      <section className="features">
        <h2>主な機能</h2>
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

      <section className="structure">
        <h2>ディレクトリ構成</h2>
        <pre>
cub3D/
├── inc/
├── libft/
├── map/
├── src/
├── textures/
├── Makefile
└── README.md
        </pre>
      </section>

      <section className="reflection">
        <h2>所感・学び</h2>
        <p>レイキャスティングという3D描画技術を通じて、C言語におけるアルゴリズムと数学処理の重要性を実感しました。ゲーム開発を通じて、グラフィック処理の面白さと可能性を学ぶことができました。</p>
      </section>

      <section className="repo">
        <h2>GitHub リポジトリ</h2>
        <a href="https://github.com/fwatanab/cub3D">リポジトリを見る</a>
      </section>
    </div>
  );
};

export default Cub3DDetail;

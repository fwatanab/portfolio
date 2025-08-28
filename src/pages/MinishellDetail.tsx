import React from "react";
import "../styles/minishell-detail.css";

const MinishellDetail = (): JSX.Element => {
  return (
    <div className="minishell-detail">
      <h2 className="project-name">minishell</h2>
      <div className="minishell">
        <section className="summary">
          <h2>プロジェクト概要</h2>
          <p>
            minishellは、Bash風の独自シェルをC言語で実装した42Tokyoの課題です。
            低レイヤーの理解を深め、POSIX準拠のシェル機能を再現しています。
            環境変数の展開、リダイレクト、パイプ処理、条件演算子など、基本的なシェルの動作をサポートします。
          </p>
        </section>

        <section className="environment">
          <h2>開発環境と要件</h2>
          <ul>
            <li>言語: C</li>
            <li>ライブラリ: GNU readline</li>
            <li>対応OS: macOS</li>
          </ul>
        </section>

        <section className="function">
          <h2>詳細機能一覧</h2>
            <table>
              <thead>
                <tr>
                  <th>機能</th>
                  <th>説明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>基本コマンド実行</td>
                  <td>ls, pwd, echo などの標準コマンドを実行可能</td>
                </tr>
                <tr>
                    <td>環境変数の展開</td>
                    <td>$VAR, $? で環境変数や終了ステータスを取得</td>
                </tr>
                <tr>
                    <td>リダイレクト</td>
                    <td>&gt;, &gt;&gt;, &lt; の対応</td>
                </tr>
                <tr>
                    <td>パイプ処理</td>
                    <td>| で複数コマンドを連携</td>
                </tr>
                <tr>
                    <td>ビルトインコマンド</td>
                    <td>cd, export, unset, env, exit など</td>
                </tr>
                <tr>
                    <td>シグナルハンドリング</td>
                    <td>Ctrl+C, Ctrl+D, Ctrl+\ の対応</td>
                </tr>
              </tbody>
            </table>
        </section>

        <section className="demonstration">
          <h2>デモンストレーション</h2>
          <h3>minishellの起動</h3>
            <img src="/images/minishell/bunner.png" alt="minishellの起動" />
          <h3>基本コマンドの実行</h3>
            <img src="/images/minishell/normal_command.png" alt="基本コマンドの実行" />
          <h3>環境変数の展開</h3>
            <img src="/images/minishell/export.png" alt="環境変数の展開" />
          <h3>リダイレクト</h3>
            <img src="/images/minishell/redirect.png" alt="リダイレクト" />
          <h3>パイプ処理</h3>
            <img src="/images/minishell/pipe.png" alt="パイプ処理" />
          <h3>ビルトインコマンド</h3>
            <img src="/images/minishell/built-in.png" alt="ビルトインコマンド" />
          <h3>シグナルハンドリング</h3>
            <img src="/images/minishell/signal.png" alt="シグナルハンドリング" />
        </section>

        <section className="comment">
          <h2>最後に</h2>
          <p>
            POSIXシステムコールを活用したシェルプログラムをC言語で実装し、UNIXシステムの基礎理解とプロセス制御の知識を深めました。
            グループプロジェクトを通じて、開発と調整スキルも向上しました。
          </p>
        </section>

        <section className="github">
          <h2>GitHub</h2>
            <a
              href="https://github.com/fwatanab/minishell"
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

export default MinishellDetail;

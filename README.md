# Real Estate LP (real-estate-lp)

このプロジェクトは、`619ef1a29d9f1c36d4f3815c.webp` のワイヤーフレームを基に作成されたランディングページ（LP）です。

## ✨ 主な機能

*   レスポンシブデザイン対応のLP
*   コンポーネントベースのアーキテクチャ
*   アンカーリンクによるスムーズなページ内ナビゲーション

## 🛠️ 使用技術

*   **フレームワーク**: [Next.js](https://nextjs.org/) 14 (App Router)
*   **言語**: [TypeScript](https://www.typescriptlang.org/)
*   **UIライブラリ**: [React Bootstrap](https://react-bootstrap.github.io/)
*   **スタイリング**: CSS Modules, [Bootstrap 5](https://getbootstrap.com/)
*   **開発環境**: [Docker](https://www.docker.com/), Docker Compose
*   **デプロイ**: [Vercel](https://vercel.com/)

## 🚀 ローカルでの起動方法

このプロジェクトはDockerを使用して簡単にローカル環境を構築で��ます。

1.  **Docker Desktopのインストール**
    まだインストールしていない場合は、[Docker Desktop](https://www.docker.com/products/docker-desktop/) をインストールしてください。

2.  **リポジトリのクローン**
    ```bash
    git clone git@github.com:strictly-es/gemini-cli-lp-test-2.git
    cd gemini-cli-lp-test-2
    ```

3.  **コンテナのビルドと起動**
    プロジェクトのルートディレクトリで以下のコマンドを実行します。
    ```bash
    docker-compose up --build -d
    ```

4.  **ブラウザで確認**
    ブラウザで http://localhost:3001 にアクセスすると、開発中のLPが表示されます。

    *注意: ポート `3001` が既に使用されている場合は、`docker-compose.yml` ファイルの `ports` 設定を ` "3002:3000" ` のように変更してください。*

## 🌐 デプロイ

このプロジェクトはVercelにデプロイされています。
`main` ブランチにプッシュすると、Vercelが自動的に変更を検知し、ビルドとデプロイを実行します。

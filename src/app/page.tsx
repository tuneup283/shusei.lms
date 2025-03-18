import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm text-black">
        <h1 className="text-4xl font-bold mb-8 text-center">オンライン学習システム</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">コースの概要</h2>
          <p className="mb-4 text-black">
            このコースでは、重要な基礎知識から実践的なスキルまでを学ぶことができます。
            3つの動画コンテンツを通じて、段階的に知識を深めていきましょう。
          </p>
          <p className="mb-4 text-black">
            すべての動画を視聴した後、詳細な説明ページで内容を復習し、
            最終的にコース申し込みへと進むことができます。
          </p>
          <div className="mt-6">
            <Link 
              href="/lesson/1"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              コースを始める
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold mb-2">ステップ1: コース説明</h3>
            <p className="text-black">コースの目的と学習方法について理解します</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold mb-2">ステップ2: 動画視聴</h3>
            <p className="text-black">3つの重要な動画コンテンツを視聴します</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold mb-2">ステップ3: 申し込み</h3>
            <p className="text-black">コースの詳細を確認し、申し込みを行います</p>
          </div>
        </div>
      </div>
    </main>
  );
}

import Link from 'next/link';

export default function Lesson1() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-4xl w-full text-black">
        <h1 className="text-3xl font-bold mb-6 text-center">コース説明</h1>
        
        <div className="bg-gray-500 rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">このコースについて</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">学習目標</h3>
            <p className="mb-4">
              このコースでは、以下の重要な3つのテーマについて学びます：
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>基礎知識の習得と理解</li>
              <li>実践的なスキルの開発</li>
              <li>応用力の強化と実践</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">学習方法</h3>
            <p className="mb-4">
              このコースは3つの動画コンテンツで構成されています。すべての動画を順番に視聴し、
              内容をしっかりと理解することが重要です。最終的には詳細説明を確認した後に、
              申し込みフォームへ進むことができます。
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">対象者</h3>
            <p>
              このコースは初心者から中級者を対象としています。基礎から応用までを
              段階的に学ぶことができるので、幅広いレベルの方にお勧めです。
            </p>
          </div>
        </div>
        
        <div className="flex justify-between">
          <Link 
            href="/"
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          >
            戻る
          </Link>
          <Link 
            href="/video/1"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            次へ：動画コンテンツ1
          </Link>
        </div>
      </div>
    </main>
  );
} 
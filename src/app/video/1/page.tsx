import Link from 'next/link';

export default function Video1() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-4xl w-full text-black">
        <h1 className="text-3xl font-bold mb-6 text-center">動画コンテンツ 1</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">基礎知識の習得</h2>
          
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <div className="w-full bg-gray-200 rounded-lg flex items-center justify-center h-[300px]">
              <p className="text-xl text-gray-500">動画プレーヤーがここに表示されます</p>
              {/* ここに実際の動画埋め込みコードを追加 */}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">この動画のポイント</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>基本概念の理解</li>
              <li>重要な用語の説明</li>
              <li>基礎理論の解説</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">視聴時の注意点</h3>
            <p>
              この動画は基礎知識を扱っています。後の動画で応用的な内容を理解するためにも、
              しっかりと視聴して理解を深めてください。
            </p>
          </div>
        </div>
        
        <div className="flex justify-between">
          <Link 
            href="/lesson/1"
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          >
            戻る
          </Link>
          <Link 
            href="/video/2"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            次へ：動画コンテンツ2
          </Link>
        </div>
      </div>
    </main>
  );
} 
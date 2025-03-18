import Link from 'next/link';

export default function Lesson2() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-4xl w-full text-black">
        <h1 className="text-3xl font-bold mb-6 text-center">最終説明</h1>
        
        <div className="bg-gray-500 rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">コースの総まとめ</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">学習内容の振り返り</h3>
            <p className="mb-4">
              これまでの3つの動画で学んだ内容を振り返りましょう：
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>基礎知識の習得と理解</li>
              <li>実践的なスキルの開発</li>
              <li>応用力の強化と実践</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">次のステップ</h3>
            <p className="mb-4">
              コースの内容を理解できた方は、次のステップとしてコースの申し込みに進むことができます。
              申し込み後は、より詳細な学習リソースやサポートにアクセスできるようになります。
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">サポート体制</h3>
            <p>
              コース受講中は、専門の講師陣がサポートいたします。質問や不明点がございましたら、
              いつでもお気軽にお問い合わせください。
            </p>
          </div>
        </div>
        
        <div className="flex justify-between">
          <Link 
            href="/video/3"
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          >
            戻る
          </Link>
          <Link 
            href="/apply"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            次へ：コース申し込み
          </Link>
        </div>
      </div>
    </main>
  );
} 
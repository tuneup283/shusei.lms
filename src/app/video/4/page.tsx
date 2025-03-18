import Link from 'next/link';

export default function Video4() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">解説動画</h1>
      
      <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-8">
        <p className="text-lg mb-4">
          続いて、守成クラブ神戸ベイサイドへのご入会にあたって知っておくべきルールや決まり事、
          また入会金や会費などについて分かりやすく解説します。安心してご参加いただけるよう、
          ぜひ事前にご確認ください。
        </p>
      </div>
      
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        <iframe
          src="https://www.youtube.com/embed/o-rhqmOeTUM"
          title="解説動画"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
        />
      </div>

      <div className="flex justify-between mt-8">
        <Link 
          href="/video/3"
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          前へ：創始者の思い
        </Link>
        <Link 
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          トップページへ戻る
        </Link>
      </div>
    </div>
  );
} 
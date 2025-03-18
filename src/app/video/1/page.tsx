import Link from 'next/link';

export default function Video1() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">オープニング動画</h1>
      
      <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-8">
        <p className="text-lg mb-4">
          まずは、守成クラブ神戸ベイサイドがどんな場所で、どのように経営者同士の交流やビジネス拡大に役立つのか、
          その魅力を動画でわかりやすくご紹介します。ぜひご覧ください！
        </p>
      </div>
      
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        <iframe
          src="https://www.youtube.com/embed/YKJoBoYgMU8"
          title="オープニング動画"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
        />
      </div>

      <div className="flex justify-between mt-8">
        <Link 
          href="/"
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          前へ：トップページ
        </Link>
        <Link 
          href="/video/2"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          次へ：守成クラブ
        </Link>
      </div>
    </div>
  );
} 
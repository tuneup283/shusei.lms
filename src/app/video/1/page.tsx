import Link from 'next/link';

export default function Video1() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-blue-800 relative">
          <span className="inline-block border-b-4 border-blue-500 pb-2">オープニング動画</span>
        </h1>
        
        <div className="bg-white rounded-lg shadow-xl p-6 mb-8 border-l-4 border-blue-500">
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-base sm:text-lg leading-relaxed">
              まずは、<span className="font-semibold text-blue-800">守成クラブ神戸ベイサイド</span>がどんな場所で、どのように経営者同士の交流やビジネス拡大に役立つのか、
              その<span className="bg-yellow-100 px-1 font-semibold">魅力を動画でわかりやすく</span>ご紹介します。ぜひご覧ください！
            </p>
          </div>
        </div>
        
        <div className="mb-8">
          <div className="relative w-full rounded-xl overflow-hidden shadow-2xl border-4 border-white" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/YKJoBoYgMU8"
              title="オープニング動画"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
          <div className="mt-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300 shadow-md">
            <p className="text-sm text-blue-800 flex flex-col sm:flex-row items-start sm:items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mb-2 sm:mb-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>動画が再生できない場合は、<a href="https://youtu.be/YKJoBoYgMU8" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">YouTubeで直接視聴</a>することもできます。</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <Link 
            href="/"
            className="w-full sm:w-auto text-center flex items-center justify-center bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            前へ：トップページ
          </Link>
          <Link 
            href="/video/2"
            className="w-full sm:w-auto text-center flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            次へ：守成クラブ
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 
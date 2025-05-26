import Link from 'next/link';

export default function Lesson1() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-blue-800 border-b-4 border-blue-500 pb-2 inline-block mx-auto">守成クラブについて</h1>
        
        <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 text-blue-800 border-b-2 border-blue-400 pb-2">守成クラブの特徴</h2>
          
          <div className="mb-6 sm:mb-8 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-blue-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              経営者のための交流会
            </h3>
            <p className="text-base mb-3 sm:mb-4 pl-2 border-l-2 border-blue-300">
              守成クラブは以下のような特徴を持つ経営者のための交流会です：
            </p>
            <ul className="list-none pl-2 mb-3 sm:mb-4 space-y-2 sm:space-y-3">
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">1</span>
                <span><span className="font-semibold text-blue-800">中小企業の経営者同士</span>の信頼関係構築</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">2</span>
                <span><span className="font-semibold text-blue-800">ビジネスチャンスの創出</span>と情報交換</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">3</span>
                <span><span className="font-semibold text-blue-800">全国ネットワーク</span>による事業拡大</span>
              </li>
            </ul>
          </div>
          
          <div className="mb-6 sm:mb-8 bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              活動内容
            </h3>
            <p className="text-base mb-3 sm:mb-4 pl-3 border-l-2 border-gray-300">
              守成クラブでは<span className="bg-yellow-100 px-1 font-semibold">毎月の例会</span>を通じて、会員同士の商談や情報交換が行われています。
              <span className="bg-yellow-100 px-1 font-semibold">新規会員の紹介</span>や商品・サービスのPRタイム、グループ討議などを通じて
              ビジネスパートナーとの出会いを促進します。
            </p>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-yellow-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              参加対象
            </h3>
            <p className="text-base pl-3 border-l-2 border-yellow-300">
              守成クラブは<span className="font-semibold text-yellow-800">経営者や事業主</span>、またはそれに準ずる方を対象としています。
              業種や企業規模を問わず、<span className="bg-yellow-100 px-1 font-semibold">ビジネス拡大と信頼関係の構築</span>に
              意欲的な方々の参加をお待ちしています。
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <Link 
            href="/"
            className="w-full sm:w-auto text-center bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 sm:px-8 rounded-lg transition-colors shadow-md flex items-center justify-center"
          >
            <span className="mr-2">←</span>
            <span>戻る</span>
          </Link>
          <Link 
            href="/video/1"
            className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 sm:px-8 rounded-lg transition-colors shadow-md flex items-center justify-center"
          >
            <span>次へ</span>
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 
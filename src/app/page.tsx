import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-16 lg:p-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl w-full text-black">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 text-center text-blue-800 relative">
          <span className="inline-block border-b-4 border-blue-500 pb-2">守成クラブ神戸ベイサイド</span>
        </h1>
        
        <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 md:p-10 mb-6 sm:mb-8 md:mb-10 border-t-4 border-blue-500">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-800 flex items-center">
            <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </span>
            ようこそ、守成クラブ神戸ベイサイドへ！
          </h2>
          
          <div className="pl-4 border-l-4 border-blue-200 mb-6">
            <p className="text-base sm:text-lg mb-4 leading-relaxed">
              私たちは<span className="bg-yellow-100 px-1 font-semibold">「安心・信頼できる商売仲間づくり」</span>をテーマに、経営者や事業者同士が集まり、
              ビジネスの拡大と発展を支援するための交流会です。
            </p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-base sm:text-lg mb-4 leading-relaxed">
              <span className="font-semibold text-blue-800">毎月開催される例会</span>では、商談や交流の機会が豊富に用意されており、
              あなたのビジネスに新しい可能性が広がります。
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-base sm:text-lg leading-relaxed">
              <span className="font-semibold">2002年の設立以来</span>、全国で<span className="bg-yellow-100 px-1 font-semibold">約2万社の企業</span>が参加する組織に成長し、
              中小企業の経営者たちが互いに支え合い、共に成長する場となっています。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
          <div className="bg-blue-600 text-white rounded-lg shadow-xl p-6 sm:p-8 transform transition-transform hover:scale-105">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              クラブの特徴
            </h2>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center">
                <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                <span>安心・信頼できる商売仲間づくり</span>
              </li>
              <li className="flex items-center">
                <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                <span>毎月の例会での商談機会</span>
              </li>
              <li className="flex items-center">
                <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                <span>全国規模のネットワーク</span>
              </li>
              <li className="flex items-center">
                <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                <span>経営者同士の交流と学び</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-600 text-white rounded-lg shadow-xl p-6 sm:p-8 transform transition-transform hover:scale-105">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              参加のメリット
            </h2>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center">
                <span className="bg-white text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                <span>ビジネスチャンスの拡大</span>
              </li>
              <li className="flex items-center">
                <span className="bg-white text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                <span>経営ノウハウの共有</span>
              </li>
              <li className="flex items-center">
                <span className="bg-white text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                <span>人脈形成の機会</span>
              </li>
              <li className="flex items-center">
                <span className="bg-white text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                <span>相互支援の仕組み</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/video/1"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg sm:text-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              入会説明動画を見る
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}

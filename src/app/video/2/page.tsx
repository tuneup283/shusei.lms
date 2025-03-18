import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "守成クラブとは - 守成クラブ神戸ベイサイド",
  description: "守成クラブの特徴と魅力を詳しく紹介します。中小企業の経営者同士のネットワーク形成とビジネスチャンスの創出について。",
  openGraph: {
    title: "守成クラブとは - 守成クラブ神戸ベイサイド",
    description: "守成クラブの特徴と魅力を詳しく紹介します。中小企業の経営者同士のネットワーク形成とビジネスチャンスの創出について。",
  },
};

export default function Video2() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-blue-800 relative">
          <span className="inline-block border-b-4 border-blue-500 pb-2">守成クラブとは</span>
        </h1>
        
        <div className="mb-8">
          <div className="relative w-full rounded-xl overflow-hidden shadow-2xl border-4 border-white" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/ogNlrvYtFh4"
              title="守成クラブとは"
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
              <span>動画が再生できない場合は、<a href="https://youtu.be/ogNlrvYtFh4" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">YouTubeで直接視聴</a>することもできます。</span>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-6 mb-8 border-t-4 border-blue-500">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-blue-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            中小企業のネットワークとビジネス機会
          </h2>
          <ul className="space-y-3 pl-4 mb-6 text-base">
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">•</span>
              <span><span className="font-semibold text-blue-800">中小企業の経営者</span>たちが集まる会員制の守成クラブが存在し、全国から様々な企業が参加している。</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">•</span>
              <span>企業間での仕事の受発注が行われる場として<span className="bg-yellow-100 px-1 font-semibold">「仕事バンバプラザ」</span>とも呼ばれている。</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">•</span>
              <span>2002年に設立されたこの守成クラブは、全国で<span className="bg-yellow-100 px-1 font-semibold">約2万社が参加する組織</span>に成長している。</span>
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-blue-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            地方企業の共感とネットワーク形成
          </h2>
          <ul className="space-y-3 pl-4 mb-6 text-base">
            <li className="flex items-start">
              <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">•</span>
              <span>地方の中小企業は、<span className="font-semibold text-green-800">共感しやすい環境</span>でネットワークを構築しやすいとされている。</span>
            </li>
            <li className="flex items-start">
              <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">•</span>
              <span>中小企業は、事業の継続に対する不安を<span className="font-semibold text-green-800">共有できる場</span>があることが魅力的である。</span>
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-blue-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            守成クラブの魅力とビジネスの迅速性
          </h2>
          <ul className="space-y-3 pl-4 mb-6 text-base">
            <li className="flex items-start">
              <span className="bg-yellow-100 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">•</span>
              <span>守成クラブには<span className="font-semibold">多様な業種の経営者</span>が集まり、意思決定が迅速に行われるため、ビジネスの機会が広がる。</span>
            </li>
            <li className="flex items-start">
              <span className="bg-yellow-100 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">•</span>
              <span>地方の企業でも<span className="bg-yellow-100 px-1 font-semibold">全国的なビジネスの最前線</span>に立つことができるという誇りが感じられる。</span>
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-blue-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            目標と未来への展望
          </h2>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300">
            <ul className="space-y-3 pl-4 text-base">
              <li className="flex items-start">
                <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">★</span>
                <span>守成クラブは<span className="font-semibold text-blue-800">大きな目標</span>に向かって進んでおり、参加企業は将来的に成功を収めることを目指している。</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <Link 
            href="/video/1"
            className="w-full sm:w-auto text-center flex items-center justify-center bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            前へ：オープニング動画
          </Link>
          <Link 
            href="/video/3"
            className="w-full sm:w-auto text-center flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            次へ：創始者の思い
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 
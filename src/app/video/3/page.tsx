import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "例会の内容 - 守成クラブ神戸ベイサイド",
  description: "守成クラブの例会で行われる具体的な内容と、参加することで得られるメリットについて詳しく解説します。",
  openGraph: {
    title: "例会の内容 - 守成クラブ神戸ベイサイド",
    description: "守成クラブの例会で行われる具体的な内容と、参加することで得られるメリットについて詳しく解説します。",
  },
};

export default function Video3() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-blue-800 relative">
          <span className="inline-block border-b-4 border-blue-500 pb-2">創始者の思い</span>
        </h1>
        
        <div className="mb-8">
          <div className="relative w-full rounded-xl overflow-hidden shadow-2xl border-4 border-white" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/FIM_nfoRV-o"
              title="創始者の思い"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="mt-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300 shadow-md">
            <p className="text-sm text-blue-800 flex flex-col sm:flex-row items-start sm:items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mb-2 sm:mb-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>動画が再生できない場合は、<a href="https://youtu.be/FIM_nfoRV-o" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">YouTubeで直接視聴</a>することもできます。</span>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-6 mb-8 border-t-4 border-blue-500">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-blue-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            創始者と背景
          </h2>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <ul className="space-y-3 pl-4 text-base">
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">•</span>
                <span>守成クラブの創設者は、徒歩での日本一周を達成した札幌のカリスマ経営者である<span className="font-semibold text-blue-800">伊藤氏</span>であり、札幌ススキノの<span className="bg-yellow-100 px-1 font-semibold">日本商工振興会の会長</span>でもある。</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">•</span>
                <span>小さな会社が潰れてしまう現状を憂い、<span className="font-semibold text-blue-800">企業を守るための活動</span>を始めた。</span>
              </li>
            </ul>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-blue-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            中小企業の現状
          </h2>
          <div className="bg-red-50 p-4 rounded-lg mb-6 border-l-4 border-red-200">
            <ul className="space-y-3 pl-4 text-base">
              <li className="flex items-start">
                <span className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">•</span>
                <span>守成クラブは、新入社員や固定社員の給料を支払うことが難しい時代において、<span className="font-semibold text-red-800">中小企業が直面する厳しい状況</span>を反映している。</span>
              </li>
              <li className="flex items-start">
                <span className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">•</span>
                <span>中小企業は常に厳しい労働環境にあり、経営者は<span className="bg-yellow-100 px-1 font-semibold">団結して会社を守る必要</span>があると強調されている。</span>
              </li>
            </ul>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-blue-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            経営者の意識改革
          </h2>
          <div className="bg-green-50 p-4 rounded-lg mb-6 border-l-4 border-green-200">
            <ul className="space-y-3 pl-4 text-base">
              <li className="flex items-start">
                <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">•</span>
                <span><span className="font-semibold text-green-800">経営者のレベルを上げるための交流</span>が重要であり、商売繁盛の会としての役割が求められている。</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">•</span>
                <span>各社長は、自社が<span className="bg-yellow-100 px-1 font-semibold">「かけがえのない会社」</span>であることを認識し、絶対に潰してはいけないという意識を持つべきである。</span>
              </li>
            </ul>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-blue-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            商売の精神
          </h2>
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-200">
            <ul className="space-y-3 pl-4 text-base">
              <li className="flex items-start">
                <span className="bg-yellow-100 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">•</span>
                <span><span className="font-semibold text-yellow-800">「自分を甘くしない、自分に厳しく」</span>という姿勢が求められ、商売繁盛に向けて一生懸命に取り組むことが重要である。</span>
              </li>
              <li className="flex items-start">
                <span className="bg-yellow-100 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">•</span>
                <span>守成クラブは、<span className="bg-yellow-100 px-1 font-semibold">かけがえのない会社の社長たち</span>が集まる場であり、経営者同士の結束が商売の成功に繋がるとされている。</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <Link 
            href="/video/2"
            className="w-full sm:w-auto text-center flex items-center justify-center bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            前へ：守成クラブとは
          </Link>
          <Link 
            href="/video/4"
            className="w-full sm:w-auto text-center flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            次へ：決まりについて
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 
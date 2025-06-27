import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "入会のルールと決まり - 守成クラブ神戸ベイサイド",
  description: "守成クラブへの入会に関するルールと決まりについて詳しく説明します。参加条件や会費、例会の運営方法など。",
  openGraph: {
    title: "入会のルールと決まり - 守成クラブ神戸ベイサイド",
    description: "守成クラブへの入会に関するルールと決まりについて詳しく説明します。参加条件や会費、例会の運営方法など。",
  },
};

export default function Video4() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* ステップナビゲーション */}
        <nav className="flex justify-center mb-8">
          <ol className="grid grid-cols-3 gap-2 sm:flex sm:space-x-4 w-full max-w-md mx-auto">
            <li className="flex flex-col items-center sm:flex-row sm:items-center text-gray-400">
              <span className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center font-bold">1</span>
              <span className="ml-0 sm:ml-2 text-xs sm:text-base">トップページ</span>
            </li>
            <li className="flex flex-col items-center sm:flex-row sm:items-center text-gray-400">
              <svg className="w-5 h-5 mx-0 sm:mx-2 hidden sm:inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              <span className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center font-bold">2</span>
              <span className="ml-0 sm:ml-2 text-xs sm:text-base">動画1</span>
            </li>
            <li className="flex flex-col items-center sm:flex-row sm:items-center">
              <svg className="w-5 h-5 mx-0 sm:mx-2 hidden sm:inline text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              <span className="rounded-full bg-blue-600 text-white w-8 h-8 flex items-center justify-center font-bold border-2 border-blue-700">3</span>
              <span className="ml-0 sm:ml-2 font-semibold text-blue-700 text-xs sm:text-base">動画2</span>
            </li>
            <li className="flex flex-col items-center sm:flex-row sm:items-center text-gray-400">
              <svg className="w-5 h-5 mx-0 sm:mx-2 hidden sm:inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              <span className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center font-bold">4</span>
              <span className="ml-0 sm:ml-2 text-xs sm:text-base">まとめ</span>
            </li>
            <li className="flex flex-col items-center sm:flex-row sm:items-center text-gray-400">
              <svg className="w-5 h-5 mx-0 sm:mx-2 hidden sm:inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              <span className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center font-bold">5</span>
              <span className="ml-0 sm:ml-2 text-xs sm:text-base">ゲスト申し込み</span>
            </li>
          </ol>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-center text-blue-800 border-b-4 border-blue-500 pb-2 inline-block mx-auto">入会のルールと決まり</h1>
        
        <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 mb-4 sm:mb-8 border-l-4 border-blue-500">
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            <span className="font-semibold text-blue-800">守成クラブ神戸ベイサイド</span>へのご参加にあたって知っておくべきルールや決まり事、
            また<span className="bg-yellow-100 px-1 font-semibold">入会金や会費</span>などについて分かりやすく解説します。安心してご参加いただけるよう、
            ぜひ事前にご確認ください。
          </p>
        </div>

        <div className="relative w-full mb-4 sm:mb-8 rounded-xl overflow-hidden shadow-2xl border-4 border-white" style={{ paddingTop: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/o-rhqmOeTUM"
            title="入会のルールと決まり"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <Link
            href="/video/3"
            className="w-full sm:w-auto text-center bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 sm:px-8 rounded-lg transition-colors shadow-md"
          >
            <span className="flex items-center justify-center">
              <span className="mr-2">←</span>
              <span>前へ</span>
            </span>
          </Link>
          <Link
            href="/lesson/2"
            className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 sm:px-8 rounded-lg transition-colors shadow-md"
          >
            <span className="flex items-center justify-center">
              <span>次へ</span>
              <span className="ml-2">→</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
} 
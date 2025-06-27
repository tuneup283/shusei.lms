import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "守成クラブ神戸ベイサイド",
  description: "ゲスト申し込みフォーム",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-16 lg:p-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl w-full text-black">
        {/* ステップナビゲーション */}
        <nav className="flex justify-center mb-8">
          <ol className="grid grid-cols-3 gap-2 sm:flex sm:space-x-4 w-full max-w-md mx-auto">
            <li className="flex flex-col items-center sm:flex-row sm:items-center">
              <span className="rounded-full bg-blue-600 text-white w-8 h-8 flex items-center justify-center font-bold border-2 border-blue-700">1</span>
              <span className="ml-0 sm:ml-2 font-semibold text-blue-700 text-xs sm:text-base">トップページ</span>
            </li>
            <li className="flex flex-col items-center sm:flex-row sm:items-center text-gray-400">
              <svg className="w-5 h-5 mx-0 sm:mx-2 hidden sm:inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              <span className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center font-bold">2</span>
              <span className="ml-0 sm:ml-2 text-xs sm:text-base">動画1</span>
            </li>
            <li className="flex flex-col items-center sm:flex-row sm:items-center text-gray-400">
              <svg className="w-5 h-5 mx-0 sm:mx-2 hidden sm:inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              <span className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center font-bold">3</span>
              <span className="ml-0 sm:ml-2 text-xs sm:text-base">動画2</span>
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

        {/* サイトの目的セクション */}
        <section className="bg-white rounded-xl shadow-xl p-6 sm:p-8 mb-8 border-t-4 border-blue-500">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-center text-blue-800 tracking-tight drop-shadow-lg">
            <span className="inline-block border-b-4 border-blue-500 pb-2 bg-gradient-to-r from-blue-200 to-blue-50 rounded-lg px-2">守成クラブ<br></br>神戸ベイサイド</span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-blue-700 flex items-center justify-center">
            このサイトの目的
          </h2>
          <p className="text-base sm:text-lg mb-4 leading-relaxed text-center">
            このサイトは、<span className="font-semibold text-blue-800">ゲスト参加される方々に守成クラブについてご理解いただき、実際の例会にご参加いただきたい</span>という思いで作成しています。
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300 shadow-md mb-4">
            <p className="text-base sm:text-lg text-blue-800">
              お申し込みが完了するまでに、いくつかの動画コンテンツをご覧いただきます。<br />
              <span className="font-semibold">すべての動画をご覧いただくのに、おおよそ15分程度かかります。</span><br />
              お時間のあるときに、ぜひご視聴ください。
            </p>
          </div>
        </section>

        {/* オープニング動画セクション */}
        <section className="bg-white rounded-xl shadow-xl p-6 sm:p-8 mb-8 border-t-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-700 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            オープニング動画
          </h3>
          <div className="bg-white rounded-lg shadow p-4 mb-6 border-l-4 border-blue-300">
            <p className="text-base sm:text-lg leading-relaxed">
              まずは、<span className="font-semibold text-blue-800">守成クラブ神戸ベイサイド</span>がどのような場所で、どのように経営者同士の交流やビジネス拡大に役立つのか、
              その<span className="bg-yellow-100 px-1 font-semibold">魅力を動画でわかりやすく</span>ご紹介します。ぜひご覧ください。
            </p>
          </div>
          <div className="relative w-full rounded-xl overflow-hidden shadow-2xl border-4 border-white mb-4" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/8-KmEN1H9o8?si=HJ1i2pb4OkE97-7X"
              title="神戸ベイサイドオープニング動画"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
          <div className="mt-2 bg-blue-50 p-3 rounded-lg border-l-4 border-blue-300 shadow-md">
            <p className="text-sm text-blue-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>動画が再生できない場合は、<a href="https://youtu.be/8-KmEN1H9o8" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">YouTubeで直接視聴</a>することもできます。</span>
            </p>
          </div>
        </section>

        {/* 自分たちのマーケットセクション */}
        <section className="bg-yellow-50 rounded-xl shadow-lg p-6 sm:p-8 mb-8 border-l-4 border-yellow-400">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center text-yellow-800">
            <svg className="h-6 w-6 text-yellow-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>自分たちのマーケットは自分たちでつくる</span>
          </h2>
          <p className="text-base sm:text-lg mb-4 leading-relaxed">
            守成クラブは、信頼できる仲間同士でビジネスを広げ、支え合う場です。<br />
            会員同士の紹介で新たな出会いと商談が生まれ、安心してビジネスを展開できます。<br />
            <span className="font-semibold text-yellow-800">マルチ商法やネットワークビジネスは禁止されており、安心できる環境が守られています。</span><br />
            あなたも一緒に、信頼できる経営者仲間と新しい市場をつくりませんか？
          </p>
        </section>

        {/* video/3への遷移ボタン */}
        <div className="text-center mt-10">
          <Link 
            href="/video/3"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg sm:text-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="flex items-center justify-center">
              次へ
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}

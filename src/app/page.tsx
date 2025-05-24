import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "守成クラブ神戸ベイサイド - 経営者のための交流会",
  description: "中小企業の経営者同士が集まり、ネットワークを形成し、ビジネスチャンスを創出する場です。",
  openGraph: {
    title: "守成クラブ神戸ベイサイド - 経営者のための交流会",
    description: "中小企業の経営者同士が集まり、ネットワークを形成し、ビジネスチャンスを創出する場です。",
  },
};

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
            <h2>守成クラブとは？</h2>
            <p className="text-base sm:text-lg mb-4 leading-relaxed">
            中小企業経営者が商談･商売を行う、全国各地で月に1回開催される「経営者の会」です。単なる異業種交流とは違い「商売繁盛」を前面に打ち出し「本音で自社をPRし互いに商売（実利）に徹して売上を伸ばす」 ことを第一の目的としています。
            </p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h2>守成クラブの３つの価値</h2>
            <h3>安心！</h3>
            <li className="text-base sm:text-lg mb-4 leading-relaxed">
            既に会員である経営者からの紹介でのみ入会できるので信頼できる経営者だけで会が構成されています。取締役以上の役員または開業届を提出した代表者以外は入会できません。また政治・宗教・マルチ商法・投資ビジネス・非営利活動を目的とするかたも入会できません。
            </li>
            <h3>スピード/即決即断が可能</h3>
            <li className="text-base sm:text-lg mb-4 leading-relaxed">
            会員はすべて決裁権を持つ経営トップなので、とてもスピーディに商談ができます。守成クラブの様々な活動における周りからの評判や評価など、商談の時点で相手を信頼できるかどうかの判断材料があることもその要因です。
            </li>
            <h3>信頼できる大きな市場</h3>
            <li className="text-base sm:text-lg mb-4 leading-relaxed">
            関西に57会場 約6,000名の会員が加入、全国で300会場30,000名の経営トップが会員として加入しており、必ず紹介者のある信頼できる相手と商談ができます。 ※正会員が条件（兵庫19会場　大阪22会場　京都12会場　奈良2会場　滋賀2会場）
            </li>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-base sm:text-lg leading-relaxed">
              <span className="font-semibold">2002年の設立以来</span>、全国で<span className="bg-yellow-100 px-1 font-semibold">約2万社の企業</span>が参加する組織に成長し、中小企業の経営者たちが互いに支え合い、共に成長する場となっています。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
          <div className="bg-blue-600 text-white rounded-lg shadow-xl p-6 sm:p-8 transform transition-transform hover:scale-105">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              こんな課題はありませんか？
            </h2>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center">
                <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                <span>売上を増やしたい</span>
              </li>
              <li className="flex items-center">
                <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                <span>信頼してコラボできる人を探している</span>
              </li>
              <li className="flex items-center">
                <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                <span>経営について色々相談したい</span>
              </li>
              <li className="flex items-center">
                <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">✓</span>
                <span>兵庫県、大阪府、全国に商圏を拡げたい</span>
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
          <div className="pl-4 border-l-4 border-blue-200 mb-6">
            <h2>自分たちのマーケットは自分たちでつくる</h2>
            <p className="text-base sm:text-lg mb-4 leading-relaxed">
            守成クラブはマルチ商法（ネットワークビジネス）ではありませんので、会員を新たに紹介しても１円の報酬もありません。あなたがこれから守成クラブの会場で出会い、取引をおこなう相手になる経営者はすべて既存の会員自身が大切にしたいと思っている人を紹介して入会された方々であり仲間です。信頼できる仲間同士でビジネスを交流しあいながら、お互いに支え合って共に歩んできたからこそ、あなたにもたくさんの取引やご縁をつなくことができます。あなたも自身が信頼する経営者仲間を守成クラブの会員としてご紹介いただき、共に支えていただけませんか。自身のためだけではなく、皆のためにも楽しみながら活動することで、あなたの信用度や経験値が高まり、多方面でのビジネスや縁がつながり、経営者として、より一層の成長ができるものと確信しております。
            </p>
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

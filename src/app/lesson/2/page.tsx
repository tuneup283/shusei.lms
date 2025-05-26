import Link from 'next/link';

export default function Lesson2() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-blue-800 border-b-4 border-blue-500 pb-2 inline-block mx-auto">まとめ</h1>
        
        <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
          <div className="prose max-w-none">
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
              <span className="font-semibold text-blue-800">守成クラブ神戸ベイサイド</span>は、経営者同士が信頼できる関係を築き、ビジネスを成長させるための交流の場です。
              参加すれば、<span className="bg-yellow-100 px-1 font-semibold">新たな人脈構築</span>だけでなく、<span className="bg-yellow-100 px-1 font-semibold">ビジネスチャンスの拡大</span>や<span className="bg-yellow-100 px-1 font-semibold">情報交換の場</span>としてもご活用いただけます。
              ぜひ私たちと一緒に、新たな一歩を踏み出しましょう。
            </p>

            <div className="mt-8 sm:mt-10 p-6 sm:p-8 bg-blue-100 rounded-lg border border-blue-300 shadow-md">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 text-blue-800 border-b-2 border-blue-400 pb-2">ゲスト参加申し込み</h2>
              <p className="text-base sm:text-lg leading-relaxed">
                ご興味を持っていただけましたら、以下のフォームから<span className="font-semibold">例会へのゲスト参加</span>をお申し込みください。
                例会の詳細や、ご不明な点がございましたら、お気軽にお問い合わせください。
                私たちが丁寧にご案内させていただきます。
              </p>
            </div>

            <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200 shadow-md">
              <h2 className="text-xl font-bold mb-3 text-yellow-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                お待ちしています！
              </h2>
              <p className="text-base leading-relaxed">
                私たちは、あなたのご参加を心待ちにしています。
                一緒にビジネスの新しい可能性を探り、成長を実現していきましょう。
                守成クラブ神戸ベイサイドで、素晴らしい仲間たちと出会い、新しい一歩を踏み出してください。
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <Link
            href="/video/4"
            className="w-full sm:w-auto bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors text-center shadow-md flex items-center justify-center"
          >
            <span className="mr-2">←</span>
            <span>前へ</span>
          </Link>
          <Link
            href="https://kobe-bayside-afternoon-shusei.club/entry_guest/"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors text-center shadow-md flex items-center justify-center"
          >
            <span>ゲスト参加申し込みへ</span>
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 
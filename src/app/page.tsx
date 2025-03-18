import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-4xl w-full text-black">
        <h1 className="text-4xl font-bold mb-8 text-center">守成クラブ神戸ベイサイド</h1>
        
        <div className="bg-gray-50 rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">ようこそ、守成クラブ神戸ベイサイドへ！</h2>
          <p className="text-lg mb-6">
            私たちは「安心・信頼できる商売仲間づくり」をテーマに、経営者や事業者同士が集まり、
            ビジネスの拡大と発展を支援するための交流会です。
          </p>
          <p className="text-lg mb-6">
            毎月開催される例会では、商談や交流の機会が豊富に用意されており、
            あなたのビジネスに新しい可能性が広がります。
          </p>
          <p className="text-lg">
            2002年の設立以来、全国で約2万社の企業が参加する組織に成長し、
            中小企業の経営者たちが互いに支え合い、共に成長する場となっています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">クラブの特徴</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>安心・信頼できる商売仲間づくり</li>
              <li>毎月の例会での商談機会</li>
              <li>全国規模のネットワーク</li>
              <li>経営者同士の交流と学び</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">参加のメリット</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>ビジネスチャンスの拡大</li>
              <li>経営ノウハウの共有</li>
              <li>人脈形成の機会</li>
              <li>相互支援の仕組み</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/video/1"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg"
          >
            入会説明動画を見る
          </Link>
        </div>
      </div>
    </main>
  );
}

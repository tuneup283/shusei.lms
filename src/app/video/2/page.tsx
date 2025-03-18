import Link from 'next/link';

export default function Video2() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">守成クラブ</h1>
      
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        <iframe
          src="https://www.youtube.com/embed/ogNlrvYtFh4"
          title="守成クラブ"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
        />
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8 mt-8">
        <h2 className="text-2xl font-semibold mb-4">中小企業のネットワークとビジネス機会</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>中小企業の経営者たちが集まる会員制クラブが存在し、全国から様々な企業が参加している。</li>
          <li>企業間での仕事の受発注が行われる場として「仕事バンバプラザ」とも呼ばれている。</li>
          <li>2002年に設立されたこのクラブは、全国で約2万社が参加する組織に成長している。</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">地方企業の共感とネットワーク形成</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>地方の中小企業は、共感しやすい環境でネットワークを構築しやすいとされている。</li>
          <li>中小企業は、事業の継続に対する不安を共有できる場があることが魅力的である。</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">クラブの魅力とビジネスの迅速性</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>クラブには多様な業種の経営者が集まり、意思決定が迅速に行われるため、ビジネスの機会が広がる。</li>
          <li>地方の企業でも全国的なビジネスの最前線に立つことができるという誇りが感じられる。</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">目標と未来への展望</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>クラブは大きな目標に向かって進んでおり、参加企業は将来的に成功を収めることを目指している。</li>
        </ul>
      </div>

      <div className="flex justify-between">
        <Link 
          href="/video/1"
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          前へ：オープニング動画
        </Link>
        <Link 
          href="/video/3"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          次へ：動画3
        </Link>
      </div>
    </div>
  );
} 
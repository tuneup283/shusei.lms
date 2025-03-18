import Link from 'next/link';

export default function Video3() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">創始者の思い</h1>
      
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        <iframe
          src="https://www.youtube.com/embed/FIM_nfoRV-o"
          title="創始者の思い"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          loading="lazy"
        />
      </div>

      <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-8 mt-8">
      // 修正版のテキスト部分のみ抜粋
        <h2 className="text-2xl font-semibold mb-4">創始者と背景</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>守成クラブの創設者は、徒歩での日本一周を達成した札幌のカリスマ経営者である伊藤氏であり、札幌ススキノの日本商工振興会の会長でもある。</li>
          <li>小さな会社が潰れてしまう現状を憂い、企業を守るための活動を始めた。</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">中小企業の現状</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>守成クラブは、新入社員や固定社員の給料を支払うことが難しい時代において、中小企業が直面する厳しい状況を反映している。</li>
          <li>中小企業は常に厳しい労働環境にあり、経営者は団結して会社を守る必要があると強調されている。</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">経営者の意識改革</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>経営者のレベルを上げるための交流が重要であり、商売繁盛の会としての役割が求められている。</li>
          <li>各社長は、自社が「かけがえのない会社」であることを認識し、絶対に潰してはいけないという意識を持つべきである。</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">商売の精神</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>「自分を甘くしない、自分に厳しく」という姿勢が求められ、商売繁盛に向けて一生懸命に取り組むことが重要である。</li>
          <li>守成クラブは、かけがえのない会社の社長たちが集まる場であり、経営者同士の結束が商売の成功に繋がるとされている。</li>
        </ul>
      </div>

      <div className="flex justify-between">
        <Link 
          href="/video/2"
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          前へ：守成クラブとは
        </Link>
        <Link 
          href="/video/4"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          次へ：決まりについて
        </Link>
      </div>
    </div>
  );
} 
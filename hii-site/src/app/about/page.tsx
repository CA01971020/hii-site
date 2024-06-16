import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="relative top-56 pb-56 text-white text-center">
      <h1 className=" text-3xl">- わたしについて -</h1>
      <div className="grid grid-cols-2 mt-20 m-8">
        <div className="grid grid-cols-1 gap-10">
          <h2>好きなゲーム</h2>
          <p>APEX</p>
          <p>Stellaris</p>
          <p>信長の野望</p>
        </div>
        <div className="grid grid-cols-1 gap-10">
          <h2>好きなお酒</h2>
          <p>ビール</p>
          <p>シャンディガフ</p>
          <p>ジンハイ</p>
          <p>コークハイ</p>
          <p>ジンバック</p>
        </div>
      </div>
      <div className="mt-40 grid grid-cols-1 m-8">
        <h2 className=" text-xl">卒業後</h2>
        <p className=" mt-20">関東でエンジニアになってバリバリ働きたい。</p>
      </div>
      <div className="mt-32">
        <Link href="/">
          <button className=" bg-Customblack pl-12 pr-12 pt-5 pb-5 rounded-full">
            トップページに戻る
          </button>
        </Link>
      </div>
    </section>
  );
}

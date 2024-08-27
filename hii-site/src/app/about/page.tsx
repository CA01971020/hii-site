import Link from "next/link";
import ArticleCard from "@/component/article/articleCard";
import { articles } from "@/component/article/data/articles";

export default function AboutPage() {
  return (
    <div>
      <section className="relative top-56 pb-56 text-white text-center">
        <h1>わたしについて</h1>
        <div className=" p-5 m-8 mt-10 border border-white text-left">
          <p>
            こんにちは、
            <a className=" font-bold" href="https://x.com/aputech2024">
              ひー@情報系学生
            </a>
            です。
            <br />
            <br />
            趣味はお酒とゲームで、普段からお酒を嗜んでいます。
            <br />
            <br />
            特に、ジンジャーエールで割る飲み方にハマっていて、シャンディガフやジンハイ、ジンバックが好きです。
            <br />
            <br />
            ゲームはシミュレーションゲームを中心にFPSゲームやスマホゲームもプレイしています。
          </p>
        </div>
        <div className="grid grid-cols-2 mt-32 m-8">
          <div>
            <h2 className=" underline underline-offset-4">好きなゲーム</h2>
            <div className=" mt-10 grid gap-10">
              <p>Apex Legends</p>
              <p>Stellaris</p>
              <p>信長の野望</p>
              <p>アークナイツ</p>
              <p>鈴蘭の剣</p>
            </div>
          </div>
          <div>
            <h2 className=" underline underline-offset-4">好きなお酒</h2>
            <div className="mt-10 grid gap-10">
              <p>ビール</p>
              <p>シャンディガフ</p>
              <p>ジンハイ</p>
              <p>コークハイ</p>
              <p>ジンバック</p>
            </div>
          </div>
        </div>

        <div className="mt-32 p-5 m-8 border border-white text-left">
          <p>
            プログラミング経験は、専門学校1年生の時からで、今年で三年目です。
            <br />
            <br />
            TypeScript + Next.js +
            TailwindCSSの構成が好きで、本サイトもこの構成で作成しています。
            <br />
            <br />
            ホスティングはVercelで行っています。
            <br />
            <br />
            また、Zennで技術記事を書いています。
            <br />
          </p>
        </div>
      </section>
      <section className="relative top-40 pb-56 text-white text-center">
        <h1>記事一覧</h1>
        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              description={article.description}
              url={article.url}
              platform={article.platform}
              data={article.data}
            />
          ))}
        </div>
        <div className="mt-40 grid grid-cols-1 m-8">
          <h2 className=" text-xl">将来</h2>
          <p className=" mt-20">
            関東でエンジニアになってバリバリ働きたい。
          </p>
        </div>
        <div className="mt-32 text-white text-center">
          <Link href="/about">
            <button className=" bg-Customblack pl-12 pr-12 pt-5 pb-5 rounded-full">
              トップに戻る
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

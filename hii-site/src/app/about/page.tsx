import Link from "next/link";
import ArticleCard from "@/component/article/articleCard";
import { articles } from "@/component/article/data/articles";

export default function AboutPage() {
  return (
    <div>
      <section className="relative top-56 pb-56 text-white text-center">
        <h1 className=" text-3xl">- わたしについて -</h1>
        <div className="grid grid-cols-2 mt-12 m-8">
          <div>
            <h2 className=" underline underline-offset-4">好きなゲーム</h2>
            <div className=" mt-10 grid gap-10">
              <p>Apex Legends</p>
              <p>Stellaris</p>
              <p>信長の野望</p>
              <p>アークナイツ</p>
              <p>Age of Empires IV</p>
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
        <div className="mt-40 grid grid-cols-1 m-8">
          <h2 className=" text-xl">卒業後</h2>
          <p className=" mt-20">関東でエンジニアになってバリバリ働きたい。</p>
        </div>
      </section>
      <section className="relative top-56 pb-56 text-white text-center">
        <h1 className=" text-3xl">- 記事一覧 -</h1>
        <div className="mt-20 grid grid-cols-1 gap-10">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              description={article.description}
              url={article.url}
              platform={article.platform}
            />
          ))}
        </div>
        <div className="mt-32 text-white text-center">
          <Link href="/">
            <button className=" bg-Customblack pl-12 pr-12 pt-5 pb-5 rounded-full">
              トップページに戻る
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

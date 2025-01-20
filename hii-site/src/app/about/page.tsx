import Link from "next/link";
import ArticleCard from "@/component/article/articleCard";
import { articles } from "@/component/article/data/articles";

export default function AboutPage() {
  return (
    <div>
      <section className="relative top-44 pb-56 text-white text-center">
        <h1>わたしについて</h1>
        <div className=" p-5 m-8 mt-10 border border-white text-left">
          <p>
            こんにちは、
            <a className=" font-bold" href="https://x.com/aputech2024">
              ひー@情報系学生
            </a>
            です。 趣味は居酒屋巡りと旅行で、普段からお酒を嗜んでいます。
            <br />
            <br />
            飲み会の幹事をやることも多いので、愛媛県松山市で安く飲める居酒屋や新しく出来た居酒屋、美味しいと聞いた居酒屋など、居酒屋開拓を楽しんでいます。
            <br />
            <br />
            旅行は学生の間に、東京・京都・大阪・兵庫・広島・香川・高知に行きました。愛媛県から出ることで世の中の広さを知ることができました。
          </p>
        </div>
        <h1 className="mt-32">プログラミング経験について</h1>
        <div className="mt-10 p-5 m-8 border border-white text-left">
          <p>
            プログラミング経験は専門学校1年生（2022年）の時からで、今年（2025年）は4年目です。
            <br />
            <br />
            2年生の時にWEBサイトやWEBアプリの開発に興味を持ったのでフロントエンドの技術を中心に勉強中です。
            特に、ReactとTypeScriptを用いた開発には自信があり、現在進行形で試行錯誤しながらWEBアプリ開発に挑戦しています。
            <br />
            <br />
            他に扱える技術としては、HTML、CSS、TailwindCSS、JavaScript、Next.js、Python、AWS、Azure、Firebase、GitHub、Figma、Dockerなどがあります。
          </p>
        </div>
        <h1 className="mt-32">将来について</h1>
        <div className="mt-10 p-5 m-8 border border-white text-left">
          <p>
            私の技術的な知識はフロントエンドがメインとなっているので、バックエンドの知識・技術も磨いて将来的にはフルスタックで活躍できる人材になりたいです。
            <br />
            <br />
            また、貪欲に技術を学び、業務を学び、仕事ができる人間を目指してチャレンジしていきたいと思います。
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
        <div className="mt-32 text-white text-center">
          <Link href="/about">
            <button className=" bg-Customblack pl-12 pr-12 pt-5 pb-5 rounded-full hover:bg-Customgray">
              トップに戻る
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

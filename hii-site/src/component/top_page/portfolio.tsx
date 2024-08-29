import Image from "next/image";

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative pt-56 text-white text-center">
      <h1>制作物</h1>
      <div className="mt-48">
        <a
          href="https://yojijyukugo.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative mr-12 lg:mr-96 ml-12 lg:ml-96 rounded-xl p-10 bg-white grid grid-cols-2 lg:grid-cols-1">
            <Image
              alt="yojijyukugo"
              src="/yojiicon.png"
              width="70"
              height="10"
              className=" absolute left-8 lg:left-20 top-0.5"
            ></Image>
            <p className=" absolute w-40 top-7 right-8 lg:right-20 text-Customblue">
              四字熟語を作るアプリ
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}

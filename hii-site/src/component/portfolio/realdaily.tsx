import Image from "next/image";

export default function Realdaily() {
  return (
    <div>
      <div>
        <a
          href="https://realdaily.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative mr-12 lg:mr-96 ml-12 lg:ml-96 rounded-xl p-10 bg-white grid grid-cols-2 lg:grid-cols-1">
            <Image
              alt="realdaily"
              src="/rdicon.png"
              width="60"
              height="10"
              className=" absolute left-8 lg:left-20 top-2.5"
            ></Image>
            <p className=" absolute w-40 top-7 right-8 lg:right-20 text-Customblue">
              RealDaily
            </p>
          </div>
        </a>
      </div>
      <div className=" mt-8 mr-8 ml-8">
        <p>RealDailyは、現実世界にデイリークエストを実装するWEBアプリです。</p>
      </div>
    </div>
  );
}

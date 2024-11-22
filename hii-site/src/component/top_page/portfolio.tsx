import Yojijyukugo from "../portfolio/yojijyukugo";
import Realdaily from "../portfolio/realdaily";

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative pt-56 text-white text-center">
      <h1>制作物</h1>
      <div className="mt-48 flex flex-col gap-20">
        <Yojijyukugo />
        <Realdaily />
      </div>
    </section>
  );
}

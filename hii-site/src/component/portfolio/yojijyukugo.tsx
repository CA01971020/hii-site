import PortfolioCard from "../ui/portfoliocard";

export default function Yojijyukugo() {
  return (
    <PortfolioCard
      title="四字熟語を作るアプリ"
      description="四字熟語を作るアプリは、ランダムに4つの漢字を出力するWEBアプリです。"
      url="https://yojijyukugo.vercel.app/"
      alt="yojijyukugo"
      src="/yojiicon.png"
      wd={60}
      hg={60}
    />
  );
}

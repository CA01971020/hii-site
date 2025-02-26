import PortfolioCard from "../ui/portfoliocard";

export default function SimpleDiary() {
  return (
    <PortfolioCard
      title="Simple-Diary-App"
      description="FastAPI + streamlit で作成したWEBアプリです。"
      url="https://simple-diary.streamlit.app/"
      alt="Simple-Diary-App"
      src="/default-portfolio-icon.png"
      wd={60}
      hg={60}
    />
  );
}

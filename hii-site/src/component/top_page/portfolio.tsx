import Yojijyukugo from "../portfolio/yojijyukugo";
import Realdaily from "../portfolio/realdaily";
import NoWrongAnswerQuizGame from "../portfolio/no-wrong-answer-quiz-game";
import SimpleDiary from "../portfolio/simple-diary";

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative pt-44 text-white text-center">
      <h1>Portfolio</h1>
      <div className="mt-12 flex flex-col gap-20">
        <Yojijyukugo />
        <Realdaily />
        <NoWrongAnswerQuizGame />
        <SimpleDiary />
      </div>
    </section>
  );
}

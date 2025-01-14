import Image from "next/image";

export default function NoWrongAnswerQuizGame() {
  return (
    <div>
      <div>
        <a
          href="https://no-wrong-answer-quiz-game.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative mr-12 lg:mr-96 ml-12 lg:ml-96 rounded-xl p-10 bg-white grid grid-cols-2 lg:grid-cols-1">
            <Image
              alt="no-wrong-answer-quiz-game"
              src="/nowicon.png"
              width="60"
              height="10"
              className=" absolute left-8 lg:left-20 top-2.5"
            ></Image>
            <p className=" absolute w-40 top-4 right-8 lg:right-20 text-Customblue">
              no-wrong-answer-quiz-game
            </p>
          </div>
        </a>
      </div>
      <div className=" mt-8 mr-8 ml-8">
        <p>no-wrong-answer-quiz-gameは、不正解がないクイズゲームです。</p>
      </div>
    </div>
  );
}

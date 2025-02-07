import NextLink from "next/link";

export default function Profile() {
  return (
    <section className="relative top-20 text-white text-center">
      <h1>プロフィール</h1>
      <div className="mt-12">
        <p>愛媛県在住の２１歳、情報系学生</p>
      </div>
      <div className="mt-8">
        <p>趣味は居酒屋巡りと旅行</p>
      </div>
      <div className="mt-8">
        <p>好きな言語はTypeScript</p>
      </div>
      <div className="mt-8">
        <p>好きなライブラリはReact</p>
      </div>
      <div className="mt-8">
        <p>好きなフレームワークはTailwindCSS</p>
      </div>
      <div className="mt-12">
        <NextLink href="/about">
          <button className=" bg-Customblack pl-12 pr-12 pt-5 pb-5 rounded-full hover:bg-Customgray">
            ABOUT PAGE
          </button>
        </NextLink>
      </div>
    </section>
  );
}

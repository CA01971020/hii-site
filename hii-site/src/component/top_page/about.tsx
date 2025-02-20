import NextLink from "next/link";
import CustomButton from "../ui/custombutton";

export default function Profile() {
  return (
    <section className="relative top-20 text-white text-center">
      <h1>Profile</h1>
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
          <CustomButton buttontext="ABOUT PAGE" />
        </NextLink>
      </div>
    </section>
  );
}

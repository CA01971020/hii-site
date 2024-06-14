import Profile from "@/component/top_page/about";
import Skill from "@/component/top_page/skill";
import Portfolio from "@/component/top_page/portfolio";
import Contact from "@/component/base/contact";

export default function Home() {
  return (
    <main className="relative top-24 z-0">
      <div>
        <Profile></Profile>
      </div>
      <div className=" relative mt-40">
        <Skill></Skill>
      </div>
      <div className=" relative mt-40">
        <Portfolio></Portfolio>
      </div>
      <div className=" relative mt-40">
        <Contact></Contact>
      </div>
    </main>
  );
}

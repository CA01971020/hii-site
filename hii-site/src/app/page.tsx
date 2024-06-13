import Profile from "@/component/top_page/about";
import Skill from "@/component/top_page/skill";

export default function Home() {
  return (
    <main className="relative top-24">
      <div>
        <Profile></Profile>
      </div>
      <div className=" relative mt-40">
        <Skill></Skill>
      </div>
    </main>
  );
}

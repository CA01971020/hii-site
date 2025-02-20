import SkillCard from "../ui/skillcard";

export default function Skill() {
  return (
    <section id="skill" className="relative pt-44 text-white text-center">
      <h1>My Skills</h1>
      <div className="grid grid-cols-2 gap-10 m-12 mt-40 lg:grid-cols-4 lg:gap-24">
        <SkillCard skill="HTML5" rating="★★☆" />
        <SkillCard skill="CSS3" rating="★★☆" />
        <SkillCard skill="JavaScript" rating="★★☆" />
        <SkillCard skill="TypeScript" rating="★★☆" />
        <SkillCard skill="Python3" rating="★☆☆" />
        <SkillCard skill="React" rating="★★☆" />
        <SkillCard skill="Next.js" rating="★☆☆" />
        <SkillCard skill="TailwindCSS" rating="★★☆" />
        <SkillCard skill="FastAPI" rating="★☆☆" />
        <SkillCard skill="Firebase" rating="★☆☆" />
        <SkillCard skill="Docker" rating="★☆☆" />
      </div>
    </section>
  );
}

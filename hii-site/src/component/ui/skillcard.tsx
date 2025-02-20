import React from "react";

type SkillCardProps = {
  skill: string;
  rating: string;
};

const SkillCard: React.FC<SkillCardProps> = ({ skill, rating }) => {
  return (
    <div className="bg-white text-Customblack rounded-xl p-5 shadow-lg ring-2 ring-black/20 shadow-black/50">
      <p>{skill}</p>
      <p>{rating}</p>
    </div>
  );
};

export default SkillCard;

import { useState } from "react";
import blob from "@/assets/blob.png";
import { getStacks } from "@/services/api";
import { SKILL_FILTERS } from "@/constants/content";
import { SECTION_IDS } from "@/constants/navigation";
import { useAsync } from "@/hooks/useAsync";
import AsyncState from "@/components/ui/AsyncState";
import SkillCard from "./components/SkillCard";
import { skillIcons } from "@/assets/skills";

const Skills = () => {
  const [skillType, setSkillType] = useState("all");
  const { data: stacks, loading, error } = useAsync(getStacks, []);

  const filteredStacks =
    skillType === "all"
      ? stacks ?? []
      : (stacks ?? []).filter((stack) => stack.data.tag === skillType);

  return (
    <div
      className="mt-14 flex flex-col lg:flex-row lg:justify-between lg:items-end lg:gap-8 gap-4 max-w-[1200px] pt-14"
      id={SECTION_IDS.SKILLS}
    >
      <div className="w-[95%] lg:w-[50%]">
        <h3 className="text-3xl phone:text-5xl md:text-6xl yusei-magic-regular text-[#4e45d5] select-none text-left mb-8">
          <p>Me and</p>
          <p>My Tech Stack</p>
        </h3>

        <div className="text-md md:text-lg flex flex-col gap-2 text-justify">
          <p>
            As a tech enthusiast, I thrive on turning ideas into impactful
            solutions. My journey has been shaped by a passion for learning and
            exploration, enabling me to tackle challenges across diverse
            domains. From crafting intuitive interfaces to solving complex
            backend problems, I enjoy blending creativity with technical
            expertise.
          </p>
          <p>
            My tech stack is more than just a set of tools—it's a way to bring
            ideas to life. With each project, I aim to learn, innovate, and
            deliver solutions that make a difference. For me, technology is not
            just a skill but a journey of endless possibilities.
          </p>
          <p>Feel free to explore the technologies I work with in more detail...</p>
        </div>
      </div>

      <div className="w-[90%] text-xs mx-auto lg:w-[45%] bg-slate-50 rounded-lg md:text-lg">
        <div className="bg-slate-50 flex flex-wrap justify-between mx-auto p-2 gap-2 rounded-md my-2 text-s">
          {SKILL_FILTERS.map(({ id, label }) => (
            <div
              key={id}
              className={`w-[22%] hover:cursor-pointer p-2 shadow-md border-2 rounded-md hover:bg-[#665de8] hover:text-white hover:scale-105 hover:border-slate-600 duration-200 ${
                skillType === id
                  ? "bg-[#665de8] text-white border-slate-500 shadow-[#4e45d5]"
                  : "text-[#4e45d5] border-[#4e45d5] shadow-slate-400"
              }`}
            >
              <button
                type="button"
                className="w-full overflow-hidden"
                onClick={() => setSkillType(id)}
              >
                {label}
              </button>
            </div>
          ))}
        </div>

        <div className="relative flex flex-wrap bg-slate-50 mx-auto justify-evenly items-center pt-4 px-4 rounded-md min-h-[280px] lg:h-[320px]">
          <div className="blog absolute w-[50%] top-[15%] left-[25%] animate-blob">
            <img className="w-[80%]" src={blob} alt="" />
          </div>

          <AsyncState loading={loading} error={error}>
            {filteredStacks.map((stack) => {
              if (stack.data.icon && skillIcons[stack.data.icon]) {
                return (
                  <SkillCard className="w-[15%]" stack={stack.data} key={stack._id} />
                );
              }
              return null;
            })}
          </AsyncState>
        </div>
      </div>
    </div>
  );
};

export default Skills;

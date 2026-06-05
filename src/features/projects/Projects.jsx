import { useState } from "react";
import { getProjects } from "@/services/api";
import { PROJECT_FILTERS } from "@/constants/content";
import { SECTION_IDS } from "@/constants/navigation";
import { useAsync } from "@/hooks/useAsync";
import AsyncState from "@/components/ui/AsyncState";
import ProjectCard from "./components/ProjectCard";

const Projects = () => {
  const [tag, setTag] = useState("all");
  const { data: projData, loading, error } = useAsync(getProjects, []);

  const filteredProjects =
    tag === "all"
      ? projData ?? []
      : (projData ?? []).filter((project) =>
          project.data[0].tags.includes(tag)
        );

  return (
    <div className="w-full my-14 pt-14" id={SECTION_IDS.PROJECTS}>
      <div className="max-w-[1200px] mx-auto">
        <h3 className="text-3xl phone:text-5xl md:text-6xl yusei-magic-regular text-[#4e45d5] font-bold select-none">
          Projects
        </h3>
      </div>

      <div className="bg-slate-100 rounded-lg py-7">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-evenly gap-3 my-14">
            {PROJECT_FILTERS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                className={`w-[30%] p-2 overflow-hidden shadow-md border-2 rounded-md hover:bg-[#665de8] hover:text-white hover:scale-105 hover:border-slate-600 duration-200 ${
                  tag === id
                    ? "bg-[#665de8] text-white border-slate-500 shadow-[#4e45d5]"
                    : "text-[#4e45d5] border-[#4e45d5] shadow-slate-400"
                }`}
                onClick={() => setTag(id)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap flex-col md:flex-row gap-12 justify-center md:items-start items-center my-10">
            <AsyncState loading={loading} error={error}>
              {filteredProjects.map((project) => (
                <ProjectCard
                  project={project.data[0]}
                  setTag={setTag}
                  key={project._id}
                />
              ))}
            </AsyncState>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

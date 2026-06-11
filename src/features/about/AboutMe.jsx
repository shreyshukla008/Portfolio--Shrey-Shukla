import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import { ABOUT_SKILLS_DATA } from "@/constants/content";
import { SECTION_IDS } from "@/constants/navigation";
import AnimatedLoop from "./components/AnimatedLoop";
import { useState } from "react";

const AboutMe = () => {
  const [showFullText, setShowFullText] = useState(false);
  
  const cvUrl = import.meta.env.VITE_CV_URL || "";
  
  return (
    <div className="max-w-[1200px] pt-16" id={SECTION_IDS.ABOUT}>
      <h3 className="text-3xl phone:text-5xl md:text-6xl yusei-magic-regular select-none font-bold text-[#4e45d5]">
        About Me
      </h3>

      <div className="flex flex-col justify-center items-center md:flex-row gap-10 mt-5 z-10">
        <div className="flex bg-slate-100 flex-col gap-4 justify-center items-center lg:mt-0 md:flex-row text-slate-600 w-[90%] rounded-lg shadow-lg">
          <div className="py-6 px-4 flex flex-col justify-evenly gap-4 items-center">
            <p className="text-s phone:text-[0.9rem] text-justify viga-regular">
              I'm a Software Engineer passionate about building scalable web applications, backend systems, and developer-focused tools. I enjoy transforming complex problems into reliable and intuitive solutions, with experience across modern technologies including React, NestJS, TypeScript, MongoDB, Redis, and ClickHouse.
              
              {

                <>
                {showFullText ?
                (
                  <div>
                  <button className="text-blue-600 hover:text-blue-800 transition-colors duration-200" onClick={() => setShowFullText(false)}>
                    show more...
                  </button>
                  </div>
                ):
                 (
                  <div>
                    <p>
                      My background combines industry experience with a strong problem-solving mindset developed through competitive programming and large-scale projects. Whether it's designing APIs, optimizing data-intensive systems, or building end-to-end products, I focus on creating solutions that are efficient, impactful, and built to scale.
                    </p>
                    <button className="text-blue-600 hover:text-blue-800 transition-colors duration-200" onClick={() => setShowFullText(true)}>
                      show less...
                    </button>
                  </div>
                )}
                </>
              }
              
            </p>

            <button
              type="button"
              className="flex group w-52 p-2 justify-center flex-wrap gap-3 px-3 rounded-md bg-slate-50 border-2 border-[#4e45d5] hover:border-b-2 hover:border-slate-600 hover:text-slate-50 hover:bg-[#4e45d5] shadow-md shadow-slate-400 hover:ease-in duration-200 text-black"
              onClick={() => window.open(cvUrl, "_blank")}
            >
              Download CV
              <i className="fa-solid fa-download animate-pulse group-hover:animate-bounce" />
            </button>
          </div>

          <div className="w-full flex flex-col justify-center items-center viga-regular">
            <div className="w-full aspect-square max-w-[200px] z-10">
              <ResponsiveContainer>
                <RadarChart outerRadius={60} width={320} height={200} data={ABOUT_SKILLS_DATA}>
                  <PolarGrid />
                  <PolarAngleAxis fontSize={10} dataKey="subject" />
                  <Radar
                    name="Skills"
                    dataKey="A"
                    stroke="#8884d8"
                    fill="#43c343"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-lg">Skills</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] w-screen my-6 overflow-hidden relative">
        <AnimatedLoop />
      </div>
    </div>
  );
};

export default AboutMe;

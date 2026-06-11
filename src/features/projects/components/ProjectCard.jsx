import { useEffect, useState } from "react";
import "./ProjectCard.css";


const ProjectCard = ({ project, setTag }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [bgUrl, setBgUrl] = useState("src/assets/black-1072366_1280.jpg");

  const { achievements, responsibilities, keyFeatures } = project.details;

  // TODO: Add bgUrl to project data

  // useEffect(() => {
  //   setBgUrl(project.bgUrl);
  // }, [project.bgUrl]);

  const handleTag = (newTag) => {
    setTag(newTag);
  };

  return (
    <div
      className={`relative bg-cover rounded-lg items-center text-white border-black hover:scale-110 ease-in duration-300 shadow-slate-500 shadow-lg project-card 
      w-[85%]
      `}
      style={{
        backgroundImage: `url(${bgUrl})`
      }}
    >
      <div className="flex flex-col gap-4 p-4 w-[80%] z-40">
        <h4 className="text-3xl font-bold">{project.title}</h4>

        <div>
          <ul className="text-blue-400 flex flex-wrap justify-start gap-3 text-xs">
            {project.tags.map((tag, index) => (
              <li
                className="hover:text-green-400 cursor-pointer"
                key={index}
                onClick={() => handleTag(tag)}
              >
                #{tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-2 text-xs">
          <ul className="flex flex-wrap gap-3">
            <p>Technologies Used: </p>
            {project.technologiesUsed.map((str, index) => (
              <li key={index}>{str}</li>
            ))}
          </ul>
        </div>

        <div className="text-sm">
          {project.summary}

          {!isExpanded && (
            <p
              className="group text-blue-400 text-xs hover:text-green-400 cursor-pointer"
              onClick={() => setIsExpanded(true)}
            >
              Show Summary{" "}
              <i className="icon-arrow-down p-[1px] text-[10px] rounded-full border-[0.8px] border-blue-500 group-hover:border-blue-700" />
            </p>
          )}

          {isExpanded && (
            <div>
              <div className="flex flex-col gap-3 font-light mt-3">
                <div>
                  <p>KeyFeatures:</p>
                  {keyFeatures.map((str, index) => (
                    <p key={index}>- {str}</p>
                  ))}
                </div>

                <div>
                  <p>Achievements:</p>
                  {achievements.map((str, index) => (
                    <p key={index}>- {str}</p>
                  ))}
                </div>
              </div>
              <p
                className="group text-xs text-blue-400 hover:text-green-400 cursor-pointer"
                onClick={() => setIsExpanded(false)}
              >
                Hide Summary{" "}
                <i className="icon-arrow-up p-[1px] text-[10px] rounded-full border-[0.8px] border-blue-500 group-hover:border-blue-700" />
              </p>
            </div>
          )}
        </div>

        <div className="flex gap-3">
          <a
            href={project.hosted_link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-1 items-center h-10 bg-gray-600 text-white p-3 rounded-full transition-all duration-200 hover:bg-[#4e45d5]"
          >
            <i className="icon-link" />
            <span className="p-2 hidden group-hover:block ease-in text-bold">
              Link
            </span>
          </a>

          <a
            href={project.gitHub_link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-1 items-center h-10 bg-gray-600 text-white p-3 rounded-full transition-all duration-200 hover:bg-[#4e45d5]"
          >
            <i className="fa-brands fa-github scale-150" />
            <span className="hidden p-2 group-hover:block ease-in text-bold">
              GitHub
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

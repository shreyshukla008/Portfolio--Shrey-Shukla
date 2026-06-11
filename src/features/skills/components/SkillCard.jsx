const STACK_ICON_BASE = "/assets/stack/";
import { skillIcons } from "@/assets/skills";

const SkillCard = ({ stack, className = "" }) => {
  return (
    <div
      className={`group relative z-10 flex flex-col p-2 hover:scale-110 duration-300 ease-in ${className}`}
    >
      <img
        src={skillIcons[stack.icon]}
        alt={`${stack.name} icon`}
        loading="lazy"
      />

      <div
        className="
          absolute
          -translate-x-1/2
          -left-1/4
          z-100
          whitespace-nowrap
          rounded-md
          bg-slate-800
          px-2
          py-1
          text-xs
          text-white
          opacity-0
          pointer-events-none
          transition-opacity
          duration-200
          group-hover:opacity-100
        "
      >
        {stack.name}
      </div>
    </div>
  );
};

export default SkillCard;

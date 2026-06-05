const STACK_ICON_BASE = "/assets/stack/";

const SkillCard = ({ stack, className = "" }) => {
  return (
    <div
      className={`z-10 flex flex-col p-2 hover:scale-110 duration-300 ease-in ${className}`}
    >
      <img
        src={`${STACK_ICON_BASE}${stack.icon}`}
        alt={`${stack.name} icon`}
        loading="lazy"
      />
    </div>
  );
};

export default SkillCard;

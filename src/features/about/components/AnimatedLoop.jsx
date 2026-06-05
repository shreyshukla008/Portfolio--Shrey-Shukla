import { motion } from "framer-motion";
import { getStacks } from "@/services/api";
import { useAsync } from "@/hooks/useAsync";
import SkillCard from "@/features/skills/components/SkillCard";

const AnimatedLoop = () => {
  const { data: stacks, loading, error } = useAsync(getStacks, []);

  return (
    <div className="relative flex p-4 select-none overflow-hidden">
      <motion.div
        className="flex"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 20,
          repeatDelay: 0,
          ease: "linear",
          times: [0, 1],
        }}
      >
        {loading || error ? (
          <p />
        ) : (
          stacks?.map((stack) => (
            <SkillCard
              className="w-[3rem] mx-3 sm:w-[5rem] sm:mx-5"
              stack={stack.data}
              key={stack._id}
            />
          ))
        )}
      </motion.div>
    </div>
  );
};

export default AnimatedLoop;

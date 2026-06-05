import { useState } from "react";
import CollapsibleSection from "@/components/ui/CollapsibleSection";
import LeetCode from "./LeetCode";

const APS = () => {
  const [lcDrop, setLcDrop] = useState(false);

  return (
    <CollapsibleSection
      title="Algorithm and Problem Solving"
      summary="Strong proficiency in analyzing, designing, and implementing efficient algorithms to solve complex problems."
    >
      <div className="flex justify-between border-y-2 rounded-lg mt-4 border-[#4e45d5] p-4">
        <h3 className="text-md">LeetCode</h3>
        <button
          type="button"
          className="p-1 px-2"
          onClick={() => setLcDrop((prev) => !prev)}
          aria-expanded={lcDrop}
        >
          {lcDrop ? (
            <i className="icon-arrow-up font-bold" />
          ) : (
            <i className="icon-arrow-down font-bold" />
          )}
        </button>
      </div>

      {lcDrop && <LeetCode />}
    </CollapsibleSection>
  );
};

export default APS;

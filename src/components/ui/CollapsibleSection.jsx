import { useState } from "react";

const CollapsibleSection = ({ title, summary, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-4 py-2 flex flex-col gap-8 text-justify">
      <div className="flex justify-between gap-4 items-start">
        <h2 className="text-lg">{title}</h2>
        <button
          type="button"
          className="p-1 px-2 border-2 border-slate-100 shadow-md rounded-md"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <i className="icon-arrow-up font-bold" />
          ) : (
            <i className="icon-arrow-down font-bold" />
          )}
        </button>
      </div>

      <div>{summary}</div>

      {isOpen && <section>{children}</section>}
    </div>
  );
};

export default CollapsibleSection;

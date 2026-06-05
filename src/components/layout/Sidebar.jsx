import { NAV_ITEMS } from "@/constants/navigation";

const Sidebar = ({ toggleSidebar }) => {
  return (
    <aside className="flex top-0 gap-10 w-screen bg-[#4e45d5] justify-between items-center pr-6">
      <div>
        <button type="button" onClick={toggleSidebar}>
          <div className="icon-arrow-left py-3 text-slate-50 text-3xl font-extrabold shadow-md shadow-slate-600 border-r-2 border-slate-300 rounded-r-md" />
        </button>
      </div>

      <nav>
        <ul className="flex justify-evenly gap-7 text-lg phone:text-2xl text-slate-50">
          {NAV_ITEMS.map(({ sectionId, icon }) => (
            <li key={sectionId} className="flex flex-col justify-center group">
              <a href={`#${sectionId}`}>
                <i className={`${icon} group-hover:text-white`} />
              </a>
              <div className="w-full rounded-xl h-1 bg-slate-400 group-hover:bg-white" />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

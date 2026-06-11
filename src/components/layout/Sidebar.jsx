import { NAV_ITEMS } from "@/constants/navigation";

const smokyPurple =
  "border border-[#756eda]/35 bg-gradient-to-b from-[#2f2a7a]/75 via-[#4e45d5]/55 to-[#665de8]/45 shadow-[0_0_28px_rgba(78,69,213,0.45),0_8px_32px_rgba(45,40,120,0.35),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl";

const iconBackdrop =
  "relative z-10 flex items-center justify-center rounded-full border border-white/40 bg-gradient-to-b from-white/40 via-white/22 to-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.55),0_4px_14px_rgba(255,255,255,0.06)] backdrop-blur-md";

const iconBackdropActive =
  "border-white/55 from-white/50 via-white/30 to-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.65),0_0_18px_rgba(255,255,255,0.18)]";

const tooltipStyle =
  "pointer-events-none absolute left-[calc(100%+0.75rem)] top-1/2 z-[1100] -translate-y-1/2 whitespace-nowrap rounded-full border border-[#756eda]/50 bg-gradient-to-r from-[#756eda]/20 to-[#4e45d5]/15 px-3 py-1.5 text-xs font-medium text-[#756eda] opacity-0 shadow-[0_4px_20px_rgba(117,110,218,0.25)] backdrop-blur-lg transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-1";

const SectionTooltip = ({ label }) => (
  <span className={tooltipStyle} role="tooltip">
    <span
      className="absolute right-full top-1/2 -translate-y-1/2 border-[5px] border-transparent border-r-white/25"
      aria-hidden="true"
    />
    {label}
  </span>
);

const NavBlip = ({ isActive }) => (
  <span
    className={`mt-1.5 rounded-full transition-all duration-300 ${
      isActive
        ? "h-2.5 w-2.5 bg-green-400 shadow-[0_0_10px_#4ade80] ring-2 ring-green-300/30"
        : "h-1.5 w-1.5 bg-white/50"
    }`}
    aria-hidden="true"
  />
);

const NavTrack = ({ activeIndex, progressPercent, onNavigate, showLabels }) => (
  <div className={`relative ${showLabels ? "px-2" : "mx-auto w-full"}`}>
    <div className="pointer-events-none absolute left-1/2 top-2 bottom-2 z-0 w-0.5 -translate-x-1/2">
      <div className="absolute inset-0 rounded-full bg-white/25" />
      <div
        className="absolute top-0 left-0 w-full rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)] transition-all duration-500 ease-out"
        style={{ height: `${progressPercent}%` }}
      />
    </div>

    <ul className="relative z-[1] flex flex-col gap-3">
      {NAV_ITEMS.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <li key={item.sectionId}>
            <a
              href={`#${item.sectionId}`}
              onClick={onNavigate}
              aria-label={item.label}
              aria-current={isActive ? "true" : undefined}
              className={`group relative flex transition duration-200 ${
                showLabels
                  ? `items-start gap-3 rounded-xl py-1 pr-2 ${
                      isActive
                        ? "text-white"
                        : "text-slate-200/80 hover:text-white"
                    }`
                  : `flex-col items-center ${
                      isActive ? "text-white" : "text-slate-200/70 hover:text-white"
                    }`
              }`}
            >
              <div className="flex flex-col items-center">
                <span
                  className={`${iconBackdrop} ${
                    showLabels ? "h-9 w-9" : "h-10 w-10"
                  } ${isActive ? iconBackdropActive : ""}`}
                >
                  <i className={`${item.icon} ${showLabels ? "text-base" : "text-xl"}`} />
                  {!showLabels && <SectionTooltip label={item.label} />}
                </span>
                <NavBlip isActive={isActive} />
              </div>

              {showLabels && (
                <span className="pt-2 text-sm font-medium">{item.label}</span>
              )}
            </a>
          </li>
        );
      })}
    </ul>
  </div>
);

const Sidebar = ({ activeSection, variant = "rail", onClose }) => {
  const activeIndex = Math.max(
    0,
    NAV_ITEMS.findIndex((item) => item.sectionId === activeSection)
  );

  const progressPercent =
    NAV_ITEMS.length > 1 ? (activeIndex / (NAV_ITEMS.length - 1)) * 100 : 0;

  if (variant === "rail") {
    return (
      <aside
        className={`fixed left-3 top-1/2 z-[1000] hidden w-[3.25rem] -translate-y-1/2 overflow-visible rounded-2xl py-5 lg:block ${smokyPurple}`}
        aria-label="Section navigation"
      >
        <NavTrack activeIndex={activeIndex} progressPercent={progressPercent} />
      </aside>
    );
  }

  return (
    <>
      <button
        type="button"
        className="fixed inset-0 z-[999] bg-[#4e45d5]/25 backdrop-blur-sm lg:hidden"
        onClick={onClose}
        aria-label="Close navigation"
      />

      <aside
        className={`fixed left-0 top-0 z-[1000] flex h-full w-52 flex-col lg:hidden ${smokyPurple} rounded-r-2xl border-l-0`}
      >
        <div className="flex items-center justify-between border-b border-[#756eda]/30 px-4 py-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-200/90">
            Menu
          </p>
          <button
            type="button"
            onClick={onClose}
            className="icon-arrow-left rounded-full border border-white/30 bg-white/10 px-2 py-1 text-lg text-white transition hover:bg-white/20 backdrop-blur-sm"
            aria-label="Close sidebar"
          />
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-5">
          <NavTrack
            activeIndex={activeIndex}
            progressPercent={progressPercent}
            onNavigate={onClose}
            showLabels
          />
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

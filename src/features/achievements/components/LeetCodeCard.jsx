import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { LEETCODE_USERNAME } from "@/services/api";

const PIE_COLORS = ["#47ca52", "#edcd2d", "#f02913"];

const LeetCodeCard = ({ profile, badges, problems, maxStreak }) => {
  const pieData = [
    { name: "Easy", value: problems.easy },
    { name: "Medium", value: problems.medium },
    { name: "Hard", value: problems.hard },
  ];

  return (
    <div className="flex flex-wrap justify-evenly gap-6 mt-6 my-8">
      <div className="relative shadow-xl bg-slate-100 py-4 px-3 w-[95%] phone:w-[80%] md:w-[43%] rounded-lg flex flex-col justify-between gap-4 text-slate-500 hover:scale-105 hover:ease-in duration-200 border-[#918af0] border-[2px]">
        <a
          href="https://leetcode.com/u/shreyshukla0803/"
          className="flex gap-2 w-full px-8 bg-[#918af0] border-slate-600 border-2 shadow-md hover:cursor-pointer rounded-md"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-between w-full gap-2 p-2">
            <img
              width={25}
              className="absolute border-2 border-black -top-4 -left-4 rounded-full w-16"
              loading="lazy"
              src={profile.avatar}
              alt=""
            />
            <p className="text-slate-50 hover:text-white hover:ease-in duration-200 overflow-hidden">
              @{LEETCODE_USERNAME}
            </p>
            <i className="fa-light fa-share-from-square" />
          </div>
        </a>

        <p className="flex p-2 justify-between flex-wrap gap-3 px-3 rounded-md border-y-2 hover:border-b-2 border-[#4e45d5] shadow-md hover:ease-in duration-200 hover:text-black">
          Ranking: <span>{profile.ranking}</span>
        </p>
        <p className="flex p-2 justify-between flex-wrap gap-3 px-3 rounded-md border-y-2 hover:border-b-2 border-[#4e45d5] shadow-md hover:ease-in duration-200 hover:text-black">
          Badges Earned: <span>{badges.count}</span>
        </p>
        <p className="flex p-2 justify-between flex-wrap gap-3 px-3 rounded-md border-y-2 hover:border-b-2 border-[#4e45d5] shadow-md hover:ease-in duration-200 hover:text-black">
          Max Streak: <span>{maxStreak}</span>
        </p>
        <p className="flex p-2 justify-between flex-wrap gap-3 px-3 rounded-md border-y-2 hover:border-b-2 border-[#4e45d5] shadow-md hover:ease-in duration-200 hover:text-black">
          Problems Solved: <span>{problems.total}</span>
        </p>
      </div>

      <div className="flex flex-col justify-between w-[95%] phone:w-[80%] md:w-[43%] max-h-[370px] shadow-xl bg-slate-100 rounded-lg text-slate-500 hover:scale-105 duration-200 hover:ease-in border-[#918af0] border-[2px]">
        <div className="w-full aspect-square max-h-[300px] mx-auto my-auto sm:p-5 scale-75 phone:scale-100 md:scale-125 lg:scale-150">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={0}
                outerRadius={70}
                label
                labelLine
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${entry.name}`}
                    fill={PIE_COLORS[index % PIE_COLORS.length]}
                    className="hover:scale-110 duration-300"
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-wrap justify-between items-center bg-slate-50 border-t-2 border-t-[#7770e0] p-2 rounded-md w-full py-1">
          {[
            { label: "Easy", color: "bg-green-400", value: problems.easy },
            { label: "Medium", color: "bg-yellow-400", value: problems.medium },
            { label: "Hard", color: "bg-red-600", value: problems.hard },
          ].map(({ label, color, value }) => (
            <div
              key={label}
              className="flex flex-col justify-start items-center hover:scale-105 duration-200"
            >
              <div className="flex justify-start items-center gap-1">
                <div className={`w-3 h-3 ${color} rounded-full animate-pulse`} />
                <span>{label}</span>
              </div>
              <div>{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeetCodeCard;

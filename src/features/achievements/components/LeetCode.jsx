import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { useLeetCode } from "@/hooks/useLeetCode";
import { getMaxConsecutiveStreak } from "@/utils/leetcode";
import AsyncState from "@/components/ui/AsyncState";
import LeetCodeCard from "./LeetCodeCard";

const START_DATE = Math.floor(Date.parse("2024-07-20"));
const END_DATE = Date.now();

const LeetCode = () => {
  const { loading, error, payload } = useLeetCode();
  const maxStreak = getMaxConsecutiveStreak(payload.calendar);
  const today = new Date();

  return (
    <AsyncState loading={loading} error={error}>
      <div>
        <div className="flex flex-col font-light p-4 gap-6">
          <h4 className="text-xl">Profile and Milestones</h4>
          <LeetCodeCard
            profile={payload.profile}
            problems={payload.problems}
            badges={payload.badges}
            maxStreak={`${maxStreak}`}
          />
        </div>

        <div className="flex flex-col items-center overflow-hidden font-light p-4">
          <div className="flex flex-col gap-4 h-full">
            <h3 className="text-xl">Consistency in Action</h3>
            <p className="text-justify">
              This heatmap shows my consistent daily problem-solving on
              LeetCode, reflecting steady progress and dedication. Each block
              represents a day of problem-solving, illustrating my commitment
              to learning and growth.
            </p>
            <p>
              With a maximum streak of {maxStreak} consecutive days, it
              highlights my focus and determination to continuously improve.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <svg className="scale-50 phone:scale-100">
              <CalendarHeatmap
                startDate={START_DATE}
                endDate={END_DATE}
                gutterSize={2}
                values={payload.calendar}
              />
            </svg>
            <p className="text-xs font-light">
              From- 20/7/2024 to {today.getDate()}/{today.getMonth() + 1}/
              {today.getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </AsyncState>
  );
};

export default LeetCode;

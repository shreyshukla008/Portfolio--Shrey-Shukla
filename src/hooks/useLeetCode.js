import { useState, useEffect, useCallback } from "react";
import {
  getLeetCodeProfile,
  getLeetCodeBadges,
  getLeetCodeSolved,
  getLeetCodeCalendar,
} from "@/services/api";
import { extractUnixDates } from "@/utils/leetcode";

const INITIAL_PAYLOAD = {
  profile: { avatar: "", ranking: 0 },
  problems: { total: 0, easy: 0, medium: 0, hard: 0 },
  badges: { all: [], count: 0 },
  calendar: [],
};

export function useLeetCode() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [payload, setPayload] = useState(INITIAL_PAYLOAD);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(false);

    try {
      const [prof, badges, solved, cal] = await Promise.all([
        getLeetCodeProfile(),
        getLeetCodeBadges(),
        getLeetCodeSolved(),
        getLeetCodeCalendar(),
      ]);

      setPayload({
        profile: {
          avatar: prof.avatar,
          ranking: prof.ranking,
        },
        badges: {
          all: badges.badges,
          count: badges.badges.length,
        },
        problems: {
          total: solved.acSubmissionNum[0].count,
          easy: solved.acSubmissionNum[1].count,
          medium: solved.acSubmissionNum[2].count,
          hard: solved.acSubmissionNum[3].count,
        },
        calendar: extractUnixDates(cal.submissionCalendar).map((element) => ({
          date: new Date(parseInt(element, 10) * 1000).toISOString().split("T")[0],
          count: 1,
        })),
      });
    } catch (err) {
      console.error("Failed to load LeetCode data:", err.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { loading, error, payload, refetch: fetchData };
}

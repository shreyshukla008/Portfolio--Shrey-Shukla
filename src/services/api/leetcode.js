import { leetcodeClient } from "./client";
import { LEETCODE_USERNAME } from "./config";

export async function getLeetCodeProfile() {
  const { data } = await leetcodeClient.get(LEETCODE_USERNAME);
  return data;
}

export async function getLeetCodeBadges() {
  const { data } = await leetcodeClient.get(`${LEETCODE_USERNAME}/badges`);
  return data;
}

export async function getLeetCodeSolved() {
  const { data } = await leetcodeClient.get(`${LEETCODE_USERNAME}/solved`);
  return data;
}

export async function getLeetCodeCalendar() {
  const { data } = await leetcodeClient.get(`${LEETCODE_USERNAME}/calendar`);
  return data;
}

import { apiClient } from "./client";

export async function getStacks() {
  const { data } = await apiClient.get("/api/v1/stacks");
  return data;
}

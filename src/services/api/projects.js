import { apiClient } from "./client";

export async function getProjects() {
  const { data } = await apiClient.get("/api/v1/projects");
  return data;
}

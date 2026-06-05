import { apiClient } from "./client";

export async function postComment(formData) {
  const { data } = await apiClient.post("/api/v1/comments", formData);
  return data;
}

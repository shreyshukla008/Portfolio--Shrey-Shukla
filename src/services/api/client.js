import axios from "axios";
import { ApiError } from "./errors";
import { API_BASE_URL, LEETCODE_API_BASE_URL } from "./config";

function createApiClient(baseURL) {
  const client = axios.create({
    baseURL,
    timeout: 30000,
    headers: { "Content-Type": "application/json" },
  });

  client.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        const { status, data } = error.response;
        const message =
          data?.message ||
          data?.error ||
          error.message ||
          `Request failed with status ${status}`;
        throw new ApiError(message, { status, data });
      }
      if (error.request) {
        throw new ApiError("Network error. Please check your connection.", {
          isNetworkError: true,
        });
      }
      throw new ApiError(error.message || "An unexpected error occurred.");
    }
  );

  return client;
}

export const apiClient = createApiClient(API_BASE_URL);
export const leetcodeClient = createApiClient(LEETCODE_API_BASE_URL);

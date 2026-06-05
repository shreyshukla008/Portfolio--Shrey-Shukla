export class ApiError extends Error {
  constructor(message, { status, data, isNetworkError = false } = {}) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
    this.isNetworkError = isNetworkError;
  }
}

export function getErrorMessage(error) {
  if (error instanceof ApiError) {
    if (error.isNetworkError) {
      return "Unable to connect. Please check your connection.";
    }
    if (error.data?.message) {
      return error.data.message;
    }
    if (error.status === 404) {
      return "Resource not found.";
    }
    if (error.status >= 500) {
      return "Server error. Please try again later.";
    }
    return error.message;
  }
  return error?.message || "Something went wrong.";
}

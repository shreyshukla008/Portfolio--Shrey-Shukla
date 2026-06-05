import { useState, useEffect, useCallback } from "react";

export function useAsync(asyncFn, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const execute = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const result = await asyncFn();
      setData(result);
      return result;
    } catch (err) {
      console.error(err);
      setError(true);
      return null;
    } finally {
      setLoading(false);
    }
  }, deps);

  useEffect(() => {
    execute();
  }, [execute]);

  return { data, loading, error, refetch: execute };
}

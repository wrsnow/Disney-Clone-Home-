import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [hasError, setHasError] = useState("");

  useEffect(() => {
    setHasError("");
    setData([]);
    setIsFetching(true);
    const cancelToken = new AbortController();
    const signal = cancelToken.signal;

    async function fetchData() {
      try {
        const res = await fetch(url, { signal });
        const data = await res.json();
        if (res.status >= 200 && res.status <= 299) {
          setData(data);
        } else {
          setHasError(res.statusText);
        }
      } catch (error) {
        setHasError(error.message);
      }
    }

    fetchData();

    return () => {
      cancelToken.abort();
    };
  }, []);

  return [data, isFetching, hasError];
}

export default useFetch;

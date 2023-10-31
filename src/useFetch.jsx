import { useState, useEffect } from "react";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    setTimeout(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw Error("Could not fetch the data for that resource.");
          }
          const data = await response.json();
          setData(data);
          setIsLoading(false);
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    }, 1000);
  }, [url]);

  return { data, isLoading, error, setData };
};

export default useFetch;

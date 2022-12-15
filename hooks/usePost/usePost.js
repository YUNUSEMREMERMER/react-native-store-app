import axios from "axios";
import { useState } from "react";

function usePost() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const post = async (url, apiData) => {
    try {
      setLoading(true);
      const { data: responseData } = await axios.post(url, apiData);
      setData(responseData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { data, error, loading, post };
}

export default usePost;

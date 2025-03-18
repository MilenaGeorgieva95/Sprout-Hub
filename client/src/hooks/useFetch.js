import { useEffect, useState } from "react";

export default function useFetch(url, defaultPosts = [], id) {
  const [state, setState] = useState(defaultPosts);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    setPending(true);
    const abortController = new AbortController();
    if (id) {
      url = url + id;
    }

    fetch(url, { signal: abortController.signal })
      .then((res) => res.json())
      .then((result) => {
        if (id) {
          setState(result);
        } else {
          setState(Object.values(result));
        }
      })
      .finally(() => {
        setPending(false);
      });

    return () => {
      abortController.abort();
    };
  }, [url]);

  return [pending, state];
}

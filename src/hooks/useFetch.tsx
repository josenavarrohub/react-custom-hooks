import * as React from "react";

// Types
type State<T> = {
  data: T | null;
  error: Error | null;
  loading: boolean;
};

type Action<T> =
  | { type: "FETCH_INIT" }
  | { type: "FETCH_SUCCESS"; payload: T }
  | { type: "FETCH_FAILURE"; payload: Error };

const reducer = <T,>(state: State<T>, action: Action<T>): State<T> => {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

/**
 * `useFetch` is a custom hook to fetch data from a given URL.
 *
 * @param url The URL to fetch data from.
 * @returns An object containing the fetched data, any error encountered, and the loading state.
 */
const useFetch = <T,>(url: string): State<T> => {
  // Initial state
  const initialState = React.useMemo<State<T>>(
    () => ({
      data: null,
      error: null,
      loading: true,
    }),
    []
  );

  // State
  const [state, dispatch] = React.useReducer(reducer<T>, initialState);

  React.useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });

      try {
        // Success
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: T = await response.json();
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        // Failure
        dispatch({
          type: "FETCH_FAILURE",
          payload:
            error instanceof Error
              ? error
              : new Error("An unknown error occurred"),
        });
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return state;
};

export default useFetch;

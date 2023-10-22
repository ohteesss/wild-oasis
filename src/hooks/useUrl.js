import { useSearchParams } from "react-router-dom";

export default function useUrl(queryName) {
  const [searchParams, setSearchParams] = useSearchParams();

  function setQuery(queryValue) {
    searchParams.set(queryName, queryValue);
    setSearchParams(searchParams);
  }

  const value = searchParams.get(queryName);

  return { value, setQuery };
}

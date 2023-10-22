import { useSearchParams } from "react-router-dom";
import Select from "./Select";
import useUrl from "../hooks/useUrl";

function SortBy({ options }) {
  const { value, setQuery } = useUrl("sortBy");
  const sortBy = value || "";
  function handleChange(e) {
    setQuery(e.target.value);
  }
  return (
    <Select
      options={options}
      value={sortBy}
      type="white"
      onChange={handleChange}
    />
  );
}

export default SortBy;

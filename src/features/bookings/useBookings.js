import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import useUrl from "../../hooks/useUrl";

export default function useBookings() {
  const { value: filterValue } = useUrl("status");
  const { value: sortValue } = useUrl("sortBy");

  // FILTER
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue, method: "eq" };

  // SORTBY
  const sortByRaw = sortValue || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };
  const {
    isLoading,
    data: bookings,
    status,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });

  return { isLoading, bookings, status, error };
}

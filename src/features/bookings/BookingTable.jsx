import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import useBookings from "./useBookings";
import useUrl from "../../hooks/useUrl";
import Pagination from "../../ui/Pagination";

function BookingTable() {
  // const bookings = [];
  // const { bookings, count, isLoading } = useBookings();
  const { isLoading, bookings, count } = useBookings();
  if (isLoading) return <Spinner />;
  if (!bookings.length) return <Empty resourceName="bookings" />;
  // const { value: urlStatusValue } = useUrl("status");
  // const { value: urlSortByValue } = useUrl("sortBy");
  // console.log(urlStatusValue);
  // console.log(urlSortByValue);
  // if (isLoading) return <Spinner />;
  // if (!bookings.length) return <Empty resourceName="bookings" />;
  // let filteredBookings;
  // if (urlStatusValue === "all") {
  //   filteredBookings = bookings;
  // } else {
  //   filteredBookings = bookings.filter(
  //     (booking) => booking.status === urlStatusValue
  //   );
  // }
  // // sorted
  // let sortedBookings;
  // const [field, order] = urlSortByValue.split("-");
  // const modifier = order === "asc" ? 1 : -1;
  // sortedBookings = filteredBookings.sort(
  //   (a, b) => (a[field] - b[field]) * modifier
  // );

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;

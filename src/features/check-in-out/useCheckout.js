import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export default function useCheckout() {
  const queryClient = useQueryClient();

  const { isLoading: isCheckingOut, mutate: checkout } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, { status: "checked-out" }),
    onSuccess: (data) => {
      toast.success(`Successfully checked-out Booking #${data.id}`);
      queryClient.invalidateQueries({
        active: true,
      });
    },
    onError: () => toast.error("There was an error while checking in"),
  });

  return { checkout, isCheckingOut };
}

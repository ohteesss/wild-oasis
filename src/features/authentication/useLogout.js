import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutapi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isLoading: isLoggingout, mutate: logout } = useMutation({
    mutationFn: logoutapi,
    onSuccess: () => {
      queryClient.removeQueries({
        queryKey: ["user"],
      });
      toast.success("Successfully Logged out");
      navigate("/login");
    },
  });
  return { isLoggingout, logout };
}

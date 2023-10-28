import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupapi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useSignUpPractice() {
  const queryClient = useQueryClient();
  const { isLoading, mutate: signup } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signupapi({ fullName, email, password }),
    onSuccess: (user) => {
      toast.success("Successfully Signed-up");
      queryClient.setQueryData(["user"], user.user);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, signup };
}

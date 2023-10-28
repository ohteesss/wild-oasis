import { useMutation } from "@tanstack/react-query";
import { signup as signupapi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useSignUp() {
  const { isLoading, mutate: signup } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signupapi({ fullName, email, password }),
    onSuccess: () => {
      toast.success("Successfully Signed-up");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, signup };
}

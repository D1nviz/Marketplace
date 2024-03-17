import { useRouter } from "next/navigation";
import { toast } from "sonner";

const useAuth = () => {
  const router = useRouter();
  
  const sigOut = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/logout`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        throw new Error();
      }
      router.push("/sign-in");
      router.refresh();
    } catch (error) {
      toast.error("Failed to sign out. Please try again.");
    }
  };
  return { sigOut };
};

export default useAuth;

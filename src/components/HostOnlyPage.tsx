import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../lib/useUsers";

export default function useHostOnlyPage() {
  const { userLoading, user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user?.is_host && !userLoading) {
      navigate("/");
    }
  }, [userLoading, user, navigate]);

  return;
}

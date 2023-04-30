import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../lib/useUsers";

interface IHostOnlyPage {
  children: React.ReactNode;
}
export default function HostOnlyPage({ children }: IHostOnlyPage) {
  const { userLoading, user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user?.is_host && !userLoading) {
      navigate("/");
    }
  }, [userLoading, user, navigate]);

  return <>{children}</>;
}

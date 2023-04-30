import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../lib/useUsers";

interface IProtectedPage {
  children: React.ReactNode;
}
export default function ProtectedPage({ children }: IProtectedPage) {
  const { userLoading, isLoggedIn } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userLoading && !isLoggedIn) {
      navigate("/");
    }
  }, [userLoading, isLoggedIn, navigate]);

  return <>{children}</>;
}

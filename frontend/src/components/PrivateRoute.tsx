"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") {
      return;
    }

    if (!session) {
      window.location.href = "/";
    }
  }, [session]);

  return <>{children}</>;
};

export default PrivateRoute;

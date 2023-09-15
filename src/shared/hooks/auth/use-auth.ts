import React, { useContext, useEffect } from "react";
import { getCookie, hasCookie } from "cookies-next";
import { useRouter, usePathname } from "next/navigation";
import { useNotifications } from "@/shared/hooks/notifications/use-notifications";
import { AuthContext } from "@/shared/utils/application/auth-reducer";
import { loginByToken } from "@/shared/services/auth";

export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const router = useRouter();
  const pathname = usePathname();
  const toasts = useNotifications();

  useEffect(() => {
    if (hasCookie("access-token") || hasCookie("refresh-token")) {
      loginByToken(getCookie("access-token") || getCookie("refresh-token"))
        .then((res) => {
          setUser(res);
        })
        .catch(() =>
          toasts.error({
            message: "No se ha podido iniciar sesión",
          }),
        );
    } else if (
      pathname === "/api/auth/signin" ||
      pathname === "/login/credentials-mail"
    ) {
      return;
    } else {
      setUser(null);
      toasts.error({
        message: "La sesión ha caducado, inicia sesión",
      });
      router.push(`/api/auth/signin`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { user };
};

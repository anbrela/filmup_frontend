"use client";
import { SessionProvider } from "next-auth/react";
import { UserProvider } from "@/shared/utils/application/auth-reducer";
export const AuthProvider = ({ children, session }: any) => {
  return (
    <SessionProvider session={session}>
      <UserProvider>{children}</UserProvider>
    </SessionProvider>
  );
};

"use client";
import React from "react";
import { Menu } from "@/components/content/menu/Menu";
import { usePathname } from "next/navigation";
import { useAuth } from "@/shared/hooks/auth/use-auth";

export const AppLayout = ({ children }: any) => {
  const pathname = usePathname();
  const { user } = useAuth();

  return (
    <div className="w-full h-screen flex relative">
      <Menu visible lang="es" pathname={pathname} />
      <div className="flex-grow">{children}</div>
    </div>
  );
};

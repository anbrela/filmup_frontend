import { Avatar } from "@/components/content/menu/components/avatar";
import { SidebarButton } from "@/components/content/menu/components/sidebar-button";
import React from "react";

const mockedUser = {
  username: "paunalo",
};

export const UserPanel = () => {
  return (
    <div className="px-8 py-10  relative">
      <Avatar user={mockedUser} />
    </div>
  );
};

import Link from "next/link";
import React from "react";
import { RouteChildren } from "@/components/content/menu/components/route-children";
import { MenuChevron } from "@/components/content/menu/components/menu-chevron";

export type Route = {
  id: number;
  path: string;
  icon?: any;
  children?: Route[];
  label: string;
};

type MenuRouteProps = {
  route: Route;
  formatMessage: any;
  pathname?: string;
  className?: string;
};

export const MenuRoute = ({
  route,
  pathname,
  formatMessage,
}: MenuRouteProps) => {
  return (
    <div className="flex flex-col space-y-2 relative">
      <div
        className={`w-full text-white flex items-center px-3 justify-between ${
          pathname === route?.path ? "bg-primary rounded-lg" : ""
        }`}
      >
        <Link
          key={route?.id}
          href={route?.path}
          className={`flex items-center justify-between space-x-2 font-medium text-white p-2 rounded px-4
        }`}
        >
          <div className={`flex items-center space-x-2`}>
            {route?.icon &&
              React.createElement(route?.icon, {
                className: "w-5 h-5",
              })}

            <span>{formatMessage(route?.label)}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

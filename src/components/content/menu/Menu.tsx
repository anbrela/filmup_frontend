import Link from "next/link";
import { useIntl } from "@/shared/hooks/intl/use-intl";
import { menuRoutes } from "@/components/content/menu/components/utils";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MenuRoute } from "@/components/content/menu/components/menu-route";
import React from "react";
import { UserPanel } from "@/components/content/menu/components/user-panel";
import { Logo } from "@/components/content/logo/logo";
import { useRouter } from "next/navigation";

type MenuProps = {
  visible: boolean;
  lang: string;
  pathname?: string;
};
export const Menu = ({ visible, lang, pathname }: MenuProps) => {
  const { formatMessage } = useIntl();
  const router = useRouter();

  if (!visible) {
    return null;
  }
  return (
    <div className={`w-56 sidebar h-screen bg-gray-800`}>
      <div className="h-full w-full flex flex-col justify-between">
        <div>
          <div className="w-full flex items-center justify-center">
            <Link href="/" className="relative h-full w-40 ">
              <Logo />
            </Link>
          </div>
          <div className="flex items-center justify-center mt-5">
            <div className="flex flex-col space-y-5 w-5/6 ">
              {menuRoutes({
                lang,
              })?.map((route) => (
                <MenuRoute
                  pathname={pathname}
                  key={route.id}
                  route={route}
                  formatMessage={formatMessage}
                />
              ))}
            </div>
          </div>
        </div>
        <UserPanel />
      </div>
    </div>
  );
};

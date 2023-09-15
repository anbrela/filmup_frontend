import React from "react";
import { BellIcon } from "@heroicons/react/24/outline";
type User = {
  username: string;
};

type AvatarProps = {
  user: User;
};

export const Avatar = ({ user }: AvatarProps) => {
  const initial = user?.username?.charAt(0) || "";

  return (
    <div
      className={`
      pt-6 flex space-y-3 flex-col`}
    >
      <div className={` flex flex-col items-center space-y-3 justify-center`}>
        <div
          className={`cursor-pointer hover:scale-110 w-20 h-20 rounded-full bg-secondary flex text-3xl items-center justify-center font-semibold`}
        >
          {initial}
        </div>
        <span className="font-bold text-white">{user?.username}</span>
      </div>
    </div>
  );
};

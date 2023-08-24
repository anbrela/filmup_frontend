import React from "react";

export const Row = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`grid gap-2 px-3 ${className}`}>{children}</div>;
};

import React from "react";

export const Row = ({
  children,
  className,
  noMargin,
}: {
  children: React.ReactNode;
  className?: string;
  noMargin?: boolean;
}) => {
  return (
    <div className={`grid gap-2 px-3 ${!noMargin ? "my-5" : ""} ${className}`}>
      {children}
    </div>
  );
};

import React from "react";

export type ButtonProps = {
  label: string;
  onClick?: any;
  disabled?: boolean;
  testId?: string;
  color?: "light" | "dark";
  kind?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  className?: string;
};

export const Button = ({
  label,
  onClick,
  testId,
  type,
  color,
  kind,
  className,
  disabled,
}: ButtonProps) => {
  const getKind = (type: string | undefined, color: string) => {
    if (type === "secondary" && (!color || color === "dark") && !disabled) {
      return "hover:text-primary text-sm  rounded shadow-sm uppercase font-medium text-white";
    }

    if (type === "secondary" && color === "light" && !disabled) {
      return "hover:text-primary text-sm uppercase font-medium text-gray-800";
    }

    if (disabled) {
      return "bg-gray-300 text-white  rounded shadow-sm";
    }

    return "bg-secondary uppercase  rounded shadow-sm text-sm font-medium text-gray-800 hover:bg-primary";
  };

  return (
    <button
      type={type || "button"}
      className={`p-3 px-4 ${getKind(kind, color)} ${className}`}
      data-testid={testId}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

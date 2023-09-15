type ColumnProps = {
  children: React.ReactNode;
  className?: string;
  size?: "large" | "medium" | "small";
};

export const Column = ({ children, className, size }: ColumnProps) => {
  const getSize = (size: string | undefined) => {
    switch (size) {
      case "large":
        return "col-span-3";
      case "medium":
        return "col-span-2";
      default:
        return "col-span-1";
    }
  };

  return <div className={`h-14 ${getSize(size)} ${className}`}>{children}</div>;
};

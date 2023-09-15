import { useIntl } from "@/shared/hooks/intl/use-intl";

type SearchFieldProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  clearable?: boolean;
};
export const SearchField = ({
  value,
  onChange,
  clearable,
  placeholder,
}: SearchFieldProps) => {
  const { formatMessage } = useIntl();

  return (
    <div className="w-full flex items-center justify-between pr-4">
      <input
        value={value}
        autoFocus
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-full bg-transparent max-w-3xl text-2xl outline-0 text-gray-600 truncate pr-8"
      />
      <div className="h-full flex items-center space-x-2">
        {clearable && value && (
          <div
            className="text-gray-600 text-xs cursor-pointer uppercase"
            onClick={() => onChange("")}
          >
            {formatMessage("search.clear")}
          </div>
        )}
      </div>
    </div>
  );
};

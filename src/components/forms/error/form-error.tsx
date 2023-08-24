export const FormError = ({ error }: { error: string }) => {
  if (!error) return null;

  return (
    <div className="absolute -bottom-6 left-0 text-xs text-red-400 font-semibold">
      {error}
    </div>
  );
};

export const Loader = ({ loaderRef }: any) => {
  return (
    <div
      ref={loaderRef}
      className="w-full h-full my-5 flex items-center justify-center animate-spin"
    >
      <div className="w-10 h-10 rounded-full border-l-2 border-primary" />
    </div>
  );
};

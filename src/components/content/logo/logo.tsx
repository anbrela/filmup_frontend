import { bowlvy } from "@/components/config/config-provider";

export const Logo = () => {
  return (
    <div
      className={`${bowlvy.className} w-full flex items-center p-5 text-4xl font-black justify-center`}
    >
      <span className="text-white">FILM</span>
      <span className="text-secondary">UP</span>
    </div>
  );
};

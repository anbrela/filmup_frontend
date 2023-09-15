"use client";
import LoginButtons from "@/components/forms/inputs/login-buttons";

export const HomePage = ({ locale }: { locale: string }) => {
  return (
    <div className="w-full h-full  flex items-center justify-center">
      <LoginButtons />
    </div>
  );
};

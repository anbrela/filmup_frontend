"use client";
import React, { useState } from "react";
import background from "@/assets/images/background.jpg";
import { useSearchParams } from "next/navigation";
import { NewAppForm } from "@/views/auth/new-account/components/new-app-form";
import { createAccount } from "@/shared/services/auth";
import { useNotifications } from "@/shared/hooks/notifications/use-notifications";
export const NewAppAccount = () => {
  const searchParams = useSearchParams();
  const toasts = useNotifications();
  const email = searchParams.get("email");
  const [values, setValues] = useState({
    email,
  });

  const onSubmit = (values: any) => {
    createAccount({
      data: values,
    })
      .then((res) => console.log("res", res))
      .catch((err) => toasts.error(err.message));
  };

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <NewAppForm values={values} setValues={setValues} onSubmit={onSubmit} />
    </div>
  );
};

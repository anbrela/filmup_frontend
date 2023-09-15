"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { loginByToken } from "@/shared/services/auth";
import { Loader } from "@/components/content/loader/loader";
const Login = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const token = searchParams.get("token");

  useEffect(() => {
    if (token) {
      loginByToken(token)
        .then(() => {
          router.push("/");
        })
        .finally(() => setLoading(false));
    }
  }, [token]);

  if (loading) {
    return <Loader />;
  }

  return <div>hello</div>;
};

export default Login;

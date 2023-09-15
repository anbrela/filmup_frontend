import { get, post } from "@/shared/utils/api";

export const authenticate = async (email: any) => {
  return post({
    url: "/api/signin",
    body: {
      email,
    },
  });
};

export const appAuthenticate = async (email: any) => {
  return post({
    url: "/api/appsignin",
    body: {
      email,
    },
  }).then((res) => res?.json());
};

export const loginByToken = async (token: any) => {
  return get(`/api/loginbytoken?token=${token}`).then((res) => res?.json());
};

export const createAccount = async ({
  data,
}: {
  data: {
    email: string;
    username: string;
  };
}) => {
  return post({
    url: "/api/signup",
    body: data,
  });
};

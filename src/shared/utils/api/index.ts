import { fetcher } from "@/shared/utils/api/utils";

export const get = async (url: string, params?: any) => {
  return await fetcher(url, {
    method: "GET",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    ...params,
  });
};

export const post = async ({ url, body }: any) => {
  return await fetcher(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

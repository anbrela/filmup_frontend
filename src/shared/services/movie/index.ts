import { get } from "@/shared/utils/api";

export const searchMovies = (query: string) => {
  return get(`/api/movies/search?query=${query}`).then((res) => res.json());
};

export const getMovie = (id: string) => {
  return get(`/api/movies/${id}`).then((res) => res.json());
};

export const getPopular = ({ page }: { page: number }) => {
  return get(`/api/movies/popular?page=${page}`).then((res) => res.json());
};

export const getProviders = () => {
  return get(`/api/movies/providers`).then((res) => res.json());
};

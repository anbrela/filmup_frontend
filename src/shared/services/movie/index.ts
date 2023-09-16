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

type discoverProps = {
  page: number;
  providers?: string;
}

export const discoverMovies = ({page, providers}: discoverProps) => {

  if(providers) {
    return get(`/api/movies/discover?page=${page}&providers=${providers}`).then((res) => res.json());
  }
  return get(`/api/movies/discover?page=${page}`).then((res) => res.json());
}
import { Poster } from "@/components/movie/poster/poster";
import React from "react";

type SearchedMoviesProps = {
  movies: any[];
  loading: boolean;
};

export const SearchedMovies = ({ movies, loading }: SearchedMoviesProps) => {
  if (loading) {
    return (
      <div className="flex items-center">
        <div className="bg-gray-500 w-44 h-64 animate-pulse  m-2" />
        <div className="bg-gray-500 w-44 h-64 animate-pulse  m-2" />
        <div className="bg-gray-500 w-44 h-64 animate-pulse m-2" />
      </div>
    );
  }

  return movies.map((movie) => (
    <div key={movie?.movieId} className="m-2">
      <Poster posterPath={movie?.poster_path} title={movie?.title} />
    </div>
  ));
};

import { Poster } from "@/components/movie/poster/poster";
import React, { useContext } from "react";
import { Loader } from "@/components/content/loader/loader";
import Link from "next/link";
import { MovieContext } from "@/shared/utils/application/movie-reducer";

type SearchedMoviesProps = {
  movies: any[];
  loading: boolean;
  loaderRef: any;
};

export const SearchedMovies = ({ movies, loaderRef }: SearchedMoviesProps) => {
  const { setPanelVisible } = useContext(MovieContext);
  //todo: Responsive grid
  return (
    <div className="overflow-scroll h-full w-full ">
      <div className="my-2 px-2">
        <p>
          Es dificil escoger película si sólo salen las que ya has visto. Prueba
          nuestro
          <span
            className="ml-1 text-primary font-semibold hover:scale-125 hover:text-red-300 cursor-pointer"
            onClick={() => setPanelVisible(true)}
          >
            MovieLiker 3.000
          </span>
        </p>
      </div>
      <div className="grid grid-flow-row grid-cols-6 grid-rows-auto gap-2">
        {movies.map((movie) => {
          if (!movie?.poster_path && !movie?.posterPath) {
            return null;
          }
          return (
            <div key={movie?.id} className="m-2">
              <Poster movie={movie} />
            </div>
          );
        })}
      </div>
      <div className="my-4 w-full flex items-center justify-center">
        <Loader loaderRef={loaderRef} />
      </div>
    </div>
  );
};

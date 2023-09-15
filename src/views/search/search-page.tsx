"use client";
import React, { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { SearchField } from "@/components/forms/inputs/search-field/search-field";
import { searchMovies } from "@/shared/services/movie";
import { SearchedMovies } from "@/views/search/components/searched-movies";
import { MoviePanel } from "@/components/movie/movie-panel/movie-panel";

export const SearchPage = () => {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (query.length > 2) {
      setLoading(true);
      searchMovies(query)
        .then((res) => setMovies(res.results))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [query]);

  return (
    <div className="h-full w-full p-10 flex flex-col overflow-hidden">
      <div className="w-full flex items-center justify-center space-x-2">
        <MagnifyingGlassIcon className="w-10 h-10 text-gray-400 mr-3" />
        <SearchField
          placeholder="Busca una película para añadirla"
          clearable
          value={query}
          onChange={setQuery}
        />
      </div>
      <SearchedMovies movies={movies} loading={loading} />
    </div>
  );
};

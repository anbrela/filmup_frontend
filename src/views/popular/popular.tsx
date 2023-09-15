"use client";
import React, { useEffect, useRef } from "react";
import { SearchedMovies } from "@/views/search/components/searched-movies";
import { getPopular } from "@/shared/services/movie";

export const Popular = () => {
  const [movies, setMovies] = React.useState([]);
  const loaderRef = useRef(null);
  const wrapperRef = useRef(null);
  const [loading, setLoading] = React.useState(true);
  const [gettingData, setGettingData] = React.useState(false);
  const [pagination, setPagination] = React.useState({
    page: 1,
    total_pages: 0,
    total_results: 0,
  });

  const getData = ({ page }: { page: number }) => {
    getPopular({ page })
      .then((res) => {
        if (movies.length) {
          setMovies([...movies, ...res?.results] as any);
        } else {
          setMovies(res?.results);
        }
        setPagination({
          page: res?.page,
          total_pages: res?.total_pages,
          total_results: res?.total_results,
        });
        setLoading(false);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setTimeout(() => {
          setGettingData(false);
        }, 400);
      });
  };

  useEffect(() => {
    // Crear una instancia del Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          ((pagination?.page > 1 &&
            pagination?.page < pagination?.total_pages) ||
            pagination?.page === 1) &&
          !gettingData
        ) {
          setGettingData(true);
          getData({ page: pagination.page + 1 });
        }
      });
    });

    if (loaderRef?.current) {
      observer.observe(loaderRef?.current as any);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };

    //eslint-disable-next-line
  }, [loaderRef, pagination?.page, gettingData]);

  return (
    <div
      className="h-full w-full p-10 flex flex-col overflow-hidden"
      ref={wrapperRef}
    >
      <SearchedMovies movies={movies} loading={loading} loaderRef={loaderRef} />
    </div>
  );
};

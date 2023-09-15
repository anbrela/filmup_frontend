"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Poster } from "@/components/movie/poster/poster";
import { useParams } from "next/navigation";
import { getMovie } from "@/shared/services/movie";
import { useNotifications } from "@/shared/hooks/notifications/use-notifications";
import { Loader } from "@/components/content/loader/loader";

type Movie = {
  id: string;
  title: string;
  posterPath: string;
};

export const Movie = () => {
  const { id, locale }: any = useParams();
  const [movie, setMovie] = React.useState<Movie | null>(null);
  const [loading, setLoading] = React.useState(true);
  const toasts = useNotifications();

  useEffect(() => {
    if (id) {
      getMovie(id)
        .then((res) => {
          setMovie(res);
          setLoading(false);
        })
        .catch(() =>
          toasts.error({
            message: "No se ha podido cargar la película",
          }),
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.95, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full p-10 flex flex-col bg-gray-100"
    >
      <div className="w-full flex items-center">
        <Poster size="large" movie={movie} locale={locale} />
        <div className="px-8 flex h-full flex-col space-y-5">
          <span className="text-3xl font-semibold">{movie?.title}</span>
          <div className="flex items-center flex-wrap">
            <div className="p-5 rounded-lg m-2 h-32 w-52 bg-primary shadow flex flex-col space-y-2 items-center justify-center">
              <span className="uppercase text-semibold">veces vista</span>
              <span className="font-black text-gray-50 text-2xl">
                2415123512
              </span>
            </div>
            <div className="p-5 m-2 rounded-lg h-32 w-52 bg-primary shadow flex flex-col space-y-2 items-center justify-center">
              <span className="uppercase text-semibold">la has visto</span>
              <span className="font-black text-gray-50 text-2xl">23</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

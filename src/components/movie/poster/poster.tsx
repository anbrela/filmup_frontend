import Image from "next/image";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ViewfinderCircleIcon } from "@heroicons/react/24/outline";
import { MovieContext } from "@/shared/utils/application/movie-reducer";
import Link from "next/link";

export const getPosterSize = (posterSize: any) => {
  switch (posterSize) {
    case "small":
      return "w-40 h-56";
    case "medium":
      return "w-48 h-72";
    case "large":
      return "w-72 h-96";
    case "xxl":
      return "xxl_poster bg-red-500";
    default:
      return "w-40 h-56";
  }
};

export const getPosterQuality = (posterSize: any) => {
  switch (posterSize) {
    case "original":
      return process.env.NEXT_PUBLIC_TMDB_IMAGE_URL_original;
    case "large":
      return process.env.NEXT_PUBLIC_TMDB_IMAGE_URL_w500;
    default:
      return process.env.NEXT_PUBLIC_TMDB_IMAGE_URL_w342;
  }
};

type PosterProps = {
  movie: any;
  size?: "small" | "medium" | "large" | "xxl" | null;
  locale?: string;
};
export const Poster = ({ movie, size, locale }: PosterProps) => {
  return (
    <div className={`${getPosterSize(size)} relative flex`}>
      {size == "xxl" ? null : (
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className={`${
            size === "large" ? "hidden" : "w-full h-full absolute z-10"
          }`}
        >
          <div className="w-full absolute h-full z-10 flex items-center justify-center">
            <Link href={`/${locale}/movies/${movie?.id}`}>
              <ViewfinderCircleIcon className="w-10 h-10 hover:scale-110 cursor-pointer text-gray-50" />
            </Link>
          </div>

          <div className="bg-primary w-full h-full opacity-60" />
        </motion.div>
      )}
      <Image
        src={`${getPosterQuality(size)}${
          movie?.posterPath || movie?.poster_path
        }`}
        alt={movie?.title}
        loading="lazy"
        layout="fill"
      />
    </div>
  );
};

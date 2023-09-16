import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

import Image from "next/image";
import { Poster, getPosterQuality } from "../../poster/poster";
import { log } from "console";

type MovieWrapperProps = {
  movies: any[];
  setMovies: any;
};

export const MovieWrapper = ({ movies, setMovies }: MovieWrapperProps) => {
  const controls = useAnimation();

  const posterRef = useRef<any>(null);

  const [controlled, setControlled] = useState<Boolean>(true);
  const [posterX, setPosterX] = useState<number>(0);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    setHasVoted(false);
    setControlled(true);
    if (posterRef.current) {
      const posterPosition = posterRef.current.getBoundingClientRect();
      const posterCenter = posterPosition.x + posterPosition.width / 2;
      console.log("posterCenter", posterCenter);
      setPosterX(posterCenter);
    }
  }, [posterRef, movies]);

  const getVote = (direction: string) => {
    setControlled(true);
    if (hasVoted) {
      return; // Salir si ya se ha votado
    }

    setHasVoted((prevHasVoted) => {
      if (prevHasVoted) {
        return prevHasVoted; // No cambia el estado
      }

      if (direction === "right") {
        console.log("viewed");
      } else {
        console.log("not viewed");
      }

      const newMovies = movies.filter(
        (_, index, array) => index !== array.length - 1
      );
      setMovies(newMovies);

      return true;
    });
  };

  console.log("movies", movies.length);

  const flyAway = ({ direction }: any) => {
    const flyAwayDistance = (direction: string) => {
      const parentWidth =
        posterRef?.current?.parentNode?.getBoundingClientRect().width;
      const childWidth = posterRef?.current?.getBoundingClientRect().width;
      getVote(direction);
      return direction === "left"
        ? -parentWidth / 2 - childWidth / 2
        : parentWidth / 2 + childWidth / 2;
    };

    if (direction && controlled) {
      controls.start({
        translateX: flyAwayDistance(direction),
      });
      setControlled(false);
    }
  };

  type GetDragDirectionProps = {
    x: number;
    minValue: number;
    itsDraggable: boolean;
  };

  const getDragDirection = ({
    x,
    minValue,
    itsDraggable,
  }: GetDragDirectionProps) => {
    if (!itsDraggable || hasVoted) {
      return;
    }
    if (x > posterX + minValue) {
      flyAway({ direction: "right" });
    } else if (x < posterX - minValue) {
      flyAway({ direction: "left" });
    }
  };

  return (
    <div className="w-full relative h-full flex items-center justify-center overflow-hidden">
      {movies.map((movie, index, array) => {
        const itsDraggable = index === array.length - 1;
        return (
          <motion.div
            className={`xxl_poster absolute flex bg-red-500 ${
              itsDraggable ? "z-10" : "z-0"
            }`}
            key={movie?.id}
            ref={itsDraggable ? posterRef : null}
            drag={itsDraggable ? "x" : false}
            animate={itsDraggable ? controls : {}}
            whileTap={{ scale: 1.1 }}
            dragElastic={1}
            dragConstraints={
              controlled ? { top: 0, bottom: 0, left: 0, right: 0 } : {}
            }
            onDrag={(_, info) =>
              controlled &&
              getDragDirection({
                x: info.point.x,
                minValue: 300,
                itsDraggable,
              })
            }
            style={{
              backgroundImage: `url(${getPosterQuality("xxl")}${
                movie?.posterPath || movie?.poster_path
              })`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        );
      })}
    </div>
  );
};

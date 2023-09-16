import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {
  HandThumbDownIcon,
  HeartIcon,
  InformationCircleIcon,
  QueueListIcon,
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  EyeSlashIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { getPosterQuality } from "../../poster/poster";
import { flyAway, getDragDirection, stateVariants } from "./utils";
import { getVote } from "./utils";

type MovieWrapperProps = {
  movies: any[];
  removeMovie: any;
};

export const MovieWrapper = ({ movies, removeMovie }: MovieWrapperProps) => {
  const controls = useAnimation();

  const posterRef = useRef<any>(null);

  const [controlled, setControlled] = useState<boolean>(true);
  const [posterX, setPosterX] = useState<number>(0);
  const [dragState, setDragState] = useState<any>("center");
  const [hasVoted, setHasVoted] = useState<any>({
    voted: false,
    movie: null,
  });

  useEffect(() => {
    setHasVoted({
      voted: false,
      movie: null,
    });
    setControlled(true);
    if (posterRef.current) {
      const posterPosition = posterRef.current.getBoundingClientRect();
      const posterCenter = posterPosition.x + posterPosition.width / 2;
      setPosterX(posterCenter);
    }
  }, [posterRef, movies, dragState]);

  console.log("dragState", dragState);

  useEffect(() => {
    if (hasVoted.voted) {
      removeMovie(hasVoted.movie);
    }
  }, [hasVoted]);

  return (
    <AnimatePresence>
      <div
        ref={posterRef}
        className="w-full relative h-full  flex items-center justify-center overflow-x-hidden"
      >
        <div className="absolute -top-3 w-full my-4 flex items-center justify-center space-x-2">
          <div>
            <EyeSlashIcon className="w-8 h-8 text-red-300" />
          </div>
          <div className="flex items-center space-x-4">
            <ArrowLongLeftIcon className="w-8 h-8 text-gray-400" />
            <span className="text-gray-400">¿La has visto?</span>
            <ArrowLongRightIcon className="w-8 h-8 text-gray-400" />
          </div>
          <div>
            <EyeIcon className="w-8 h-8 text-green-200" />
          </div>
        </div>
        {movies.map((movie, index, array) => {
          const itsDraggable = index === array.length - 1;

          return (
            <div
              className="absolute h-full z-10 flex flex-col space-y-3 justify-center items-center"
              key={movie?.id}
            >
              <motion.div
                className={`xxl_poster cursor-pointer flex `}
                drag={itsDraggable ? "x" : false}
                animate={itsDraggable ? controls : {}}
                dragPropagation={itsDraggable}
                whileTap={{ scale: 1.1 }}
                dragElastic={1}
                dragConstraints={
                  controlled ? { top: 0, bottom: 0, left: 0, right: 0 } : {}
                }
                onDragEnd={(_, info) =>
                  flyAway({
                    x: info.point.x,
                    posterX,
                    id: movie?.id,
                    posterRef,
                    getVote,
                    controls,
                    minValue: 100,
                    setControlled,
                    controlled,
                    hasVoted,
                    setHasVoted,
                    setDragState,
                  })
                }
                onDrag={(_, info) =>
                  controlled &&
                  getDragDirection({
                    x: info.point.x,
                    posterX,
                    itsDraggable,
                    minValue: 100,
                    hasVoted,
                    setDragState,
                  })
                }
                style={{
                  backgroundImage: `url(${getPosterQuality("original")}${
                    movie?.posterPath || movie?.poster_path
                  })`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                {itsDraggable && (
                  <motion.div
                    variants={stateVariants}
                    animate={dragState}
                    className="h-full absolute z-50 left-0 top-0 w-full right-0 flex items-center justify-center"
                  />
                )}
              </motion.div>
              <div className="w-full flex items-center justify-around">
                <HandThumbDownIcon className="w-6 h-6 text-gray-400 cursor-pointer hover:scale-125" />
                <HeartIcon className="w-6 h-6 text-gray-400 cursor-pointer hover:scale-125" />
                <InformationCircleIcon className="w-6 h-6 text-gray-400 cursor-pointer hover:scale-125" />
                <QueueListIcon className="w-6 h-6 text-gray-400 cursor-pointer hover:scale-125" />
              </div>
            </div>
          );
        })}
      </div>
    </AnimatePresence>
  );
};

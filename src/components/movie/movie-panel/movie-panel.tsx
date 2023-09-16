import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Poster } from "@/components/movie/poster/poster";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { getProviders } from "@/shared/services/movie";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useNotifications } from "@/shared/hooks/notifications/use-notifications";
import { Providers } from "@/components/movie/movie-panel/components/providers";
import { format } from "path";
import { formatProviders } from "./components/utils";
import { log } from "console";
import TinderCard from "react-tinder-card";

type MoviePanelProps = {
  movie: any;
  visible: boolean;
  setPanelVisible: any;
};

export const MoviePanel = ({ visible, setPanelVisible }: MoviePanelProps) => {
  const [movies, setMovies] = useState<any[]>([]);
  const [providers, setProviders] = useState<any[]>([]);
  const [selectedProviders, setSelectedProviders] = useState<any[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const providersQuery = searchParams.get("providers");

  const toasts = useNotifications();

  useEffect(() => {
    if (visible) {
      getProviders()
        .then((res) => setProviders(res))
        .catch(() =>
          toasts.error({
            message: "Error al recibir los proveedores",
          })
        );
    }
  }, [visible]);

  useEffect(() => {
    const selectedProviders = providersQuery?.split(",");
    const parsedProviders = selectedProviders?.map((id) => parseInt(id));
    if (parsedProviders?.length || parsedProviders?.length === 0) {
      setSelectedProviders(parsedProviders);
    }

    if (!providersQuery) {
      setSelectedProviders([]);
    }
  }, [providers, providersQuery]);

  const movie = {};

  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  if (!visible) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.95, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute w-full h-full bg-gray-900 z-30 flex flex-col space-y-2"
    >
      <div className="w-full flex items-center justify-between p-7">
        <Providers
          providers={providers}
          onClick={(id: number) => {
            const params = formatProviders({
              searchParams,
              selectedProviders,
              id,
            });
            router.push(`${pathname}?${params}`);
          }}
          selectedProviders={selectedProviders}
        />

        <XMarkIcon
          className="w-10 h-10 text-gray-100 cursor-pointer hover:scale-125"
          onClick={() => setPanelVisible(false)}
        />
      </div>

      <div className="w-4/6 flex items-center">
        <TinderCard
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen("fooBar")}
          preventSwipe={["right", "left"]}
        >
          {" "}
          <Poster size="large" movie={movie} />
        </TinderCard>
      </div>
    </motion.div>
  );
};

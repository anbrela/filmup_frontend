import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Poster } from "@/components/movie/poster/poster";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { discoverMovies, getProviders } from "@/shared/services/movie";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useNotifications } from "@/shared/hooks/notifications/use-notifications";
import { Providers } from "@/components/movie/movie-panel/components/providers";
import { formatProviders } from "./components/utils";
import { MovieWrapper } from "./components/movie-wrapper";

type MoviePanelProps = {
  movie: any;
  visible: boolean;
  setPanelVisible: any;
};

export const MoviePanel = ({ visible, setPanelVisible }: MoviePanelProps) => {
  const [movies, setMovies] = useState<any[]>([]);
  const [providers, setProviders] = useState<any[]>([]);
  const [selectedProviders, setSelectedProviders] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
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
    if (providersQuery) {
      discoverMovies({ page, providers: providersQuery })
        .then((res) => {
          setMovies(res.results);
          setPage(res?.page);
        })
        .catch(() =>
          toasts.error({
            message: "Error al recibir las películas",
          })
        );
    }
  }, [providersQuery]);

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

  if (!visible) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute w-full h-full bg-gray-900 z-30 flex flex-col space-y-2 items-center"
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

      <MovieWrapper movies={movies} setMovies={setMovies} />
    </motion.div>
  );
};

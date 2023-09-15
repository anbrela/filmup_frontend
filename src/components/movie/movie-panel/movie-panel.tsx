import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Poster } from "@/components/movie/poster/poster";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { getProviders } from "@/shared/services/movie";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useNotifications } from "@/shared/hooks/notifications/use-notifications";
import { Providers } from "@/components/movie/movie-panel/components/providers";
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
          }),
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
            const allParams = searchParams.entries();
            const obj = Object.fromEntries(allParams);

            if (selectedProviders.includes(id)) {
              const filteredProviders = selectedProviders.filter(
                (providerId) => providerId !== id,
              );
              if (filteredProviders.length) {
                obj.providers = filteredProviders.join(",");
              } else {
                delete obj.providers;
              }
            } else {
              obj.providers = [...selectedProviders, id].join(",");
            }

            const params = new URLSearchParams(obj);
            router.push(`${pathname}?${params.toString()}`);
          }}
          selectedProviders={selectedProviders}
        />
        <XMarkIcon
          className="w-10 h-10 text-gray-100 cursor-pointer hover:scale-125"
          onClick={() => setPanelVisible(false)}
        />
      </div>

      <div className="w-4/6 flex items-center">
        <Poster size="large" movie={movie} />
      </div>
    </motion.div>
  );
};

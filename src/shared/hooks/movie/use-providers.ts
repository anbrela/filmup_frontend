import { getProviders } from "@/shared/services/movie";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";

type ProviderProps = {
    visible: boolean;
    toasts: any;
}

export const useProviders = ({visible, toasts}: ProviderProps) => {

    const searchParams = useSearchParams();
    const [providers, setProviders] = useState<any[]>([]);
    const [selectedProviders, setSelectedProviders] = useState<any[]>([]);
  
    const providersQuery = searchParams.get("providers");

    useEffect(() => {
        if (visible) {
          getProviders()
            .then((res: any) => setProviders(res))
            .catch(() =>
              toasts.error({
                message: "Error al recibir los proveedores",
              })
            );
        }
      }, [visible]);


    
      useEffect(() => {
        const selectedProviders = providersQuery?.split("|");
        const parsedProviders = selectedProviders?.map((id) => parseInt(id));
        if (parsedProviders?.length || parsedProviders?.length === 0) {
          setSelectedProviders(parsedProviders);
        }
    
        if (!providersQuery) {
          setSelectedProviders([]);
        }
      }, [providers, providersQuery]);

    return {
        providers,
        searchParams,
        providersQuery,
        selectedProviders
    }
}
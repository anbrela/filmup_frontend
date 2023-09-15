import Image from "next/image";
import React from "react";

type ProvidersProps = {
  providers: any[];
  selectedProviders: any[];
  onClick: any;
};
export const Providers = ({
  providers,
  selectedProviders,
  onClick,
}: ProvidersProps) => {
  return (
    <div className="flex items-center ">
      {providers.map(({ provider_id, logo_path, provider_name }: any) => (
        <div
          className={`relative cursor-pointer rounded-lg overflow-hidden w-10 h-10 mx-2 flex ${
            selectedProviders.includes(provider_id)
              ? "border-4 border-primary"
              : ""
          }`}
          onClick={() => onClick(provider_id)}
          key={provider_id}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL_w342}${logo_path}`}
            alt={provider_name}
            layout="fill"
          />
        </div>
      ))}
    </div>
  );
};

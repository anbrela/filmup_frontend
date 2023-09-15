"use client";
import { createContext, useState } from "react";
import { MoviePanel } from "@/components/movie/movie-panel/movie-panel";

type MovieContextProps = {
  visible: boolean;
  setPanelVisible: any;
};

export const MovieContext = createContext<MovieContextProps>({
  visible: false,
  setPanelVisible: null,
});

export const MovieProvider = ({ children }: any) => {
  const [panelVisible, setPanelVisible] = useState<any>(true);

  return (
    <MovieContext.Provider value={{ setPanelVisible, visible: panelVisible }}>
      <MoviePanel visible={panelVisible} setPanelVisible={setPanelVisible} />
      {children}
    </MovieContext.Provider>
  );
};

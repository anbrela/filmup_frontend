"use client";
import React from "react";
import { Poppins, Cairo_Play, Bowlby_One_SC } from "@next/font/google";

import { registerLocale, setDefaultLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import en from "date-fns/locale/en-GB";

registerLocale("es", es);
registerLocale("en", en);

setDefaultLocale("es");

export const ConfigContext = React.createContext({});

type Props = {
  children: React.ReactNode;
};

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const bowlvy = Bowlby_One_SC({
  subsets: ["latin"],
  weight: ["400"],
});

export const ConfigProvider = ({ children }: Props) => {
  return (
    <ConfigContext.Provider value={{}}>
      <div className={poppins.className}>{children}</div>
    </ConfigContext.Provider>
  );
};

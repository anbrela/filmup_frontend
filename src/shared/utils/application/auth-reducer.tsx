import { createContext, useState } from "react";

export type User = {
  id: string;
  username: string;
  email: string;
  roles?: string[];
};

type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};
export const AuthContext = createContext({
  user: null,
  setUser: (user: User | null) => {},
} as AuthContextType);

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

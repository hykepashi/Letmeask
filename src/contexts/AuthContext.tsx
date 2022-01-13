//react
import { createContext, useState, useEffect, ReactNode } from "react";

// auth
import { auth } from "../services/firebase";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";

type AuthContextProviderProps = {
  children: ReactNode;
};

type User = {
  id: string;
  name: string;
  avatar: string;
};

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL) {
          throw new Error("erro");
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    const result = await signInWithPopup(auth, provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error("erro");
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {props.children}
    </AuthContext.Provider>
  );
}

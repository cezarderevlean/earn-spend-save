import { BuddyProps } from "@/components/Buddy";
import React, { createContext, useContext, useState } from "react";

interface MyContextState {
  boardingComplete: boolean;
  setBoardingComplete: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  pet: BuddyProps["type"] | null;
  setPet: React.Dispatch<React.SetStateAction<BuddyProps["type"] | null>>;
}

const MyContext = createContext<MyContextState | undefined>(undefined);

const useStore = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};

interface Props {
  children: React.ReactNode;
}

function MyContextProvider({ children }: Props): JSX.Element {
  const [boardingComplete, setBoardingComplete] = useState(false);
  // const [boardingComplete, setBoardingComplete] = useState(true);
  const [name, setName] = useState("");
  const [pet, setPet] = useState<BuddyProps["type"] | null>(null);

  const contextValue: MyContextState = {
    boardingComplete,
    setBoardingComplete,
    name,
    setName,
    pet,
    setPet,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}

export { MyContextProvider, useStore };

"use client"
import { createContext, ReactNode, useContext, useState } from "react";

const GlobalStateContext = createContext<{
  closeNav: () => void,
  openNav: () => void,
  isNavOpen: boolean
} | null>(null);

export function useGlobalStateContext() {
  return useContext(GlobalStateContext);
}

export default function GlobalStateProvider({ children }: { children: ReactNode }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  function closeNav() { setIsNavOpen(false); }
  function openNav() { setIsNavOpen(true); }
  return (
    <GlobalStateContext.Provider value={{ isNavOpen, closeNav, openNav }}>
      {children}
    </GlobalStateContext.Provider>
  )
}

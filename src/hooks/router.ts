import { createContext } from "react";

// Create a context for the router
export const RouterContext = createContext<{
  navigate: (to: string) => void;
  currentPath: string;
}>({
  navigate: () => {},
  currentPath: "",
});

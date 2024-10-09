import React from "react";
import { RouterContext } from "./router";

/**
 * A custom hook for accessing the navigation function from the BrowserRouter context.
 *
 * @returns {Function} The navigate function for navigating to different routes.
 * @throws {Error} If used outside the BrowserRouter context.
 * @example
 *
 * const navigate = useNavigation();
 * navigate('/login');
 */
const useNavigation = () => {
  const context = React.useContext(RouterContext);
  if (!context) {
    throw new Error("useNavigation must be used within a BrowserRouter");
  }
  return context.navigate;
};

export default useNavigation;

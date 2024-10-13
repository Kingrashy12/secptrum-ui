import React from "react";
import { RouterContext } from "../../hooks/router";

interface BrowserRouterProps {
  children: React.ReactNode;
}
/**
 * BrowserRouter component for handling client-side routing.
 *
 * This component provides a routing context for its children,
 * allowing navigation between different views without full page reloads.
 * It uses the HTML5 history API to update the URL and keep the UI in sync with the current route.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered within the router context.
 *
 * @example
 * <BrowserRouter>
 *   <App />
 * </BrowserRouter>
 */

const BrowserRouter: React.FC<BrowserRouterProps> = ({ children }) => {
  const [currentPath, setCurrentPath] = React.useState(
    window.location.pathname
  );

  React.useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => window.removeEventListener("popstate", onLocationChange);
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <RouterContext.Provider value={{ navigate, currentPath }}>
      {children}
    </RouterContext.Provider>
  );
};

export default BrowserRouter;

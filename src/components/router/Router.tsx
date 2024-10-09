import React from "react";
import { RouterContext } from "../../hooks/router";

interface Route {
  path: string;
  element: React.ReactNode;
}

interface RouterProps {
  routes: Route[];
}
/**
 * Router component for handling navigation between different views.
 *
 * This component uses the RouterContext to determine the current route
 * and render the corresponding element.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Route[]} props.routes - The routes to be rendered.
 *
 * @note This component is used within a BrowserRouter.
 *
 * @example
 *
 * const routes = [
 *   { path: "/", element: <Home /> },
 *   { path: "/about", element: <About /> },
 * ];
 *
 * <BrowserRouter>
 *   <Router routes={routes} />
 * </BrowserRouter>
 */
const Router: React.FC<RouterProps> = ({ routes }) => {
  const { currentPath } = React.useContext(RouterContext);
  const currentRoute = routes.find((route) => route.path === currentPath);

  return (
    <div>{currentRoute ? currentRoute.element : <div>404: Not Found</div>}</div>
  );
};

export default Router;

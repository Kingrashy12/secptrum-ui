type RouterType = {
  /**
   * The query parameters from the current URL.
   */
  query: URLSearchParams;
  /**
   * An object containing route parameters.
   */
  params: Record<string, string>;
  /**
   * The current pathname of the URL.
   */
  pathname: string;
  /**
   * The hash portion of the current URL.
   */
  hash: string;
  /**
   * A function to reload the current page.
   */
  reload: () => void;
  /**
   * A function to replace the current URL.
   */
  replace: (path: string) => void;
  /**
   * A function to navigate to a new URL.
   */
  push: (path: string) => void;
  /**
   * A function to get a parameter value by name.
   */
  getParam: (name: string) => string | null;
};

type RouterContextType = {
  /**
   * The router object with various properties and methods.
   */
  router: RouterType;
};

/**
 * Custom hook for managing routing functionality.
 *
 * @returns {RouterContextType} An object containing the router instance.
 *
 * @property {RouterType} router - The router object with various properties and methods.
 * @property {URLSearchParams} router.query - The query parameters from the current URL.
 * @property {Record<string, string>} router.params - An object containing route parameters.
 * @property {string} router.pathname - The current pathname of the URL.
 * @property {string} router.hash - The hash portion of the current URL.
 * @property {() => void} router.reload - A function to reload the current page.
 * @property {(path: string) => void} router.replace - A function to replace the current URL.
 * @property {(path: string) => void} router.push - A function to navigate to a new URL.
 * @property {(name: string) => string | null} router.getParam - A function to get a parameter value by name.
 *
 * @example
 * const { router } = useRouter();
 * console.log(router.pathname); // Current path
 * console.log(router.query.get('id')); // Get query parameter
 * console.log(router.params.userId); // Get route parameter
 * router.push('/new-page'); // Navigate to a new page
 */

const useRouter = (): RouterContextType => {
  const { pathname, search, hash } = window.location;
  const query = new URLSearchParams(search);

  const extractParams = (): Record<string, string> => {
    const params: Record<string, string> = {};
    const pathSegments = pathname.split('/').filter(Boolean);

    pathSegments.forEach((segment, index) => {
      // Assume any segment that's not a common word could be a parameter
      if (!/^[a-z]+$/i.test(segment)) {
        params[`param${index + 1}`] = segment;
      }
    });

    return params;
  };

  const params = extractParams();

  const router: RouterType = {
    query,
    params,
    pathname,
    hash,
    reload: () => window.location.reload(),
    replace: (path) => window.location.replace(path),
    push: (path) => (window.location.href = path),
    getParam: (name: string) => params[name] || query.get(name),
  };

  return { router };
};

export default useRouter;

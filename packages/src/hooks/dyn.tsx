import { PageLoaderOption } from "../types/sui";
import { DynamicImport } from "./dyanmicImport";

type ImportFuncType = () => Promise<{ default: React.ComponentType }>;

/**
 * Dynamically loads a component based on the provided import function.
 *
 * @param {ImportFuncType} importFunc - A function that returns a promise that resolves to a module with a default export.
 * @param {PageLoaderOption} [loaderOptions] - Optional configuration for the page loader.
 * @returns {React.ComponentType} - A React component that dynamically loads the component based on the import function.
 *
 * This function uses React Suspense under the hood with PageLoader components that display the progress.
 *
 * @example
 *
 * const Home = dyn(() => import('./pages/Home'))
 * //Change the loader color
 * const Home = dyn(() => import('./pages/Home'), { color: 'red', className: 'p-loader' })
 */
const dyn = (importFunc: ImportFuncType, loaderOptions?: PageLoaderOption) => {
  const DynamicComponent = () => (
    <DynamicImport importFunc={importFunc} loaderOptions={loaderOptions} />
  );
  return DynamicComponent;
};

export default dyn;

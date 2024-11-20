import { DynamicImport } from '@/hooks/dyanmicImport';

type ImportFuncType = () => Promise<{ default: React.ComponentType }>;

export const dyn = (importFunc: ImportFuncType) => {
  const DynamicComponent = () => <DynamicImport importFunc={importFunc} />;
  return DynamicComponent;
};

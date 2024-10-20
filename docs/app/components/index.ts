import dynamic from 'next/dynamic';

// Dynamic export
export const HomePage = dynamic(() => import('./home/About'), { ssr: false });
export const OverViewPage = dynamic(() => import('./docs/start/OverviewPage'), {
  ssr: false,
});
export const InstallPage = dynamic(() => import('./docs/start/InstallPage'), {
  ssr: false,
});
export const NotFoundPage = dynamic(() => import('./404_NotFound'), {
  ssr: false,
});
export const ButtonPage = dynamic(
  () => import('./docs/components/action/ButtonDocs'),
  {
    ssr: false,
  }
);
export const FabPage = dynamic(
  () => import('./docs/components/action/FABDocs'),
  {
    ssr: false,
  }
);
export const BackdropDocs = dynamic(
  () => import('./docs/components/feedback/BackdropDocs'),
  { ssr: false }
);
export const CircleLoaderDocs = dynamic(
  () => import('./docs/components/feedback/CircleLoaderDocs'),
  { ssr: false }
);
export const ModalDocs = dynamic(
  () => import('./docs/components/feedback/ModalDocs'),
  { ssr: false }
);
export const ToastDocs = dynamic(
  () => import('./docs/components/feedback/ToastDocs'),
  { ssr: false }
);
export const BoxDocs = dynamic(() => import('./docs/components/layout/Box'), {
  ssr: false,
});
export const CardDocs = dynamic(() => import('./docs/components/layout/Card'), {
  ssr: false,
});
export const StackDocs = dynamic(
  () => import('./docs/components/layout/Stack'),
  { ssr: false }
);
export const TabsDocs = dynamic(() => import('./docs/components/layout/Tabs'), {
  ssr: false,
});
export const InputDocs = dynamic(
  () => import('./docs/components/input/InputDocs')
);
export const CheckboxDocs = dynamic(
  () => import('./docs/components/input/CheckBoxDocs'),
  { ssr: false }
);
export const SwitchDocs = dynamic(
  () => import('./docs/components/input/SwitchDocs'),
  { ssr: false }
);
export const ImagePickerDocs = dynamic(
  () => import('./docs/components/utility/ImagePickerDocs'),
  { ssr: false }
);
export const CircularProgressDocs = dynamic(
  () => import('./docs/components/feedback/CircularProgress'),
  { ssr: false }
);
export const PulseLoaderDocs = dynamic(
  () => import('./docs/components/feedback/PulseLoader'),
  { ssr: false }
);
export const ScaleLoaderDocs = dynamic(
  () => import('./docs/components/feedback/ScaleLoader'),
  { ssr: false }
);
export const BarLoaderDocs = dynamic(
  () => import('./docs/components/feedback/BarLoaderDocs'),
  { ssr: false }
);
export const DrawerDocs = dynamic(
  () => import('./docs/components/navigation/DrawerDocs'),
  { ssr: false }
);
export const BottomNavDocs = dynamic(
  () => import('./docs/components/navigation/BottomNavDocs'),
  { ssr: false }
);

// Main export
export { default as AppWrap } from './layout/AppWrap';
export { default as BackgroundLoader } from './custom/BackgroundLoader';
export { default as Typography } from './custom/Typography';

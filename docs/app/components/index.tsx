"use client";

import { dyn } from "@/utils/dyn";

export { default as AppWrap } from "./layout/AppWrap";
export { default as BackgroundLoader } from "./custom/BackgroundLoader";
export { default as Typography } from "./custom/Typography";

export { default as HomePage } from "./home/About";
export { default as NotFoundPage } from "./404_NotFound";

//Dynamic export
export const InstallPage = dyn(() => import("./docs/page/InstallPage"));
export const NextDocsPage = dyn(() => import("./docs/page/NIP"));
export const ViteDocsPage = dyn(() => import("./docs/page/VitePage"));
export const QuickStartPage = dyn(() => import("./docs/page/QuickStartPage"));
export const ButtonPage = dyn(() => import("./docs/page/ButtonPage"));
export const CheckboxPage = dyn(() => import("./docs/page/CheckboxPage"));
export const FabPage = dyn(() => import("./docs/page/FabPage"));
export const SwitchPage = dyn(() => import("./docs/page/SwitchPage"));
export const TextInputPage = dyn(() => import("./docs/page/TextInputPage"));
export const ToastPage = dyn(() => import("./docs/page/ToastPage"));
export const BackdropPage = dyn(() => import("./docs/page/BackdropPage"));
export const DrawerPage = dyn(() => import("./docs/page/DrawerPage"));
export const ModalPage = dyn(() => import("./docs/page/ModalPage"));
export const BottomNavPage = dyn(() => import("./docs/page/BottomNav"));
export const TabsPage = dyn(() => import("./docs/page/TabsPage"));
export const CircleLoaderPage = dyn(
  () => import("./docs/page/CircleLoaderPage")
);
export const CircularProgressPage = dyn(
  () => import("./docs/page/CircularProgress")
);
export const BarLoaderPage = dyn(() => import("./docs/page/BarLoader"));
export const ScaleLoaderPage = dyn(() => import("./docs/page/ScaleLoaderPage"));
export const PulseLoaderPage = dyn(() => import("./docs/page/PulseLoaderPage"));
export const CardPage = dyn(() => import("./docs/page/CardPage"));
export const BoxPage = dyn(() => import("./docs/page/BoxPage"));
export const StackPage = dyn(() => import("./docs/page/StackPage"));
export const MenuPage = dyn(() => import("./docs/page/MenuPage"));
export const ImagePickerPage = dyn(() => import("./docs/page/ImagePickerPage"));
export const IconPage = dyn(() => import("./docs/page/IconPage"));
export const StyledPage = dyn(() => import("./docs/page/Styled.Page"));
export const ThemePage = dyn(() => import("./docs/page/ThemePage"));
export const StatusBadgePage = dyn(() => import("./docs/page/StatusBadgePage"));
export const NotificationBadgePage = dyn(
  () => import("./docs/page/NotificationBadgePage")
);
export const DynPage = dyn(() => import("./docs/page/dynPage"));

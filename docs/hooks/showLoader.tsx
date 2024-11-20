"use client";

import { BackgroundLoader } from "../components";

const showLoader = () => {
  if (typeof window === "undefined") return <BackgroundLoader />;
};

export default showLoader;

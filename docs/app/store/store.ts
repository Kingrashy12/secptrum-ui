import { configureStore } from "@reduxjs/toolkit";
import contentBar from "./contentBar";

export const store = configureStore({
  reducer: {
    page_content: contentBar,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

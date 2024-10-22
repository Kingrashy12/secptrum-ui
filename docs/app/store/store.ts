import { configureStore } from '@reduxjs/toolkit';
import contentBar from './contentBar';
import showcase from './showcase';

export const store = configureStore({
  reducer: {
    page_content: contentBar,
    showcases: showcase,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

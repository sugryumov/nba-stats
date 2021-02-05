import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'store/reducer';

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import mtSuppliesReducer from "./redux/mtSupplies";
import { PersistConfig } from "redux-persist/es/types";

// Define the persist configuration
const persistConfig: PersistConfig<any> = {
  key: "root",
  version: 1,
  storage,
};

// Persist the reducer
const persistedReducer = persistReducer(persistConfig, mtSuppliesReducer);

// Configure the store
export const store = configureStore({
  reducer: { mtSupplies: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Infer RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Persistor for Redux Persist
export const persistor = persistStore(store);

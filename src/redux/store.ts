import { configureStore } from "@reduxjs/toolkit";
import parkingReducer from "./parking/parking-reducer";
import userReducer from "./user/user-reducer";

export const store = configureStore({
  reducer: {
    parking: parkingReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

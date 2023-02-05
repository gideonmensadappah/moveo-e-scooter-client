import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../interfaces/User/user-interface";

import {
  create_user,
  get_users,
  user_login,
  user_logout,
} from "./user-actions";

export interface usersState {
  isLoggedIn: boolean;
  users: User[];
  loading: boolean;
  error: string;
}

const initialState: usersState = {
  users: [],
  isLoggedIn: false,
  loading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearError(state) {
      return {
        ...state,
        error: "",
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(user_login.fulfilled, (state, action) => {
      const user = action.payload.data;
      window.localStorage.setItem("userAuth", JSON.stringify(user));
      state.isLoggedIn = true;
      state.loading = false;
    });
    builder.addCase(user_login.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(user_login.rejected, (state, action) => {
      state.error = action.error.message!;
      state.loading = false;
    });
    builder.addCase(user_logout.fulfilled, (state, action) => {
      state.isLoggedIn = false;
      state.loading = false;
    });
    builder.addCase(user_logout.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(user_logout.rejected, (state, action) => {
      state.error = action.error.message!;
      state.loading = false;
    });
    builder.addCase(create_user.fulfilled, (state, action) => {
      const user = action.payload.data;
      state.users = [...state.users, user];
      state.loading = false;
    });
    builder.addCase(create_user.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(create_user.rejected, (state, action) => {
      state.error = action.error.message!;
      state.loading = false;
    });

    builder.addCase(get_users.fulfilled, (state, action) => {
      const users = action.payload.data;
      state.users = users;
      state.loading = false;
    });
    builder.addCase(get_users.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(get_users.rejected, (state, action) => {
      state.error = action.error.message!;
      state.loading = false;
    });
  },
});
export const usersAction = userSlice.actions;
export default userSlice.reducer;

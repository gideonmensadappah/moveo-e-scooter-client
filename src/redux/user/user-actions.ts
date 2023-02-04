import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUser,
  updateUser,
  deleteUser,
  getUsers,
  usersLogin,
  usersLogout,
} from "../../api/user";

import { Req } from "../../enums/req/req.enum";
import { RootState } from "../store";
import { User } from "../../interfaces/User/user-interface";

export const user_login = createAsyncThunk(
  "user/loginUser",
  async (
    payload: {
      email: string;
      password: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const { status, data } = await usersLogin(payload);

      if (status === Req.failed) throw new Error(data as any);

      return { data: data as User };
    } catch (err) {
      return rejectWithValue(err);
    }
  },
  {
    condition: (_, { getState }) => {
      const { user } = getState() as RootState;
      return user.loading === false;
    },
  }
);
export const user_logout = createAsyncThunk(
  "user/logoutlogout",
  async (payload, { rejectWithValue }) => {
    try {
      const { status, data } = await usersLogout();

      if (status === Req.failed) throw new Error(data as any);

      return { data };
    } catch (err) {
      return rejectWithValue(err);
    }
  },
  {
    condition: (_, { getState }) => {
      const { user } = getState() as RootState;
      return user.loading === false;
    },
  }
);

export const get_users = createAsyncThunk(
  "user/getUser",
  async (payload: any, { rejectWithValue }) => {
    try {
      const { status, data } = await getUsers();

      if (status === Req.failed) throw new Error(data as any);

      return { data: data as Array<User> };
    } catch (err) {
      return rejectWithValue(err);
    }
  },
  {
    condition: (_, { getState }) => {
      const { user } = getState() as RootState;
      return user.loading === false;
    },
  }
);

export const create_user = createAsyncThunk(
  "user/createUser",
  async (user: Partial<User>, { rejectWithValue }) => {
    try {
      const { status, data } = await createUser(user);
      if (status === Req.failed) throw new Error(data as any);
      return { data: data as User };
    } catch (err) {
      return rejectWithValue(err);
    }
  },
  {
    condition: (_, { getState }) => {
      const { user } = getState() as RootState;
      return user.loading === false;
    },
  }
);

export const delete_user = createAsyncThunk(
  "user/deleteUser",
  async (id: string, { rejectWithValue }) => {
    try {
      const { status, data } = await deleteUser(id);

      if (status === Req.failed) throw new Error(data as any);

      return { id, data };
    } catch (err) {
      return rejectWithValue(err);
    }
  },
  {
    condition: (_, { getState }) => {
      const { user } = getState() as RootState;
      return user.loading === false;
    },
  }
);

export const update_user = createAsyncThunk(
  "user/updateUser",
  async (payload: { user: User }, { rejectWithValue }) => {
    try {
      const { user } = payload;

      const { status, data } = await updateUser(user);
      if (status === Req.failed) throw new Error(data as any);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
  {
    condition: (_, { getState }) => {
      const { user } = getState() as RootState;
      return user.loading === false;
    },
  }
);

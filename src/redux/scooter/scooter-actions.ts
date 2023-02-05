import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createScooter,
  updateScooter,
  deleteScooter,
  getScooter,
  getScooters,
  getFilteredScootersByActive,
} from "../../api/scooter";

import { Req } from "../../enums/req/req.enum";
import { RootState } from "../store";
import { Scooter } from "../../interfaces/Sooter/scooter-interface";
import { Status } from "../../enums/scooter/scooter.enum";

export const get_scooters = createAsyncThunk(
  "scooter/getScooter",
  async (payload: any, { rejectWithValue }) => {
    try {
      const { status, data } = await getScooters();

      if (status === Req.failed) throw new Error(data as any);

      return { data: data as Array<Scooter> };
    } catch (err) {
      return rejectWithValue(err);
    }
  },
  {
    condition: (_, { getState }) => {
      const { scooter } = getState() as RootState;
      return scooter.loading === false;
    },
  }
);

export const get_filtered_scooters_by_active = createAsyncThunk(
  "scooter/getFilteredScootersByActive",
  async (payload: Status, { rejectWithValue }) => {
    try {
      const { status, data } = await getFilteredScootersByActive(payload);

      if (status === Req.failed) throw new Error(data as any);

      return { data: data as Array<Scooter> };
    } catch (err) {
      return rejectWithValue(err);
    }
  },
  {
    condition: (_, { getState }) => {
      const { scooter } = getState() as RootState;
      return scooter.loading === false;
    },
  }
);

export const get_scooter = createAsyncThunk(
  "scooter/getScooter",
  async (id: string, { rejectWithValue }) => {
    try {
      const { status, data } = await getScooter(id);

      if (status === Req.failed) throw new Error(data as any);

      return { data: data as Array<Scooter> };
    } catch (err) {
      return rejectWithValue(err);
    }
  },
  {
    condition: (_, { getState }) => {
      const { scooter } = getState() as RootState;
      return scooter.loading === false;
    },
  }
);

export const create_scooter = createAsyncThunk(
  "scooter/createScooter",
  async (scooter: Partial<Scooter>, { rejectWithValue }) => {
    try {
      const { status, data } = await createScooter(scooter);
      if (status === Req.failed) throw new Error(data as any);
      return { data: data as Scooter };
    } catch (err) {
      return rejectWithValue(err);
    }
  },
  {
    condition: (_, { getState }) => {
      const { scooter } = getState() as RootState;
      return scooter.loading === false;
    },
  }
);

export const delete_scooter = createAsyncThunk(
  "scooter/deleteScooter",
  async (id: string, { rejectWithValue }) => {
    try {
      const { status, data } = await deleteScooter(id);

      if (status === Req.failed) throw new Error(data as any);

      return { id, data };
    } catch (err) {
      return rejectWithValue(err);
    }
  },
  {
    condition: (_, { getState }) => {
      const { scooter } = getState() as RootState;
      return scooter.loading === false;
    },
  }
);

export const update_scooter = createAsyncThunk(
  "scooter/updateScooter",
  async (payload: { scooter: Scooter }, { rejectWithValue }) => {
    try {
      const { status, data } = await updateScooter(payload.scooter);
      if (status === Req.failed) throw new Error(data as any);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
  {
    condition: (_, { getState }) => {
      const { scooter } = getState() as RootState;
      return scooter.loading === false;
    },
  }
);

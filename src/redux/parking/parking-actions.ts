import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createParking,
  updateParking,
  deleteParking,
  getParkings,
} from "../../api/parking";

import { Req } from "../../enums/req/req.enum";
import { RootState } from "../store";
import { Parking } from "../../interfaces/Parking/parking-interface";

export const get_parkings = createAsyncThunk(
  "parking/getParkings",
  async (payload: any, { rejectWithValue }) => {
    try {
      const { status, data } = await getParkings();

      if (status === Req.failed) throw new Error(data as any);

      return { data: data as Array<Parking> };
    } catch (err) {
      return rejectWithValue(err);
    }
  },
  {
    condition: (_, { getState }) => {
      const { parking } = getState() as RootState;
      return parking.loading === false;
    },
  }
);

export const create_parking = createAsyncThunk(
  "parking/createParking",
  async (parking: Partial<Parking>, { rejectWithValue }) => {
    try {
      const { status, data } = await createParking(parking);
      if (status === Req.failed) throw new Error(data as any);
      return { data: data as Parking };
    } catch (err) {
      return rejectWithValue(err);
    }
  },
  {
    condition: (_, { getState }) => {
      const { parking } = getState() as RootState;
      return parking.loading === false;
    },
  }
);

export const delete_parking = createAsyncThunk(
  "parking/deleteParking",
  async (id: string, { rejectWithValue }) => {
    try {
      const { status, data } = await deleteParking(id);

      if (status === Req.failed) throw new Error(data as any);

      return { id, unassignedparkings: data };
    } catch (err) {
      return rejectWithValue(err);
    }
  },
  {
    condition: (_, { getState }) => {
      const { parking } = getState() as RootState;
      return parking.loading === false;
    },
  }
);

export const update_parking = createAsyncThunk(
  "parking/updateParking",
  async (payload: { parking: Parking }, { rejectWithValue }) => {
    try {
      const { status, data } = await updateParking(payload.parking);
      if (status === Req.failed) throw new Error(data as any);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
  {
    condition: (_, { getState }) => {
      const { parking } = getState() as RootState;
      return parking.loading === false;
    },
  }
);

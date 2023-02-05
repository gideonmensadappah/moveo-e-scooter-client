import { createSlice } from "@reduxjs/toolkit";
import { Scooter } from "../../interfaces/Sooter/scooter-interface";
import {
  create_scooter,
  update_scooter,
  delete_scooter,
  get_scooters,
  get_filtered_scooters_by_active,
} from "./scooter-actions";

export interface scootersState {
  scooters: Scooter[];
  loading: boolean;
  error: string;
}

const initialState: scootersState = {
  scooters: [],
  loading: false,
  error: "",
};

export const scooterSlice = createSlice({
  name: "scooter",
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
    builder.addCase(create_scooter.fulfilled, (state, action) => {
      const scooter = action.payload.data;
      state.scooters = [...state.scooters, scooter];
      state.loading = false;
    });
    builder.addCase(create_scooter.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(create_scooter.rejected, (state, action) => {
      state.error = action.error.message!;
      state.loading = false;
    });

    builder.addCase(get_scooters.fulfilled, (state, action) => {
      const scooters = action.payload.data;
      state.scooters = scooters;
      state.loading = false;
    });
    builder.addCase(get_scooters.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(get_scooters.rejected, (state, action) => {
      state.error = action.error.message!;
      state.loading = false;
    });

    builder.addCase(
      get_filtered_scooters_by_active.fulfilled,
      (state, action) => {
        const scooters = action.payload.data;
        state.scooters = scooters;
        state.loading = false;
      }
    );
    builder.addCase(
      get_filtered_scooters_by_active.pending,
      (state, action) => {
        state.loading = true;
      }
    );
    builder.addCase(
      get_filtered_scooters_by_active.rejected,
      (state, action) => {
        state.error = action.error.message!;
        state.loading = false;
      }
    );
  },
});
export const scootersAction = scooterSlice.actions;
export default scooterSlice.reducer;

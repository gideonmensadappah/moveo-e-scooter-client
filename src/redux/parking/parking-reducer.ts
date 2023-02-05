import { createSlice } from "@reduxjs/toolkit";
import { Parking } from "../../interfaces/Parking/parking-interface";
import {
  create_parking,
  update_parking,
  delete_parking,
  get_parkings,
} from "./parking-actions";

export interface parkingsState {
  parkings: Parking[];
  loading: boolean;
  error: string;
}

const initialState: parkingsState = {
  parkings: [],
  loading: false,
  error: "",
};

export const parkingSlice = createSlice({
  name: "parking",
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
    builder.addCase(create_parking.fulfilled, (state, action) => {
      const parking = action.payload.data;
      state.parkings = [...state.parkings, parking];
      state.loading = false;
    });
    builder.addCase(create_parking.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(create_parking.rejected, (state, action) => {
      state.error = action.error.message!;
      state.loading = false;
    });

    builder.addCase(get_parkings.fulfilled, (state, action) => {
      const parkings = action.payload.data;
      state.parkings = parkings;
      state.loading = false;
    });
    builder.addCase(get_parkings.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(get_parkings.rejected, (state, action) => {
      state.error = action.error.message!;
      state.loading = false;
    });

    builder.addCase(delete_parking.fulfilled, (state, action) => {
      const parkingId = action.payload.id;

      state.parkings = state.parkings.filter(({ _id }) => _id !== parkingId);
      state.loading = false;
    });
    builder.addCase(delete_parking.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(delete_parking.rejected, (state, action) => {
      state.error = action.error.message!;
      state.loading = false;
    });
  },
});
export const parkingsAction = parkingSlice.actions;
export default parkingSlice.reducer;

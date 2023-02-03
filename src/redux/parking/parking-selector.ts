import { createSelector } from "reselect";
import { RootState } from "../store";
export const parkingStateSelector = (state: RootState) => state.parking;

export const parkingErrorSelector = createSelector(
  parkingStateSelector,
  (state) => state.error
);
export const parkingLoadingSelector = createSelector(
  parkingStateSelector,
  (state) => state.loading
);
export const parkingsSelector = createSelector(
  parkingStateSelector,
  (state) => state.parkings || []
);

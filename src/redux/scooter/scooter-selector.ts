import { createSelector } from "reselect";
import { RootState } from "../store";
export const scooterStateSelector = (state: RootState) => state.scooter;

export const scooterErrorSelector = createSelector(
  scooterStateSelector,
  (state) => state.error
);
export const scooterLoadingSelector = createSelector(
  scooterStateSelector,
  (state) => state.loading
);
export const scootersSelector = createSelector(
  scooterStateSelector,
  (state) => state.scooters || []
);

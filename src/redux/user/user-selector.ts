import { createSelector } from "reselect";
import { RootState } from "../store";

export const userStateSelector = (state: RootState) => state.user;

export const userErrorSelector = createSelector(
  userStateSelector,
  (state) => state.error
);
export const userLoadingSelector = createSelector(
  userStateSelector,
  (state) => state.loading
);
export const usersSelector = createSelector(
  userStateSelector,
  (state) => state.users || []
);

export const userSelector = createSelector(
  userStateSelector,
  (state) => state.isLoggedIn || null
);

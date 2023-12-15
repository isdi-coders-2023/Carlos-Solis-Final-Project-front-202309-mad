import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import usersReducer from '../slice/users.slice';
import monumentsReducer from '../slice/monuments.slice';

export const appStore = configureStore({
  reducer: {
    UsersState: usersReducer,
    MonumentsState: monumentsReducer,
  },
});

export type AppDispatch = typeof appStore.dispatch;

export type RootState = ReturnType<typeof appStore.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

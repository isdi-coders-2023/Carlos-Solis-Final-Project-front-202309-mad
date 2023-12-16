import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Monument } from '../entities/monuments';
import {
  createMonumentThunk,
  deleteMonumentThunk,
  loadOneMonumentThunk,
  loadMonumentsThunk,
} from './monuments.thunk';

export type MonumentsState = {
  currentMonument: Monument | null;
  monuments: Monument[];
  monumentState: 'idle' | 'loading' | 'loaded' | 'error';
  monumentDeleteState: 'idle' | 'loading';
  monumentFilter: 'Todos los monumentos' | 'Arab' | 'Roman';
};

const initialState: MonumentsState = {
  currentMonument: null,
  monuments: [],
  monumentState: 'idle',
  monumentDeleteState: 'idle',
  monumentFilter: 'Todos los monumentos',
};

export const monumentsSlice = createSlice({
  name: 'monument',
  initialState,
  reducers: {
    setCurrentMonumentItem(
      state: MonumentsState,
      { payload }: PayloadAction<Monument | null>
    ) {
      state.currentMonument = payload;
      return state;
    },
  },

  extraReducers(builder) {
    builder.addCase(loadMonumentsThunk.pending, (state: MonumentsState) => {
      state.monumentState = 'loading';
      return state;
    });

    builder.addCase(
      loadMonumentsThunk.fulfilled,
      (state: MonumentsState, { payload }: PayloadAction<Monument[]>) => {
        state.monumentState = 'loaded';
        state.monuments = payload;
        return state;
      }
    );

    builder.addCase(loadMonumentsThunk.rejected, (state: MonumentsState) => {
      state.monumentState = 'error';
      return state;
    });

    builder.addCase(loadOneMonumentThunk.pending, (state: MonumentsState) => {
      state.monumentState = 'loading';
      return state;
    });

    builder.addCase(
      loadOneMonumentThunk.fulfilled,
      (state: MonumentsState, { payload }: PayloadAction<Monument>) => {
        state.monumentState = 'loaded';
        state.currentMonument = payload;
        return state;
      }
    );

    builder.addCase(loadOneMonumentThunk.rejected, (state: MonumentsState) => {
      state.monumentState = 'error';
      return state;
    });

    builder.addCase(
      deleteMonumentThunk.fulfilled,
      (state: MonumentsState, { payload }: PayloadAction<Monument['id']>) => {
        state.monuments.splice(
          state.monuments.findIndex((item) => item.id === payload),
          1
        );
        return state;
      }
    );

    builder.addCase(
      createMonumentThunk.fulfilled,
      (state: MonumentsState, { payload }) => ({
        ...state,
        monuments: [...state.monuments, payload],
      })
    );
  },
});

export default monumentsSlice.reducer;
export const { setCurrentMonumentItem } = monumentsSlice.actions;

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Monument } from '../entities/monuments';
import {
  createMonumentThunk,
  deleteMonumentThunk,
  loadOneMonumentThunk,
  loadMonumentsThunk,
  updateMonumentThunk,
} from './monuments.thunk';

export type MonumentsState = {
  currentMonument: Monument | null;
  monuments: Monument[];
  monumentState: 'idle' | 'loading' | 'loaded' | 'error';
  monumentUpdateState: 'idle' | 'loading';
  monumentDeleteState: 'idle' | 'loading' | 'deleted' | 'error';
  monumentFilter: 'Mis recetas' | 'Galletas' | 'Tortas' | 'Todas las recetas';
};

const initialState: MonumentsState = {
  currentMonument: null,
  monuments: [],
  monumentState: 'idle',
  monumentUpdateState: 'idle',
  monumentDeleteState: 'idle',
  monumentFilter: 'Todas las recetas',
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
        state.monumentState.slice(
          state.monuments.findIndex((item) => item.id === payload),
          1
        );
        state.monumentDeleteState = 'deleted';
        return state;
      }
    );
    builder.addCase(deleteMonumentThunk.pending, (state: MonumentsState) => {
      state.monumentDeleteState = 'loading';
      return state;
    });

    builder.addCase(deleteMonumentThunk.rejected, (state: MonumentsState) => {
      state.monumentState = 'error';
      return state;
    });

    builder.addCase(
      createMonumentThunk.fulfilled,
      (state: MonumentsState, { payload }) => ({
        ...state,
        monuments: [...state.monuments, payload],
      })
    );

    builder.addCase(
      updateMonumentThunk.fulfilled,
      (state: MonumentsState, { payload }: PayloadAction<Monument>) => {
        const findMonumentIndex = state.monuments.findIndex(
          (item) => item.id === payload.id
        );
        if (findMonumentIndex !== -1) {
          // Actualizar la receta en la lista de recetas
          state.monuments[findMonumentIndex] = payload;
          // Actualizar la receta actual si es la misma receta que se ha actualizado
          if (
            state.currentMonument &&
            state.currentMonument.id === payload.id
          ) {
            state.currentMonument = payload;
          }
        }

        state.monumentUpdateState = 'idle';
        return state;
      }
    );

    builder.addCase(updateMonumentThunk.pending, (state: MonumentsState) => {
      state.monumentUpdateState = 'loading';
      return state;
    });
  },
});

export default monumentsSlice.reducer;
export const { setCurrentMonumentItem } = monumentsSlice.actions;

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { ApiRepoMonuments } from '../services/api.repo.monuments';
import {
  createMonumentThunk,
  deleteMonumentThunk,
  loadMonumentsThunk,
  updateMonumentThunk,
} from '../slice/monuments.thunk';
import { setCurrentMonumentItem } from '../slice/monuments.slice';
import { Monument } from '../entities/monuments';
import { useCallback, useMemo } from 'react';

export function useMonuments() {
  const dispatch = useDispatch<AppDispatch>();

  const { token } = useSelector((state: RootState) => state.UsersState);
  const {
    monuments,
    currentMonument,
    monumentDeleteState,
    monumentUpdateState,
  } = useSelector((state: RootState) => state.MonumentsState);
  const monumentsRepo = useMemo(() => new ApiRepoMonuments(token!), [token]);

  const handleDetailsPage = async (monumentItem: Monument) => {
    dispatch(setCurrentMonumentItem(monumentItem));
  };

  const loadAllMonuments = useCallback(async () => {
    dispatch(loadMonumentsThunk(monumentsRepo));
  }, [monumentsRepo, dispatch]);

  // const loadOneMonument = (id: string) => {
  //   dispatch(loadOneMonumentThunk({ repo: monumentsRepo, id }));
  // };

  const deleteMonument = (id: string) => {
    dispatch(deleteMonumentThunk({ repo: monumentsRepo, id }));
  };

  const createMonument = (newMonument: FormData) => {
    dispatch(
      createMonumentThunk({ repo: monumentsRepo, monumentToAdd: newMonument })
    );
  };

  const updateCurrentMonument = (id: string, monumentToUpdate: FormData) => {
    console.log('desde el hook', token);
    dispatch(
      updateMonumentThunk({ repo: monumentsRepo, id, monumentToUpdate })
    );
  };

  return {
    loadAllMonuments,

    deleteMonument,
    createMonument,
    updateCurrentMonument,
    handleDetailsPage,
    monuments,
    currentMonument,
    monumentUpdateState,
    monumentDeleteState,
  };
}

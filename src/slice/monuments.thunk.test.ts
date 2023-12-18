import { Monument } from '../entities/monuments';
import { ApiRepoMonuments } from '../services/api.repo.monuments';
import { appStore } from '../store/store';
import {
  createMonumentThunk,
  deleteMonumentThunk,
  loadOneMonumentThunk,
  loadMonumentsThunk,
  updateMonumentThunk,
} from './monuments.thunk';

describe('Given loadMonumentsThunk', () => {
  describe('When we dispatch succesfully', () => {
    const mockedRepo = {
      getAllMonuments: jest.fn().mockReturnValue([] as Monument[]),
      getMonumentById: jest.fn().mockReturnValue({} as Monument),
      deleteMonument: jest.fn().mockReturnValue([] as Monument[]),
      createMonument: jest.fn().mockReturnValue({} as Monument),
      updateMonument: jest.fn().mockReturnValue({} as Monument),
    } as unknown as ApiRepoMonuments;

    test('Then it should dispatch', async () => {
      await appStore.dispatch(loadMonumentsThunk(mockedRepo));
      expect(mockedRepo.getAllMonuments).toHaveBeenCalled();
    });

    test('Then it should dispatch', async () => {
      await appStore.dispatch(
        loadOneMonumentThunk({ repo: mockedRepo, id: '' })
      );
      expect(mockedRepo.getMonumentById).toHaveBeenCalled();
    });

    test('Then it should dispatch', async () => {
      await appStore.dispatch(
        deleteMonumentThunk({ repo: mockedRepo, id: '' })
      );
      expect(mockedRepo.deleteMonument).toHaveBeenCalled();
    });

    test('Then it should dispatch', async () => {
      await appStore.dispatch(
        createMonumentThunk({ repo: mockedRepo, monumentToAdd: {} as FormData })
      );
      expect(mockedRepo.createMonument).toHaveBeenCalled();
    });

    test('Then it should dispatch', async () => {
      await appStore.dispatch(
        updateMonumentThunk({
          repo: mockedRepo,
          id: '',
          monumentToUpdate: {} as FormData,
        })
      );
      expect(mockedRepo.updateMonument).toHaveBeenCalled();
    });
  });

  describe('When we dispatch unsuccesfully', () => {
    const mockedRepo = {
      getAllMonuments: jest.fn().mockRejectedValue([] as Monument[]),
      getMonumentById: jest.fn().mockRejectedValue({} as Monument),
    } as unknown as ApiRepoMonuments;

    test('Then it should dispatch', async () => {
      await appStore.dispatch(loadMonumentsThunk(mockedRepo));
      expect(mockedRepo.getAllMonuments).toHaveBeenCalled();
    });

    test('Then it should dispatch', async () => {
      await appStore.dispatch(
        loadOneMonumentThunk({ repo: mockedRepo, id: '' })
      );
      expect(mockedRepo.getMonumentById).toHaveBeenCalled();
    });
  });
});

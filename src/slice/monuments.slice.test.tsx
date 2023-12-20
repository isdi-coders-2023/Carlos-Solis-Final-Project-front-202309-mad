import { configureStore } from '@reduxjs/toolkit';
import { Monument } from '../entities/monuments';
import monumentsReducer, {
  setCurrentMonumentItem,
  MonumentsState,
} from './monuments.slice';
import { deleteMonumentThunk } from './monuments.thunk';
import { ApiRepoMonuments } from '../services/api.repo.monuments';
describe('Given monuments slice', (): void => {
  jest.mock('../services/api.repo.monuments', () =>
    jest.fn().mockImplementation(() => ({
      apiUrl: 'mockApiUrl',
      token: 'mockToken',
      createMonument: jest
        .fn()
        .mockResolvedValue({ id: '1', name: 'Mock Monument' }),
      updateMonument: jest
        .fn()
        .mockResolvedValue({ id: '1', name: 'Updated Mock Monument' }),
      deleteMonument: jest.fn().mockResolvedValue('1'),
    }))
  );

  describe('When monuments reducer setCurrentMonumentItem', () => {
    const initialState: MonumentsState = {
      currentMonument: null,
      monuments: [],
      monumentState: 'idle',
      monumentUpdateState: 'idle',
      monumentDeleteState: 'idle',
      monumentFilter: 'Todos los monumentos',
    };

    test('should handle deleteMonumentThunk.pending', async () => {
      const store = configureStore({ reducer: monumentsReducer });
      const mockRepo = new (ApiRepoMonuments as jest.Mock<ApiRepoMonuments>)(
        'mockToken'
      );
      await store.dispatch(deleteMonumentThunk({ repo: mockRepo, id: '1' }));
      const state = store.getState();
      expect(state.monumentDeleteState).toEqual('loading');
    });

    test('finds the index of the recipe with the given id', () => {
      // Arrange
      const initialState = {
        monuments: [
          { id: '1', name: 'Monumento 1' },
          { id: '2', name: 'Monumento 2' },
          { id: '3', name: 'Monumento 3' },
        ],
        currentMonument: null,
        monumentState: 'idle',
        monumentUpdateState: 'idle',
        monumentDeleteState: 'idle',
      } as MonumentsState;
      const monumentIdToDelete = '-1';
      const mockRepo = new (ApiRepoMonuments as jest.Mock<ApiRepoMonuments>)(
        'mockToken'
      );

      const nextState = monumentsReducer(
        initialState,
        deleteMonumentThunk.pending(monumentIdToDelete, {
          repo: mockRepo,
          id: monumentIdToDelete,
        })
      );

      const index = nextState.monuments.findIndex(
        (item) => item.id === monumentIdToDelete
      );
      expect(index).toBe(-1);
    });

    test('should handle setCurrentMonumentItem', () => {
      const actual = monumentsReducer(
        initialState,
        setCurrentMonumentItem({ id: '1' } as unknown as Monument)
      );
      expect(actual.currentMonument).toEqual({ id: '1' });
    });
  });

  describe('monuments actions', () => {
    it('should create an action for setCurrentMonumentItem', () => {
      const payload = { id: '1' } as unknown as Monument;
      const expectedAction = {
        type: setCurrentMonumentItem.type,
        payload,
      };
      expect(setCurrentMonumentItem(payload)).toEqual(expectedAction);
    });
  });
});

import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { useMonuments } from './monuments.hooks';
import { Monument } from '../entities/monuments';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn().mockReturnValue({ token: 'test' }),
}));

describe('Given useMonuments hook...', () => {
  const dispatch = jest.fn();
  (useDispatch as jest.Mock).mockReturnValue(dispatch);

  describe('When loadMonuments component is called', () => {
    test('Then it should dispatch', async () => {
      const { result } = renderHook(() => useMonuments());
      const { loadAllMonuments } = result.current;

      loadAllMonuments();
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('When createMonument component is called', () => {
    test('Then it should dispatch', async () => {
      const { result } = renderHook(() => useMonuments());
      const { createMonument } = result.current;

      createMonument({} as FormData);
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('When updateCurrentMonument component is called', () => {
    test('Then it should dispatch', async () => {
      const { result } = renderHook(() => useMonuments());
      const { updateCurrentMonument } = result.current;

      updateCurrentMonument({} as Monument['id'], {} as FormData);
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('When deleteMonument component is called', () => {
    test('Then it should dispatch', async () => {
      const { result } = renderHook(() => useMonuments());
      const { deleteMonument } = result.current;

      deleteMonument({} as Monument['id']);
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('When deleteRecipe component is called', () => {
    test('Then it should dispatch', async () => {
      const { result } = renderHook(() => useMonuments());
      const { handleDetailsPage } = result.current;

      await handleDetailsPage({} as Monument);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});

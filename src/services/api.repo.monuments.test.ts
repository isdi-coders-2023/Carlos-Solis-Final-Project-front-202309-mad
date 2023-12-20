import { ApiRepoMonuments } from './api.repo.monuments.js';

describe('Given ApiRepoMonuments', () => {
  const repo = new ApiRepoMonuments('');

  describe('When we instantiate it and response is ok', () => {
    let jsonMock: jest.Mock;

    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValue({});
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });

    test('Then the method createMonument should be used', async () => {
      const result = await repo.createMonument({} as FormData);
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual({});
    });

    test('Then the method updateMonument should be used', async () => {
      const result = await repo.updateMonument('', {} as FormData);
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual({});
    });

    test('Then the method getAllMonuments should be used', async () => {
      const result = await repo.getAllMonuments();
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual({});
    });
  });

  describe('When we instantiate it and response is not ok', () => {
    const errorStatus = 404;
    const errorStatusText = 'Not Found';
    const token = '';

    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        status: errorStatus,
        statusText: errorStatusText,
      });
    });

    const repo = new ApiRepoMonuments(token);

    test('Then the method createMonument should throw an error', async () => {
      await expect(repo.createMonument({} as FormData)).rejects.toThrow();
    });

    test('Then the method updateMonument should throw an error', async () => {
      await expect(repo.updateMonument('', {} as FormData)).rejects.toThrow();
    });

    test('Then the method deleteMonument should throw an error', async () => {
      await expect(repo.deleteMonument('')).rejects.toThrow();
    });

    test('Then the method getAllMonuments should throw an error', async () => {
      await expect(repo.getAllMonuments()).rejects.toThrow();
    });
  });
});

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRepoMonuments } from '../services/api.repo.monuments.ts';
import { Monument } from '../entities/monuments.ts';

export const loadMonumentsThunk = createAsyncThunk<
  Monument[],
  ApiRepoMonuments
>('monuments/load', async (repo) => {
  const monuments = await repo.getAllMonuments();
  return monuments;
});

export const loadOneMonumentThunk = createAsyncThunk<
  Monument,
  { repo: ApiRepoMonuments; id: Monument['id'] }
>('monument/load', async ({ repo, id }) => {
  const monument = await repo.getMonumentById(id);
  return monument;
});

export const createMonumentThunk = createAsyncThunk<
  Monument,
  { repo: ApiRepoMonuments; monumentToAdd: FormData }
>('monuments/create', async ({ repo, monumentToAdd }) => {
  const createMonument = await repo.createMonument(monumentToAdd);
  return createMonument;
});

export const updateMonumentThunk = createAsyncThunk<
  Monument,
  { repo: ApiRepoMonuments; id: Monument['id']; monumentToUpdate: FormData }
>('monuments/update', async ({ repo, id, monumentToUpdate }) => {
  const updateMonument = await repo.updateMonument(id, monumentToUpdate);
  return updateMonument;
});

export const deleteMonumentThunk = createAsyncThunk<
  Monument,
  { repo: ApiRepoMonuments; id: Monument['id'] }
>('monument/delete', async ({ repo, id }) => {
  const deleteMonument = await repo.deleteMonument(id);
  return deleteMonument;
});

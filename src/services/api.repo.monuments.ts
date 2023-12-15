import { Monument } from '../entities/monuments.js';

export class ApiRepoMonuments {
  apiUrl = serverUrl + '/monuments';
  // eslint-disable-next-line no-unused-vars
  constructor(public token: string) {
    console.log('Token', this.token);
  }

  async createMonument(newMonument: FormData): Promise<Monument> {
    const url = this.apiUrl + '/create';
    const response = await fetch(url, {
      method: 'POST',
      body: newMonument,
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async updateMonument(
    id: string,
    updatedMonument: FormData
  ): Promise<Monument> {
    const url = this.apiUrl + `/update/${id}`;
    const response = await fetch(url, {
      method: 'PATCH',
      body: updatedMonument,
    });

    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async deleteMonument(id: string): Promise<Monument> {
    const url = this.apiUrl + `/delete/${id}`;
    const response = await fetch(url, {
      method: 'DELETE',
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return {} as Monument;
  }

  async getAllMonuments(): Promise<Monument[]> {
    const url = this.apiUrl;
    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);

    return response.json();
  }

  async getMonumentById(id: string): Promise<Monument> {
    const url = this.apiUrl + `/find/${id}`;
    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);

    return response.json();
  }
}

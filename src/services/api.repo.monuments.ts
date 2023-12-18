import { serverUrl } from '../config.js';
import { Monument } from '../entities/monuments.js';

export class ApiRepoMonuments {
  apiUrl = serverUrl + '/monuments';
  constructor(public token: string) {
    this.token = token;
  }

  async createMonument(newMonument: FormData): Promise<Monument> {
    const url = this.apiUrl + '/create';
    console.log('URL SOLICITUD', url);
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
    const url = this.apiUrl + `/${id}`;
    const response = await fetch(url, {
      method: 'PATCH',
      body: updatedMonument,
      headers: {
        Authorization: 'Bearer' + this.token,
      },
    });

    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async deleteMonument(id: Monument['id']): Promise<boolean> {
    const url = this.apiUrl + `/${id}`;
    const response = await fetch(url, {
      method: 'DELETE',
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.ok;
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

import { api } from './config';
import { localStorageRead } from './helpers';

export default class Links {
  static async delete(id) {
    const response = await fetch(`${api}/links/delete/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: localStorageRead('token') }),
    });
    return response.json();
  }

  static async getLinks() {
    const response = await fetch(`${api}/links`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: localStorageRead('token') }),
    });
    const data = response.json();
    return data;
  }

  static async getLink(id) {
    const response = await fetch(`${api}/links/id/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: localStorageRead('token') }),
    });
    return response.json();
  }

  static async add({ title, url, description }) {
    const data = JSON.stringify({
      title,
      url,
      description,
      token: localStorageRead('token'),
    });

    const json = await fetch(`${api}/links/add`, {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const res = json.json();
    return res;
  }
  static async edit({ title, url, description, id }) {
    const data = JSON.stringify({
      title,
      url,
      description,
      token: localStorageRead('token'),
    });

    const json = await fetch(`${api}/links/edit/${id}`, {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const res = json.json();
    return res;
  }
}

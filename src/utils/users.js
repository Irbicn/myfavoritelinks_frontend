import { api } from './config';

export default class Users {
  static async signup({ name, password, email }) {
    const data = await fetch(`${api}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, password, email }),
    });
    return data.json();
  }
  static async signin({ email, password }) {
    const data = await fetch(`${api}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    return data.json();
  }
}

// src/services/api.js
import { authFetch } from '../../por borrar/auth-middleware';

export const fetchProtectedData = async () => {
  const res = await authFetch('http://localhost:8000/api/protected/');

  if (!res.ok) {
    throw new Error('Error al obtener los datos protegidos');
  }

  const data = await res.json();
  return data;
};

// src/middleware/auth-middleware.js

import { refreshToken } from '../services/auth';

// Middleware para agregar el token a todas las solicitudes
export const authFetch = async (url, options = {}) => {
  let token = localStorage.getItem('access_token');

  if (!token) {
    throw new Error('No se encontró el token de acceso');
  }

  options.headers = {
    ...options.headers,
    Authorization: `Bearer ${token}`,
  };

  const res = await fetch(url, options);

  // Si el token ha expirado, intenta refrescarlo
  if (res.status === 401) {
    token = await refreshToken();

    if (token) {
      // Actualiza el token en el encabezado
      options.headers.Authorization = `Bearer ${token}`;
      // Repite la solicitud con el nuevo token
      return await fetch(url, options);
    }
  }

  return res;
};

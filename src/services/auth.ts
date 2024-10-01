// src/services/auth.js

export const login = async (email, password) => {
  const res = await fetch('http://localhost:8000/api/v1/users/token/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
      // Intenta obtener el mensaje de error del cuerpo de la respuesta
      const errorData = await res.json();
      const errorMessage = errorData.detail || 'Error en la autenticación';
      throw new Error(errorMessage); // Lanza un error con el mensaje adecuado
  } else {
      const data = await res.json();
      return data; // Retorna el token de acceso y el token de refresco
  }
};




export const refreshToken = async () => {
  const refresh = localStorage.getItem('refresh_token');

  const res = await fetch('http://localhost:8000/api/v1/users/token/refresh/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refresh }),
  });

  if (!res.ok) {
    throw new Error('No se pudo refrescar el token');
  }

  const data = await res.json();
  localStorage.setItem('access_token', data.access);
  return data.access;
};

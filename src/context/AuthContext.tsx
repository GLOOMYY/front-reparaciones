'use client'

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { login as loginService } from '@/services/auth';

interface AuthContextType {
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

// Crear el contexto
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Proveedor del contexto
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  // Efecto para cargar el token desde localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem('access_token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // Función de login
  const login = async (username: string, password: string): Promise<void> => {
    try {
      const data = await loginService(username, password);
      setToken(data.access);
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);
    } catch (error) {
      console.error('Error durante el login:', error);
      throw error; // Lanzamos el error para que el componente lo capture
    }
  };

  // Función de logout
  const logout = (): void => {
    setToken(null);
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  };

  // Devolver el contexto
  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children} {/* Aquí se deben pasar los hijos */}
    </AuthContext.Provider>
  );
};

// components/PrivateRoute.js
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const PrivateRoute = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            // Redirigir al usuario a la página de inicio de sesión
            router.push('/login');
        }
    }, [router]);

    return children;
};

export default PrivateRoute;

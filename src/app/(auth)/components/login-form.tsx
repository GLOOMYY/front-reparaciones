'use client'

import api from "@/lib/api"
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../../por borrar/AuthContext';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const LoginForm = () => {
    // const { login } = useContext(AuthContext);
    const [email, setEmail] = useState(''); // Cambia a email en lugar de username
    const [password, setPassword] = useState('');
    const router = useRouter(); // Inicializa el router de Next.js

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/users/token/', { email, password });
            localStorage.setItem('token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            alert('Todo bien mi papa')
            router.push('/dashboard'); // Redirigir solo si el login es exitoso
        } catch (error) {
            alert('Email o Contraseña incorrectos')
            console.error('Error during login', error)
        }
    };
    
    return (
        <form onSubmit={handleLogin}>
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                onChange={(e) => setEmail(e.target.value)} 
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <Link href="#" className="ml-auto inline-block text-sm underline">
                                    Forgot your password?
                                </Link>
                            </div>
                            <Input 
                                id="password" 
                                type="password" 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/sign-up" className="underline">
                            Sign up
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </form>
    )
}

export default LoginForm;

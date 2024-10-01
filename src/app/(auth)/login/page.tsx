'use client'

import LoginForm from "@/app/(auth)/components/login-form";
import { AuthProvider } from "@/context/AuthContext";


export const description =
  "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account."

export const Page = () => {
  return (
    <AuthProvider>
      <LoginForm />
    </AuthProvider>
  )
};

export default Page;
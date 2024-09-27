//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
  
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">


'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, LineChart, Users, Zap } from "lucide-react"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' : ''}`}>
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link 
            className={`flex items-center justify-center transition-all duration-500 ${
              isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} 
            href="#"
          >
            <span className="font-bold text-xl">GestaTrack</span>
          </Link>
          <Button 
            asChild 
            className={`transition-all duration-500 ${
              isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 
                  className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none transition-all duration-500 ${
                    isScrolled ? '-translate-y-16 opacity-0' : 'translate-y-0 opacity-100'
                  }`}
                >
                  Welcome to GestaTrack
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Your comprehensive gestation management system. Track, monitor, and optimize your livestock breeding process.
                </p>
              </div>
              <div 
                className={`space-x-4 transition-all duration-500 ${
                  isScrolled ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <Button asChild size="lg">
                  <Link href="/login">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Why Choose GestaTrack?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CalendarDays className="w-6 h-6 mr-2" />
                    Precise Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Monitor gestation periods with pinpoint accuracy, ensuring optimal care for your livestock.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <LineChart className="w-6 h-6 mr-2" />
                    Data-Driven Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Leverage advanced analytics to make informed decisions and improve breeding outcomes.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-6 h-6 mr-2" />
                    Collaborative Platform
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Enable seamless communication between veterinarians, farm managers, and staff.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="w-6 h-6 mr-2" />
                    Efficiency Boost
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Streamline your breeding operations, saving time and resources while improving productivity.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 border-t">
        <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">© 2024 GestaTrack. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
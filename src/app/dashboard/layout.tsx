'use client'
import Header from "@/app/dashboard/components/header"; 
import SideNav from "@/app/dashboard/components/sidenav";
import PrivateRoute from "@/app/dashboard/components/protect"

export const Layout = ({ children }: {children: React.ReactNode}) => {
    return (
      <PrivateRoute>
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <Header />
            <div className="flex h-screen">
              <SideNav />
              <main className="flex-grow ">{children}</main>
            </div>
          </div>
        </div>
      </PrivateRoute>
    );
  };

export default Layout;

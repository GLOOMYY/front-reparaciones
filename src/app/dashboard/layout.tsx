import SideNav from "@/app/dashboard/components/sidenav";
import { AuthProvider } from "@/context/AuthContext";

export const Layout = ({ children }: {children: React.ReactNode}) => {
    return (
      <AuthProvider>
        <div className="flex h-screen">
          <SideNav />
          <main className="flex-grow ">{children}</main>
        </div>
      </AuthProvider>
    );
  };

export default Layout
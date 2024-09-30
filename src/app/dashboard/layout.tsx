import SideNav from "@/app/dashboard/components/sidenav";

export const Layout = ({ children }: {children: React.ReactNode}) => {
    return (
      <div className="flex h-screen">
        <SideNav />
        <main className="flex-grow ">{children}</main>
      </div>
    );
  };

export default Layout
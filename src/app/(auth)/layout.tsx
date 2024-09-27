export const Layout = (
    { children }: {children: React.ReactNode} 
) => (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="w-full max-w-md">{children}</div>
    </div>
)

export default Layout;
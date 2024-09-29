import Charts from "@/app/dashboard/components/charts";
import Dashboard from "@/app/dashboard/components/dashboard";
import OtherDashboard from "@/app/dashboard/components/otherDarshboard";

export const Page = () => (
    <div>
        <Dashboard />
        <Charts />
        <OtherDashboard />
    </div>
);

export default Page;
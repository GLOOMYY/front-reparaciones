import Charts from "@/app/dashboard/components/analytics/charts";
import Dashboard from "@/app/dashboard/components/dashboard";
import OtherDashboard from "@/app/dashboard/components/other-darshboard";

export const Page = () => (
    <div>
        <Dashboard />
        <Charts />
        <OtherDashboard />
    </div>
);

export default Page;
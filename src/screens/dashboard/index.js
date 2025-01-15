"use client";
import { formatCurrency } from "@/helpers/formatCurrency";
import RecentOrderSection from "./RecentOrderSection";
import CustomLineChart from "@/components/CustomLineChart";
import ChartSection from "./ChartSection";

function Dashboard({ dashboardData }) {
  const { totalBuyers, totalCustomers, totalRevenue, orders } = dashboardData;
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-3 gap-5">
        <div className="dashboard-card">
          <h1 className="text-xl font-bold">Total Buyers</h1>
          <h1 className="text-3xl">{totalBuyers}</h1>
        </div>
        <div className="dashboard-card">
          <h1 className="text-xl font-bold">Total Customers</h1>
          <h1 className="text-3xl">{totalCustomers}</h1>
        </div>
        <div className="dashboard-card">
          <h1 className="text-xl font-bold">Total Revenue</h1>
          <h1 className="text-3xl">{formatCurrency(totalRevenue) || 0}</h1>
        </div>
      </div>
      <RecentOrderSection orders={orders} />
      <ChartSection dashboardData={dashboardData} />
    </div>
  );
}

export default Dashboard;

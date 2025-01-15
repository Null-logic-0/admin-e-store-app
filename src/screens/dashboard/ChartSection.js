import CustomLineChart from "@/components/CustomLineChart";

function ChartSection({ dashboardData }) {
  return (
    <>
      <div className="w-full dashboard-card">
        <h1 className="text-2xl font-bold">Sales Chart</h1>
        <div className="w-full h-[300px] text-blue-700">
          <CustomLineChart data={dashboardData.salesChartData} ykey="sales" />
        </div>
      </div>
      <div className="w-full dashboard-card">
        <h1 className="text-2xl font-bold">Customers Chart</h1>
        <div className="w-full h-[300px] text-green-400">
          <CustomLineChart
            data={dashboardData.customerChartData}
            ykey="count"
          />
        </div>
      </div>
    </>
  );
}

export default ChartSection;

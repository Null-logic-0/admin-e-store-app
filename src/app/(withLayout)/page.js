import { getDashboardData } from "@/lib/data-services";
import Dashboard from "@/screens/dashboard";

async function Home() {
  const dashBoardData = await getDashboardData();

  return <Dashboard dashboardData={dashBoardData} />;
}
export default Home;

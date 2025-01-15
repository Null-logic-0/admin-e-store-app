import Sidebar from "@/components/Sidebar/Sidebar";
import { getUserData } from "@/lib/data-services";

export default async function WithLayout({ children }) {
  const userData = await getUserData();
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <Sidebar userData={userData} />
        <main className="flex-1 p-16 pb-24">
          <div className="flex flex-col gap-8 p-6 mx-auto  border-1 border-gray-300 rounded-xl shadow-lg">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

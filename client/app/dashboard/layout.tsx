import Sidebar from "@/components/dashboard/layout/Sidebar";
import Topbar from "@/components/dashboard/layout/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100">

      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Right Content */}
      <div className="ml-72 flex min-h-screen flex-col">

        {/* Fixed Topbar */}
        <Topbar />

        {/* Main Content */}
        <main className="mt-20 flex-1 bg-slate-100 p-8">

          <div className="mx-auto w-full max-w-7xl">

            {children}

          </div>

        </main>

      </div>

    </div>
  );
}
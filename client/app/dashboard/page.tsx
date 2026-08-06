import DashboardHero from "@/components/dashboard/DashboardHero";
import DashboardStats from "@/components/dashboard/cards/DashboardStats";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] p-8 space-y-8">
      <h1 className="text-4xl font-bold text-white">
        Dashboard
      </h1>

      <DashboardHero />

      <DashboardStats />
    </div>
  );
}
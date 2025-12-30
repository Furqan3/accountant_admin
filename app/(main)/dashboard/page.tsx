"use client";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import StatsCards from "@/components/dashboard/stats-cards";
import OrderCard, { Order } from "@/components/dashboard/order-card";
import { useEffect, useState } from "react";







export default function DashboardPage() {
  const [statsData,setData] = useState<any>([]);
  const [ordersData, setOrdersData] = useState<any>([]);
useEffect(() => {
    fetch("/api/dashboard/states")
      .then(res => res.json())
      .then(data => setData(data.statsData));
  }, []);
useEffect(() => {
    fetch("/api/dashboard/orders")
      .then(res => res.json())
      .then(data => setOrdersData(data.ordersData));
  }, []);
  return (
    <div className="h-full flex flex-col gap-6">
  <div className="flex-shrink-0">
    <DashboardHeader title="Dashboard" subtitle="List of all Requested Services" />
  </div>

  <div className="flex-shrink-0">
    <StatsCards data={statsData} />
  </div>

  {/* Scrollable container for OrderCards only */}
  <div className="flex-1 min-h-0 bg-white rounded-lg shadow p-6">
    <div className="h-full space-y-6 overflow-y-auto custom-scrollbar pr-2 pb-6">
      {ordersData.map((order: Order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  </div>
</div>
  );
}

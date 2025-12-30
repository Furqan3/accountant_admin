import { NextResponse } from 'next/server';


const statsData = [
  {
    id: "1",
    title: "Total Order",
    value: "4,334",
    icon: "orders",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    id: "2",
    title: "Completed",
    value: "3,580",
    icon: "completed",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: "3",
    title: "Total Pending",
    value: "1,365",
    icon: "pending",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    id: "4",
    title: "Total Sales",
    value: "$89,000",
    icon: "sales",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
];

export async function GET() {
  return NextResponse.json({
    statsData
  });
}

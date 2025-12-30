import { NextResponse } from 'next/server';
 const ordersData = [
  {
    id: "1",
    orderNo: "ORD-000003",
    date: "10/18/2025",
    company: "Tech Solutions Ltd",
    status: "Pending",
    paymentStatus: "Paid",
    items: [
      { id: "i1", title: "Registered Office Address", qty: 1, price: 30 },
      { id: "i2", title: "Confirmation Statement", price: 45.3 },
      {
        id: "i3",
        title: "Register company as dormant & file Confirmation Statement",
        price: 12.56,
      },
    ],
    total: 90.8,
  },
  {
    id: "2",
    orderNo: "ORD-000004",
    date: "10/19/2025",
    company: "Alpha Systems Ltd",
    status: "Completed",
    paymentStatus: "Paid",
    items: [
      { id: "i4", title: "Registered Office Address", qty: 1, price: 30 },
    ],
    total: 30,
  },
  {
    id: "3",
    orderNo: "ORD-000005",
    date: "10/20/2025",
    company: "Bright Tech Ltd",
    status: "Pending",
    paymentStatus: "Unpaid",
    items: [
      { id: "i5", title: "Confirmation Statement", price: 45.3 },
    ],
    total: 45.3,
  },
  {
    id: "4",
    orderNo: "ORD-000006",
    date: "10/21/2025",
    company: "Nova Solutions",
    status: "Completed",
    paymentStatus: "Paid",
    items: [
      { id: "i6", title: "Registered Office Address", qty: 1, price: 30 },
      { id: "i7", title: "VAT Registration", price: 50 },
    ],
    total: 80,
  },
  {
    id: "5",
    orderNo: "ORD-000007",
    date: "10/22/2025",
    company: "Orbit Enterprises",
    status: "Pending",
    paymentStatus: "Paid",
    items: [
      { id: "i8", title: "Dormant Company Filing", price: 25 },
    ],
    total: 25,
  },
  {
    id: "6",
    orderNo: "ORD-000008",
    date: "10/23/2025",
    company: "Vertex Ltd",
    status: "Completed",
    paymentStatus: "Paid",
    items: [
      { id: "i9", title: "Confirmation Statement", price: 45.3 },
      { id: "i10", title: "Registered Office Address", qty: 1, price: 30 },
    ],
    total: 75.3,
  },
  {
    id: "7",
    orderNo: "ORD-000009",
    date: "10/24/2025",
    company: "Skyline Corp",
    status: "Pending",
    paymentStatus: "Unpaid",
    items: [
      { id: "i11", title: "Company Incorporation", price: 120 },
    ],
    total: 120,
  },
  {
    id: "8",
    orderNo: "ORD-000010",
    date: "10/25/2025",
    company: "Fusion Tech",
    status: "Completed",
    paymentStatus: "Paid",
    items: [
      { id: "i12", title: "Registered Office Address", qty: 1, price: 30 },
    ],
    total: 30,
  },
  {
    id: "9",
    orderNo: "ORD-000011",
    date: "10/26/2025",
    company: "CloudNine Ltd",
    status: "Pending",
    paymentStatus: "Paid",
    items: [
      { id: "i13", title: "VAT Deregistration", price: 60 },
    ],
    total: 60,
  },
  {
    id: "10",
    orderNo: "ORD-000012",
    date: "10/27/2025",
    company: "NextGen Solutions",
    status: "Completed",
    paymentStatus: "Paid",
    items: [
      { id: "i14", title: "Confirmation Statement", price: 45.3 },
      { id: "i15", title: "Dormant Company Filing", price: 25 },
    ],
    total: 70.3,
  },
];

export async function GET() {
  return NextResponse.json({
    ordersData
  });
}
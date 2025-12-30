"use client";

import { ChevronDown } from "lucide-react";

type LineItem = {
  id: string;
  title: string;
  qty?: number;
  price: number;
};

type OrderStatus = "Pending" | "Completed";
type PaymentStatus = "Paid" | "Unpaid";

export type Order = {
  id: string;
  orderNo: string;
  date: string;
  company: string;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  items: readonly LineItem[];
  total: number;
};

const STATUS_STYLES: Record<OrderStatus, string> = {
  Pending: "bg-slate-200 text-slate-700",
  Completed: "bg-green-100 text-green-600",
};

const PAYMENT_STYLES: Record<PaymentStatus, string> = {
  Paid: "bg-purple-100 text-purple-600",
  Unpaid: "bg-red-100 text-red-600",
};

export default function OrderCard({ order }: { order: Order }) {
  return (
    <div className="bg-white rounded-2xl p-1 shadow-sm space-y-4">
      
      <div className=" p-4 border border-primary/20 rounded-lg">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg text-black font-semibold">
            Order {order.orderNo}
          </h3>
          <p className=" text-primary-light">
            {order.date} • <span className="text-primary-dark text-bold">{order.company}</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Status */}
          <button
            className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-medium ${STATUS_STYLES[order.status]}`}
          >
            {order.status}
            <ChevronDown size={14} />
          </button>

          {/* Payment */}
          <span
            className={`px-4 py-1.5 rounded-full text-sm font-medium ${PAYMENT_STYLES[order.paymentStatus]}`}
          >
            {order.paymentStatus}
          </span>
        </div>
      </div>

      {/* Items */}
      <div className="space-y-2">
        {order.items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between text-sm text-gray-700"
          >
            <span>
              {item.title}
              {item.qty ? ` (x${item.qty})` : ""}
            </span>
            <span className="font-medium">
              ${item.price.toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <hr />

      {/* Total */}
      <div className="flex justify-between items-center">
        <span className="text-lg text-black font-semibold">Total</span>
        <span className="text-xl font-semibold text-primary">
          ${order.total.toFixed(2)}
        </span>
      </div>
      </div>
    </div>
  );
}

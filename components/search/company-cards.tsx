"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

export type Company = {
  id: string;
  company: string;
  confimationdate: Date;
  accountduedate: Date;
};

export default function CompanyCard({ company }: { company: Company }) {
  return (
    
    <div className="bg-white rounded-2xl p-1 shadow-sm border border-primary/20 hover:shadow-md transition">
      <div className="p-4 flex items-center justify-between gap-4">
        <div className="flex-1">
          {/* Company name */}
          <h3 className="text-lg font-semibold text-primary">
            {company.company}
          </h3>

          {/* Dates in a single row */}
          <div className="mt-4 flex gap-6">
            <div>
              <p className="text-sm text-gray-500">Confirmation Date</p>
              <p className="text-sm text-gray-900">
                {company.confimationdate.toDateString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Account Due Date</p>
              <p className="text-sm text-gray-900">
                {company.accountduedate.toDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* View More button - vertically centered */}
        <Link
          href={`/search/${company.id}`}
          className="flex items-center gap-1 text-sm bg-primary font-medium text-white hover:opacity-80 px-4 py-4 rounded-lg transition-opacity"
        >
          View More
          <ChevronRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
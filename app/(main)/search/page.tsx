import SearchHeader from "@/components/search/search-header";
import CompanyCard from "@/components/search/company-cards";
export default function SearchPage() {
  return (
    <div className="h-full flex flex-col gap-4">
      <div className="flex-shrink-0">
        <SearchHeader title="Search" />
      </div>
      <div className="flex-1 min-h-0 bg-white  rounded-2xl p-4 space-y-6 overflow-y-auto custom-scrollbar pr-2 pb-6 ">
      <div className="grid grid-cols-1 gap-4">
        {[
          {
            id: "1",
            company: "Tech Solutions Ltd.",
            confimationdate: new Date("2024-05-15"),
            accountduedate: new Date("2024-06-15"),
          },
          {
            id: "2",
            company: "Innovatech Corp.",
            confimationdate: new Date("2024-04-20"),
            accountduedate: new Date("2024-05-20"),
          },
          {
            id: "3",
            company: "FutureSoft Inc.",
            confimationdate: new Date("2024-03-10"),
            accountduedate: new Date("2024-04-10"),
          },
          {
            id: "4",
            company: "Tech Solutions Ltd.",
            confimationdate: new Date("2024-05-15"),
            accountduedate: new Date("2024-06-15"),
          },
          {
            id: "5",
            company: "Innovatech Corp.",
            confimationdate: new Date("2024-04-20"),
            accountduedate: new Date("2024-05-20"),
          },
          {
            id: "6",
            company: "FutureSoft Inc.",
            confimationdate: new Date("2024-03-10"),
            accountduedate: new Date("2024-04-10"),
          },
          {
            id: "7",
            company: "Tech Solutions Ltd.",
            confimationdate: new Date("2024-05-15"),
            accountduedate: new Date("2024-06-15"),
          },
          {
            id: "8",
            company: "Innovatech Corp.",
            confimationdate: new Date("2024-04-20"),
            accountduedate: new Date("2024-05-20"),
          },
          {
            id: "9",
            company: "FutureSoft Inc.",
            confimationdate: new Date("2024-03-10"),
            accountduedate: new Date("2024-04-10"),
          },
        ].map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>      
      </div>   

     
    </div>
  );
}

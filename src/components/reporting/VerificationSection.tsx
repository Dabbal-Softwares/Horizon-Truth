import { useState, useEffect } from "react";
import ReportCard from "./ReportCard";
import Pagination from "../ui/Pagination";
import { ReportStatus, ReportCategory } from "../../types/report.type";
import { useReportStore } from "../../store/report.store";

// Reusable Filter Select Component
interface FilterSelectProps {
  id: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}

const FilterSelect = ({ id, options, value, onChange }: FilterSelectProps) => {
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

// Main Component
const VerificationSection = () => {
  const {
    reports,
    loading,
    error,
    filters,
    getReports,
    setFilters,
    clearFilters,
  } = useReportStore();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const itemsPerPage = 6;

  // Initialize filters on component mount
  useEffect(() => {
    getReports();
  }, [getReports]);

  // Apply filters when they change
  useEffect(() => {
    const newFilters = {
      ...filters,
      status:
        selectedStatus !== "all" ? (selectedStatus as ReportStatus) : undefined,
      categories:
        selectedCategory !== "all"
          ? [selectedCategory as ReportCategory]
          : undefined,
      page: 1, // Reset to first page when filters change
    };

    setFilters(newFilters);
    getReports(newFilters);
  }, [selectedCategory, selectedStatus]);

  // Handle page changes
  const handlePageChange = (page: number) => {
    const newFilters = { ...filters, page };
    setFilters(newFilters);
    getReports(newFilters);
  };

  // Filter options
  const categoryOptions = [
    { value: "all", label: "All Categories" },
    { value: ReportCategory.FALSE_INFORMATION, label: "False Information" },
    { value: ReportCategory.MISLEADING_CONTENT, label: "Misleading Content" },
    { value: ReportCategory.MANIPULATED_MEDIA, label: "Manipulated Media" },
    { value: ReportCategory.HARMFUL_ADVICE, label: "Harmful Advice" },
    { value: ReportCategory.OTHER, label: "Other" },
  ];

  const statusOptions = [
    { value: "all", label: "All Statuses" },
    { value: ReportStatus.PENDING, label: "Pending Review" },
    { value: ReportStatus.UNDER_REVIEW, label: "Under Review" },
    { value: ReportStatus.RESOLVED, label: "Resolved" },
    { value: ReportStatus.REJECTED, label: "Rejected" },
  ];
  // Format time ago for display
  // const formatTimeAgo = (dateString: string) => {
  //   const date = new Date(dateString);
  //   const now = new Date();
  //   const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  //   if (diffInSeconds < 60) return "Just now";
  //   if (diffInSeconds < 3600)
  //     return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  //   if (diffInSeconds < 86400)
  //     return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  //   if (diffInSeconds < 2592000)
  //     return `${Math.floor(diffInSeconds / 86400)} days ago`;

  //   return date.toLocaleDateString();
  // };

  return (
    <section id="verify-content" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sky-500 font-semibold tracking-wider">
            COMMUNITY VERIFICATION
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Help Verify Reported Content
          </h2>
          <p className="text-gray-700">
            Contribute to our community verification efforts by analyzing
            reported content.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <h3 className="text-lg font-semibold text-gray-900">
              Filter Reports:
            </h3>
            <div className="flex flex-wrap gap-4">
              <FilterSelect
                id="category-filter"
                options={categoryOptions}
                value={selectedCategory}
                onChange={setSelectedCategory}
              />

              <FilterSelect
                id="status-filter"
                options={statusOptions}
                value={selectedStatus}
                onChange={setSelectedStatus}
              />

              <button
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition duration-300"
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedStatus("all");
                  clearFilters();
                  getReports();
                }}
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {loading && (
          <div className="text-center py-8">
            <p className="text-gray-500">Loading reports...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            <p>Error: {error}</p>
          </div>
        )}

        <div className="space-y-6">
          {!loading && Array.isArray(reports) && reports.length > 0
            ? reports.map((report) => (
                <ReportCard
                  key={report.id}
                  report={{
                    id: report.id,
                    description: report.description,
                    category: Array.isArray(report.categories)
                      ? report.categories.join(", ")
                      : "",
                    status: report.status,
                    // postedTime: formatTimeAgo(
                    //   report?.createdAt
                    //     ? new Date(report.createdAt).toDateString()
                    //     : new Date().toDateString()
                    // ),
                    reviewers: 0,
                  }}
                />
              ))
            : !loading && (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <p className="text-gray-500">
                    No reports match your selected filters.
                  </p>
                </div>
              )}
        </div>

        {!loading && reports.length > 0 && (
          <div className="mt-12 flex justify-center">
            <Pagination
              currentPage={filters.page || 1}
              totalPages={Math.ceil(
                useReportStore.getState().total / itemsPerPage
              )}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default VerificationSection;

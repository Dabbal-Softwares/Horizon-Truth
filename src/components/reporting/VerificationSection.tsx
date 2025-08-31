export interface Report {
  id: number;
  title: string;
  description: string;
  category: string;
  status: 'pending' | 'verified' | 'debunked' | 'investigation';
  postedTime: string;
  reviewers: number;
}

interface FilterOption {
  value: string;
  label: string;
}

const reportsData: Report[] = [
  {
    id: 1,
    title: '"Miracle Cure" for Diabetes Making Rounds on Social Media',
    description: 'A post claiming that a simple mixture of lemon juice and baking soda can "cure diabetes permanently" is being widely shared across Facebook and WhatsApp groups.',
    category: 'Health/Medical',
    status: 'pending',
    postedTime: '2 hours ago',
    reviewers: 12
  },
  {
    id: 2,
    title: 'Political Ad Taken Out of Context in Campaign Material',
    description: 'A campaign video selectively edits a opponent\'s statement to completely reverse its meaning. The full context shows the opposite intention.',
    category: 'Political',
    status: 'verified',
    postedTime: '1 day ago',
    reviewers: 24
  },
  {
    id: 3,
    title: 'AI-Generated Image of Celebrity Endorsement Goes Viral',
    description: 'Fake image of a famous actor promoting a cryptocurrency scheme has been circulating on Instagram. The image was generated using AI tools.',
    category: 'Financial',
    status: 'debunked',
    postedTime: '3 days ago',
    reviewers: 18
  },
  {
    id: 4,
    title: 'Misleading Climate Change Graph Circulating on Twitter',
    description: 'A graph purportedly showing global temperatures has been selectively cropped to hide the overall warming trend of the past century.',
    category: 'Science/Tech',
    status: 'investigation',
    postedTime: '5 hours ago',
    reviewers: 8
  }
];

const categoryOptions: FilterOption[] = [
  { value: 'all', label: 'All Categories' },
  { value: 'health', label: 'Health/Medical' },
  { value: 'political', label: 'Political' },
  { value: 'science', label: 'Science/Tech' },
  { value: 'social', label: 'Social Issues' },
  { value: 'financial', label: 'Financial' }
];

const statusOptions: FilterOption[] = [
  { value: 'all', label: 'All Statuses' },
  { value: 'pending', label: 'Needs Review' },
  { value: 'investigation', label: 'Under Investigation' },
  { value: 'verified', label: 'Verified' },
  { value: 'debunked', label: 'Debunked' }
];

// Reusable Filter Select Component
interface FilterSelectProps {
  id: string;
  options: FilterOption[];
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
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

// Main Component
import { useState } from 'react';
import ReportCard from './ReportCard';
import Pagination from '../ui/Pagination';

const VerificationSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  
  // Filter reports based on selected filters
  const filteredReports = reportsData.filter(report => {
    const categoryMatch = selectedCategory === 'all' || report.category.toLowerCase().includes(selectedCategory);
    const statusMatch = selectedStatus === 'all' || report.status === selectedStatus;
    return categoryMatch && statusMatch;
  });
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredReports.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedReports = filteredReports.slice(startIndex, startIndex + itemsPerPage);
  
  return (
    <section id="verify-content" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sky-500 font-semibold tracking-wider">COMMUNITY VERIFICATION</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Help Verify Reported Content</h2>
          <p className="text-gray-700">Contribute to our community verification efforts by analyzing reported content.</p>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <h3 className="text-lg font-semibold text-gray-900">Filter Reports:</h3>
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
                className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition duration-300"
                onClick={() => {
                  // In a real app, this would trigger a refetch or filter application
                  setCurrentPage(1); // Reset to first page when filters change
                }}
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          {paginatedReports.length > 0 ? (
            paginatedReports.map(report => (
              <ReportCard key={report.id} report={report} />
            ))
          ) : (
            <div className="text-center py-8 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No reports match your selected filters.</p>
            </div>
          )}
        </div>
        
        {filteredReports.length > itemsPerPage && (
          <div className="mt-12 flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default VerificationSection;
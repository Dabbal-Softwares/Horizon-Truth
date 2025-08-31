
// Reusable Pagination Component
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pages = [];
  
  // Always show first page
  pages.push(1);
  
  // Show ellipsis if needed
  if (currentPage > 3) {
    pages.push('ellipsis-left');
  }
  
  // Show pages around current page
  for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
    pages.push(i);
  }
  
  // Show ellipsis if needed
  if (currentPage < totalPages - 2) {
    pages.push('ellipsis-right');
  }
  
  // Always show last page if there's more than one page
  if (totalPages > 1) {
    pages.push(totalPages);
  }
  
  return (
    <nav className="flex items-center space-x-2">
      <button 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>
      
      {pages.map((page, index) => {
        if (page === 'ellipsis-left' || page === 'ellipsis-right') {
          return <span key={index} className="px-2 text-gray-500">...</span>;
        }
        
        return (
          <button
            key={index}
            onClick={() => onPageChange(page as number)}
            className={`px-3 py-1 rounded border ${
              currentPage === page 
                ? 'border-sky-500 bg-sky-500 text-white' 
                : 'border-gray-300 text-gray-700 hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        );
      })}
      
      <button 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
import type { Report, ReportStatus } from "../../types/report.type";


interface ReportCardProps {
  report: Report;
}

interface StatusConfigItem {
className: string;
label: string;
buttonText: string;
buttonClass: string;
}

const ReportCard = ({ report }: ReportCardProps) => {

const statusConfig: Record<ReportStatus, StatusConfigItem> = {
  PENDING: {
    className: 'bg-yellow-100 text-yellow-800',
    label: 'Pending Review',
    buttonText: 'Review Report',
    buttonClass: 'bg-sky-500 hover:bg-sky-600 text-white',
  },
  UNDER_REVIEW: {
    className: 'bg-blue-100 text-blue-800',
    label: 'Under Investigation',
    buttonText: 'Continue Review',
    buttonClass: 'bg-sky-500 hover:bg-sky-600 text-white',
  },
  RESOLVED: {
    className: 'bg-green-100 text-green-800',
    label: 'Verified',
    buttonText: 'View Verification',
    buttonClass: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
  },
  REJECTED: {
    className: 'bg-red-100 text-red-800',
    label: 'Debunked',
    buttonText: 'View Debunking',
    buttonClass: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
  },
  DUPLICATE:{
    className: 'bg-red-100 text-red-800',
    label: 'Debunked',
    buttonText: 'View Debunking',
    buttonClass: 'bg-gray-100 hover:bg-gray-200 text-gray-800',    
  }
};

// Example usage
const config = statusConfig[report.status as ReportStatus];


  return (
    <div className="report-card bg-white rounded-xl shadow-md p-6">
      <div className="flex flex-col md:flex-row md:items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center mb-4">
            <span className={`${config.className} text-xs font-medium px-2.5 py-0.5 rounded`}>
              {config.label}
            </span>
            <span className="ml-4 text-sm text-gray-500">Posted {report?.createdAt?.toDateString()}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{report.description}</h3>
          <p className="text-gray-700 mb-4">{report.description}</p>
          <div className="flex items-center text-sm text-gray-500">
            <span className="mr-6"><i className="fas fa-tag mr-1"></i> {report.categories[0]}</span>
            {/* <span><i className="fas fa-users mr-1"></i> {report.reviewers} reviewers</span> */}
          </div>
        </div>
        <div className="mt-4 md:mt-0 md:ml-6">
          <button className={`${config.buttonClass} px-4 py-2 rounded-lg transition duration-300 whitespace-nowrap`}>
            {config.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
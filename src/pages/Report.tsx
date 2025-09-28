import { useState } from 'react';
import { FaExclamationTriangle, FaTwitter, FaFacebook, FaLink, FaClipboard, FaCheckCircle } from 'react-icons/fa';
import { MdHealthAndSafety } from 'react-icons/md';

const ReportPage = () => {
  const [activeTab, setActiveTab] = useState<'social' | 'health'>('social');
  const [reportStep, setReportStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    url: '',
    platform: '',
    description: '',
    screenshots: null as FileList | null,
    severity: 'medium',
    category: '',
    contactEmail: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, screenshots: e.target.files }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
    }, 1500);
  };

  const socialPlatforms = [
    { id: '12kalsdfj',name: 'Twitter', icon: <FaTwitter className="mr-2" /> },
    { id: '22kalsdfj',name: 'Facebook', icon: <FaFacebook className="mr-2" /> },
    { id: '32kalsdfj',name: 'Instagram', icon: <FaClipboard className="mr-2" /> },
    { id: '42kalsdfj',name: 'YouTube', icon: <FaClipboard className="mr-2" /> },
    { id: '52kalsdfj',name: 'Other', icon: <FaLink className="mr-2" /> }
  ];

  const healthCategories = [
    'Fake COVID-19 treatments',
    'Vaccine misinformation',
    'Miracle cure claims',
    'Dangerous diet advice',
    'Unverified health products',
    'Other health misinformation'
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full text-center">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCheckCircle className="text-green-500 text-3xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Report Submitted!</h1>
          <p className="text-lg text-gray-700 mb-6">
            Thank you for helping combat {activeTab === 'social' ? 'social media' : 'health'} misinformation. 
            Our team will review your submission within 24 hours.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-blue-800 font-medium">Your reference ID: HT-{Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
          </div>
          <button 
            onClick={() => {
              setSubmitted(false);
              setReportStep(1);
              setFormData({
                url: '',
                platform: '',
                description: '',
                screenshots: null,
                severity: 'medium',
                category: '',
                contactEmail: ''
              });
            }}
            className="bg-sky-500 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg"
          >
            Submit Another Report
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaExclamationTriangle className="text-sky-500 text-2xl" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Report Misinformation</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Help us combat false information by submitting suspicious content
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className={`flex-1 py-4 px-1 text-center border-b-2 font-medium text-lg ${
              activeTab === 'social'
                ? 'border-blue-500 text-sky-500'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('social')}
          >
            <div className="flex items-center justify-center">
              <FaTwitter className="mr-2" />
              Social Media
            </div>
          </button>
          <button
            className={`flex-1 py-4 px-1 text-center border-b-2 font-medium text-lg ${
              activeTab === 'health'
                ? 'border-blue-500 text-sky-500'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('health')}
          >
            <div className="flex items-center justify-center">
              <MdHealthAndSafety className="mr-2" />
              Health Information
            </div>
          </button>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between mb-10 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10"></div>
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  reportStep >= step ? 'bg-sky-500 text-white' : 'bg-gray-200 text-gray-600'
                } font-semibold`}
              >
                {step}
              </div>
              <span className={`mt-2 text-sm font-medium ${
                reportStep >= step ? 'text-sky-500' : 'text-gray-500'
              }`}>
                {step === 1 ? 'Details' : step === 2 ? 'Content' : 'Review'}
              </span>
            </div>
          ))}
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <form onSubmit={handleSubmit}>
            {reportStep === 1 && (
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {activeTab === 'social' 
                    ? 'Where did you see this content?' 
                    : 'What type of health misinformation is this?'}
                </h2>
                
                {activeTab === 'social' ? (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Platform
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {socialPlatforms.map((platform) => (
                          <button
                            key={platform.id}
                            type="button"
                            className={`flex items-center justify-center p-3 rounded-lg border ${
                              formData.platform === platform.name
                                ? 'border-blue-500 bg-blue-50 text-sky-500'
                                : 'border-gray-300 hover:border-blue-300'
                            } transition-colors`}
                            onClick={() => setFormData({ ...formData, platform: platform.name })}
                          >
                            {platform.icon}
                            {platform.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
                        Content URL (if available)
                      </label>
                      <input
                        type="url"
                        id="url"
                        name="url"
                        value={formData.url}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="https://example.com/suspicious-post"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Misinformation Category
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {healthCategories.map((category) => (
                          <button
                            key={category}
                            type="button"
                            className={`p-3 rounded-lg border ${
                              formData.category === category
                                ? 'border-blue-500 bg-blue-50 text-sky-500'
                                : 'border-gray-300 hover:border-blue-300'
                            } transition-colors text-left`}
                            onClick={() => setFormData({ ...formData, category })}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="health-url" className="block text-sm font-medium text-gray-700 mb-1">
                        Where did you see this information? (URL)
                      </label>
                      <input
                        type="url"
                        id="health-url"
                        name="url"
                        value={formData.url}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="https://example.com/fake-health-claim"
                      />
                    </div>
                  </div>
                )}

                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setReportStep(2)}
                    disabled={
                      activeTab === 'social' 
                        ? !formData.platform 
                        : !formData.category
                    }
                    className={`px-6 py-3 rounded-lg font-medium ${
                      (activeTab === 'social' ? formData.platform : formData.category)
                        ? 'bg-sky-500 hover:bg-green-700 text-white'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    } transition-colors shadow-sm`}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {reportStep === 2 && (
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Tell us more about the content
                </h2>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                      Why do you believe this is misinformation?
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Provide details about why you think this content is false or misleading..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      How severe is this misinformation?
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {['low', 'medium', 'high'].map((level) => (
                        <button
                          key={level}
                          type="button"
                          className={`p-3 rounded-lg border ${
                            formData.severity === level
                              ? level === 'low'
                                ? 'border-green-500 bg-green-50 text-green-600'
                                : level === 'medium'
                                ? 'border-yellow-500 bg-yellow-50 text-yellow-600'
                                : 'border-red-500 bg-red-50 text-red-600'
                              : 'border-gray-300 hover:border-blue-300'
                          } transition-colors capitalize`}
                          onClick={() => setFormData({ ...formData, severity: level as any})}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="screenshots" className="block text-sm font-medium text-gray-700 mb-1">
                      Upload Screenshots (Optional)
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="screenshots"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-sky-500 hover:text-blue-500 focus-within:outline-none"
                          >
                            <span>Upload files</span>
                            <input
                              id="screenshots"
                              name="screenshots"
                              type="file"
                              multiple
                              onChange={handleFileChange}
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 5MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setReportStep(1)}
                    className="px-6 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setReportStep(3)}
                    disabled={!formData.description}
                    className={`px-6 py-3 rounded-lg font-medium ${
                      formData.description
                        ? 'bg-sky-500 hover:bg-green-700 text-white'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    } transition-colors shadow-sm`}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {reportStep === 3 && (
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Review your report
                </h2>

                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="font-medium text-gray-900 mb-4">Report Summary</h3>
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="w-1/3 text-sm text-gray-500">Type:</div>
                      <div className="w-2/3 font-medium">
                        {activeTab === 'social' ? 'Social Media' : 'Health'} Misinformation
                      </div>
                    </div>
                    {activeTab === 'social' ? (
                      <div className="flex">
                        <div className="w-1/3 text-sm text-gray-500">Platform:</div>
                        <div className="w-2/3 font-medium">{formData.platform}</div>
                      </div>
                    ) : (
                      <div className="flex">
                        <div className="w-1/3 text-sm text-gray-500">Category:</div>
                        <div className="w-2/3 font-medium">{formData.category}</div>
                      </div>
                    )}
                    {formData.url && (
                      <div className="flex">
                        <div className="w-1/3 text-sm text-gray-500">URL:</div>
                        <div className="w-2/3 font-medium break-all">{formData.url}</div>
                      </div>
                    )}
                    <div className="flex">
                      <div className="w-1/3 text-sm text-gray-500">Severity:</div>
                      <div className="w-2/3 font-medium capitalize">{formData.severity}</div>
                    </div>
                    <div className="flex">
                      <div className="w-1/3 text-sm text-gray-500">Description:</div>
                      <div className="w-2/3 font-medium">{formData.description}</div>
                    </div>
                    {formData.screenshots && (
                      <div className="flex">
                        <div className="w-1/3 text-sm text-gray-500">Screenshots:</div>
                        <div className="w-2/3 font-medium">
                          {formData.screenshots.length} file(s) attached
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
                    Email (optional - for follow up)
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-6"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="mt-8 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setReportStep(2)}
                    className="px-6 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-lg font-medium bg-sky-500 hover:bg-green-700 text-white transition-colors shadow-sm"
                  >
                    Submit Report
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
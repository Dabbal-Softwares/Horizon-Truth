const ReportingForm = () => {
  return (
    <section id="report-form" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-sky-500 text-white p-6">
            <h2 className="text-2xl font-bold">Submit a Report</h2>
            <p>
              Help us identify potential misinformation by providing details
              below.
            </p>
          </div>

          <form className="p-6 space-y-6">
            <div>
              <label
                htmlFor="report-url"
                className="block text-gray-700 font-medium mb-2"
              >
                Content URL (if applicable)
              </label>
              <input
                type="url"
                id="report-url"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                placeholder="https://example.com/questionable-article"
              />
            </div>

            <div>
              <label
                htmlFor="report-description"
                className="block text-gray-700 font-medium mb-2"
              >
                Describe the content and why you believe it may be
                misinformation
              </label>
              <textarea
                id="report-description"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                placeholder="Provide details about where you saw this content, what claims it makes, and why you suspect it might be misleading..."
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="report-evidence"
                className="block text-gray-700 font-medium mb-2"
              >
                Supporting evidence or sources
              </label>
              <textarea
                id="report-evidence"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                placeholder="Share any sources you've already checked or evidence that supports your concerns..."
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Category of content
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded text-sky-500 focus:ring-sky-500"
                  />
                  <span className="ml-2 text-gray-700">Health/Medical</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded text-sky-500 focus:ring-sky-500"
                  />
                  <span className="ml-2 text-gray-700">Political</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded text-sky-500 focus:ring-sky-500"
                  />
                  <span className="ml-2 text-gray-700">Science/Tech</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded text-sky-500 focus:ring-sky-500"
                  />
                  <span className="ml-2 text-gray-700">Social Issues</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded text-sky-500 focus:ring-sky-500"
                  />
                  <span className="ml-2 text-gray-700">Financial</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded text-sky-500 focus:ring-sky-500"
                  />
                  <span className="ml-2 text-gray-700">Other</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Upload screenshots (optional)
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                <div className="space-y-1 text-center">
                  <div className="flex text-sm text-gray-600 justify-center">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-sky-500 hover:text-sky-400 focus-within:outline-none">
                      <span>Upload files</span>
                      <input type="file" className="sr-only" multiple />
                    </label>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms-agreement"
                type="checkbox"
                className="h-4 w-4 text-sky-500 focus:ring-sky-500 border-gray-300 rounded"
              />
              <label
                htmlFor="terms-agreement"
                className="ml-2 block text-sm text-gray-700"
              >
                I agree to the{" "}
                <a href="#" className="text-sky-500 hover:text-sky-600">
                  Terms of Service
                </a>{" "}
                and confirm that I'm submitting this report in good faith.
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg"
              >
                Submit Report
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReportingForm;

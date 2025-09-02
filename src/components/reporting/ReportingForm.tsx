import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import InputField from "../ui/InputField";
import { Checkbox, CheckboxGroup } from "../ui/CheckboxField";
import FileUpload from "../ui/FileUpload";
import { useGameStore } from "../../store/game.store";
import { useReportStore } from "../../store/report.store";
import { useAuthStore } from "../../store/auth.store";
import { toast } from "react-hot-toast";
import SelectField from "../ui/SelectField";

const reportFormSchema = z.object({
  url: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  description: z.string().min(10, "Description must be at least 10 characters"),
  evidence: z.string().optional(),
  categoryId: z.string(),
  categories: z.array(z.string()).min(1, "Please select at least one category"),
  screenshots: z.any().optional(),
  termsAgreement: z
    .boolean()
    .refine((val) => val === true, "You must agree to the terms"),
});

type ReportFormData = z.infer<typeof reportFormSchema>;

const formFields = {
  url: {
    type: "url",
    label: "Content URL (if applicable)",
    placeholder: "https://example.com/questionable-article",
    optional: true,
  },
  description: {
    type: "textarea",
    label: "Describe the content and why you believe it may be misinformation",
    placeholder:
      "Provide details about where you saw this content, what claims it makes, and why you suspect it might be misleading...",
    rows: 4,
  },
  evidence: {
    type: "textarea",
    label: "Supporting evidence or sources",
    placeholder:
      "Share any sources you've already checked or evidence that supports your concerns...",
    rows: 3,
    optional: true,
  },
};

export enum ReportCategory {
  FALSE_INFORMATION = "false_information",
  MISLEADING_CONTENT = "misleading_content",
  MANIPULATED_MEDIA = "manipulated_media",
  HARMFUL_ADVICE = "harmful_advice",
  OTHER = "other",
}

export const reportCategoryOptions = [
  { id: ReportCategory.FALSE_INFORMATION, label: "False Information" },
  { id: ReportCategory.MISLEADING_CONTENT, label: "Misleading Content" },
  { id: ReportCategory.MANIPULATED_MEDIA, label: "Manipulated Media" },
  { id: ReportCategory.HARMFUL_ADVICE, label: "Harmful Advice" },
  { id: ReportCategory.OTHER, label: "Other" },
];

const ReportingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ReportFormData>({
    resolver: zodResolver(reportFormSchema),
    defaultValues: {
      categories: [],
      url: "",
      evidence: "",
      termsAgreement: false,
    },
  });

  const { categories } = useGameStore();
  const { createReport, loading, error, message, clearError, clearMessage } =
    useReportStore();
  const { user, isAuthenticated, isGuest } = useAuthStore();
  const [screenshotFiles, setScreenshotFiles] = useState<File[]>([]);

  const onSubmit = async (data: ReportFormData) => {
    try {
      console.log("onSubmit : ", data)
      clearError();
      clearMessage();

      // Prepare form data for file upload
      const formData = new FormData();

      // Add text fields
      formData.append("description", data.description);
      formData.append("categories", JSON.stringify(data.categories));
      formData.append("submittedById", user?.id || "");
      formData.append("categoryId", data.categoryId);

      if (data.url) formData.append("url", data.url);
      if (data.evidence) formData.append("evidence", data.evidence);

      // Add screenshot files
      screenshotFiles.forEach((file, _) => {
        formData.append(`screenshots`, file);
      });

      // Create report using the store - with FormData
      const report = await createReport(formData); // Pass FormData directly

      if (report) {
        toast.success("Report submitted successfully!");
        reset();
        setScreenshotFiles([]);

        // Clear file input if needed
        const fileInput = document.querySelector(
          'input[type="file"]'
        ) as HTMLInputElement;
        if (fileInput) fileInput.value = "";
      }
    } catch (error: any) {
      // console.log("error : ",error)
      toast.error(error.message || "Failed to submit report");
    }
  };

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
            {!isAuthenticated && !isGuest && (
              <p className="text-sm mt-2 bg-yellow-500 bg-opacity-20 p-2 rounded">
                Please log in or continue as guest to submit a report
              </p>
            )}
          </div>

          {/* Display messages and errors */}
          {message && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mx-6 mt-4">
              {message}
            </div>
          )}

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mx-6 mt-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
            <InputField
              id="url"
              type="url"
              label={formFields.url.label}
              placeholder={formFields.url.placeholder}
              optional={formFields.url.optional}
              register={register}
              errors={errors}
              disabled={isSubmitting || loading}
            />

            <InputField
              id="description"
              type="textarea"
              label={formFields.description.label}
              placeholder={formFields.description.placeholder}
              rows={formFields.description.rows}
              register={register}
              errors={errors}
              disabled={isSubmitting || loading}
            />

            <InputField
              id="evidence"
              type="textarea"
              label={formFields.evidence.label}
              placeholder={formFields.evidence.placeholder}
              rows={formFields.evidence.rows}
              optional={formFields.evidence.optional}
              register={register}
              errors={errors}
              disabled={isSubmitting || loading}
            />

            <SelectField
              id="categoryId"
              label="Subject"
              options={categories.map((category) => ({
                label: category.label,
                value: category.id,
              }))}
              register={register}
              errors={errors}
              required={true}
            />

            <CheckboxGroup
              id="categories"
              label="Category of content"
              options={reportCategoryOptions}
              register={register}
              errors={errors}
              disabled={isSubmitting || loading}
            // selectedValues={selectedCategories}
            />

            <FileUpload
              id="screenshots"
              label="Upload Screenshots"
              register={register}
              errors={errors}
              maxFiles={5}
              maxSize={5}
            // onFilesChange={handleScreenshotChange}
            // disabled={isSubmitting || loading}
            />

            <Checkbox
              id="termsAgreement"
              label="I agree to the Terms of Service and confirm that I'm submitting this report in good faith."
              linkText="Terms of Service"
              linkUrl="#"
              register={register}
              errors={errors}
              disabled={isSubmitting || loading}
            />

            <div>
              <button
                type="submit"
                disabled={
                  isSubmitting || loading
                }
                className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg"
              >
                {isSubmitting || loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Submit Report"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReportingForm;

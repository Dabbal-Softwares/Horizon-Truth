import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import InputField from '../ui/InputField';
import { Checkbox, CheckboxGroup } from '../ui/CheckboxField';
import FileUpload from '../ui/FileUpload';

const reportFormSchema = z.object({
  url: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  evidence: z.string().optional(),
  categories: z.array(z.string()).min(1, 'Please select at least one category'),
  screenshots: z.any().optional(),
  termsAgreement: z.boolean().refine(val => val === true, 'You must agree to the terms')
});

type ReportFormData = z.infer<typeof reportFormSchema>;

const formFields = {
  url: {
    type: 'url',
    label: 'Content URL (if applicable)',
    placeholder: 'https://example.com/questionable-article',
    optional: true
  },
  description: {
    type: 'textarea',
    label: 'Describe the content and why you believe it may be misinformation',
    placeholder: 'Provide details about where you saw this content, what claims it makes, and why you suspect it might be misleading...',
    rows: 4
  },
  evidence: {
    type: 'textarea',
    label: 'Supporting evidence or sources',
    placeholder: 'Share any sources you\'ve already checked or evidence that supports your concerns...',
    rows: 3,
    optional: true
  }
};

const categories = [
  { id: 'health', label: 'Health/Medical' },
  { id: 'political', label: 'Political' },
  { id: 'science', label: 'Science/Tech' },
  { id: 'social', label: 'Social Issues' },
  { id: 'financial', label: 'Financial' },
  { id: 'other', label: 'Other' }
];

const ReportingForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ReportFormData>({
    resolver: zodResolver(reportFormSchema),
    defaultValues: {
      categories: []
    }
  });

  const onSubmit = (data: ReportFormData) => {
    console.log('Form submitted:', data);
    // Handle form submission here
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
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
            <InputField
              id="url"
              type="url"
              label={formFields.url.label}
              placeholder={formFields.url.placeholder}
              optional={formFields.url.optional}
              register={register}
              errors={errors}
            />

            <InputField
              id="description"
              type="textarea"
              label={formFields.description.label}
              placeholder={formFields.description.placeholder}
              rows={formFields.description.rows}
              register={register}
              errors={errors}
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
            />

            <CheckboxGroup
              id="categories"
              label="Category of content"
              options={categories}
              register={register}
              errors={errors}
            />

            <FileUpload
              id="screenshots"
              label="Upload screenshots (optional)"
              register={register}
              errors={errors}
            />

            <Checkbox
              id="termsAgreement"
              label="I agree to the Terms of Service and confirm that I'm submitting this report in good faith."
              linkText="Terms of Service"
              linkUrl="#"
              register={register}
              errors={errors}
            />

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
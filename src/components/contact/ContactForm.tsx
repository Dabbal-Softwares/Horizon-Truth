import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import InputField from '../ui/InputField';
import { Checkbox } from '../ui/CheckboxField';
import SelectField from '../ui/SelectField';

const API_URL = import.meta.env.VITE_API_URL;

const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  consent: z.boolean().refine(val => val === true, 'You must consent to continue')
});


type ContactFormData = z.infer<typeof contactFormSchema>;

const subjectOptions = [
  { value: '', label: 'Select a subject' },
  { value: 'general', label: 'General Inquiry' },
  { value: 'support', label: 'Technical Support' },
  { value: 'partnership', label: 'Partnership Opportunity' },
  { value: 'media', label: 'Media Inquiry' },
  { value: 'education', label: 'Educational Program' },
  { value: 'report', label: 'Report Misinformation' },
  { value: 'other', label: 'Other' }
];

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      phone: '',
      consent: false
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Form submitted successfully:', result);
      
      reset();
      alert('Message sent successfully! We will get back to you soon.');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again.');
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-sky-500 text-white p-6">
            <h2 className="text-2xl font-bold">Send Us a Message</h2>
            <p>Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <InputField
                id="firstName"
                type="text"
                label="First Name"
                register={register}
                errors={errors}
              />
              
              <InputField
                id="lastName"
                type="text"
                label="Last Name"
                register={register}
                errors={errors}
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <InputField
                id="email"
                type="email"
                label="Email Address"
                register={register}
                errors={errors}
              />
              
              <InputField
                id="phone"
                type="tel"
                label="Phone Number"
                optional={true}
                register={register}
                errors={errors}
              />
            </div>
            
            <SelectField
              id="subject"
              label="Subject"
              options={subjectOptions}
              register={register}
              errors={errors}
              required={true}
            />
            
            <InputField
              id="message"
              type="textarea"
              label="Message"
              placeholder="Please provide details about your inquiry..."
              rows={6}
              register={register}
              errors={errors}
            />
            
            <Checkbox
              id="consent"
              label="I consent to Horizon Truth collecting my details through this form."
              register={register}
              errors={errors}
            />
            
            <div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-sky-500 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
interface CheckboxGroupProps {
  id: string;
  label: string;
  options: { id: string; label: string }[];
  register: any;
  errors: any;
  disabled?: boolean;
}

export const CheckboxGroup = ({ id, label, options, register, errors, disabled = false }: CheckboxGroupProps) => {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <div className="grid grid-cols-2 gap-4">
        {options.map(option => (
          <label key={option.id} className="flex items-center">
            <input
              type="checkbox"
              value={option.id}
              disabled={disabled}
              className="rounded text-sky-500 focus:ring-sky-500"
              {...register(id)}
            />
            <span className="ml-2 text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
      {errors[id] && <p className="mt-1 text-red-500 text-sm">{errors[id].message}</p>}
    </div>
  );
};


// Reusable Checkbox Component
interface CheckboxProps {
  id: string;
  label: string;
  register: any;
  errors: any;
  linkText?: string;
  linkUrl?: string;
  disabled?: boolean;
}

export const Checkbox = ({ id, label, register, errors, linkText, linkUrl, disabled = false }: CheckboxProps) => {
  return (
    <div className="flex items-start">
      <input
        id={id}
        type="checkbox"
        disabled={disabled}
        className="h-4 w-4 mt-1 text-sky-500 focus:ring-sky-500 border-gray-300 rounded"
        {...register(id)}
      />
      <label htmlFor={id} className="ml-2 block text-sm text-gray-700">
        {label}{' '}
        {linkText && linkUrl && (
          <a href={linkUrl} className="text-sky-500 hover:text-sky-600">
            {linkText}
          </a>
        )}
      </label>
      {errors[id] && <p className="mt-1 text-red-500 text-sm">{errors[id].message}</p>}
    </div>
  );
};

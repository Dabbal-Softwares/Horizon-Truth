
// Reusable Select Component
interface SelectProps {
  id: string;
  label: string;
  options: { value: string; label: string }[];
  register: any;
  errors: any;
  required?: boolean;
}

const SelectField = ({ id, label, options, register, errors, required }: SelectProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-gray-700 font-medium mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <select
        id={id}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
        {...register(id)}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[id] && <p className="mt-1 text-red-500 text-sm">{errors[id].message}</p>}
    </div>
  );
};
export default SelectField;
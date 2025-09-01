interface InputProps {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
  rows?: number;
  optional?: boolean;
  register: any;
  errors: any;
  disabled?: boolean;
}

const InputField = ({ id, type, label, placeholder, rows, optional, register, errors, disabled = false }: InputProps) => {
  const commonClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500";
  
  return (
    <div>
      <label htmlFor={id} className="block text-gray-700 font-medium mb-2">
        {label}
        {!optional && <span className="text-red-500 ml-1">*</span>}
        {optional && <span className="text-gray-500 text-sm ml-1">(optional)</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          rows={rows}
          disabled={disabled}
          placeholder={placeholder}
          className={commonClasses}
          {...register(id)}
        />
      ) : (
        <input
          id={id}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          className={commonClasses}
          {...register(id)}
        />
      )}
      {errors[id] && <p className="mt-1 text-red-500 text-sm">{errors[id].message}</p>}
    </div>
  );
};

export default InputField;
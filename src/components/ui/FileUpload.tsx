interface FileUploadProps {
  id: string;
  label: string;
  register: any;
  errors: any;
}

const FileUpload = ({ id, label, register, errors }: FileUploadProps) => {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
        <div className="space-y-1 text-center">
          <div className="flex text-sm text-gray-600 justify-center">
            <label className="relative cursor-pointer bg-white rounded-md font-medium text-sky-500 hover:text-sky-400 focus-within:outline-none">
              <span>Upload files</span>
              <input 
                type="file" 
                className="sr-only" 
                multiple 
                {...register(id)}
              />
            </label>
          </div>
          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
      {errors[id] && <p className="mt-1 text-red-500 text-sm">{errors[id].message}</p>}
    </div>
  );
};

export default FileUpload;
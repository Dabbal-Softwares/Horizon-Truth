import { useState, useRef, useCallback } from "react";
import { XMarkIcon, PhotoIcon } from "@heroicons/react/24/outline";

interface FileUploadProps {
  id: string;
  label: string;
  register: any;
  errors: any;
  maxFiles?: number;
  maxSize?: number; // in MB
}

interface FileWithPreview {
  file: File;
  preview: string;
}

const FileUpload = ({
  id,
  label,
  register,
  errors,
  maxFiles = 10,
  maxSize = 10,
}: FileUploadProps) => {
  const [selectedFiles, setSelectedFiles] = useState<FileWithPreview[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (!files) return;

      const newFiles: FileWithPreview[] = [];
      const validImageTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
      ];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // Check if file is an image
        if (!validImageTypes.includes(file.type)) {
          alert(
            `File ${file.name} is not a valid image type. Please upload PNG, JPG, GIF, or WEBP files.`
          );
          continue;
        }

        // Check file size
        if (file.size > maxSize * 1024 * 1024) {
          alert(`File ${file.name} exceeds the maximum size of ${maxSize}MB.`);
          continue;
        }

        // Check max files limit
        if (selectedFiles.length + newFiles.length >= maxFiles) {
          alert(`Maximum ${maxFiles} files allowed.`);
          break;
        }

        // Create preview
        const preview = URL.createObjectURL(file);
        newFiles.push({ file, preview });
      }

      setSelectedFiles((prev) => [...prev, ...newFiles]);
    },
    [maxFiles, maxSize, selectedFiles.length]
  );

  const removeFile = useCallback((index: number) => {
    setSelectedFiles((prev) => {
      const newFiles = [...prev];
      // Revoke the object URL to avoid memory leaks
      URL.revokeObjectURL(newFiles[index].preview);
      newFiles.splice(index, 1);
      return newFiles;
    });
  }, []);

  const clearAllFiles = useCallback(() => {
    selectedFiles.forEach((file) => URL.revokeObjectURL(file.preview));
    setSelectedFiles([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, [selectedFiles]);

  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();

      const files = event.dataTransfer.files;
      if (files.length > 0) {
        const inputEvent = {
          target: {
            files: files,
          },
        } as React.ChangeEvent<HTMLInputElement>;
        handleFileSelect(inputEvent);
      }
    },
    [handleFileSelect]
  );

  const handleDragOver = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
    },
    []
  );

  // Clean up object URLs when component unmounts
  useState(() => {
    return () => {
      selectedFiles.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  });

  return (
    <div>
      <label className="block text-gray-700 font-medium mb-2">{label}</label>

      {/* File input (hidden) */}
      <input
        type="file"
        className="sr-only"
        multiple
        accept="image/jpeg,image/png,image/gif,image/webp"
        {...register(id, {
          onChange: handleFileSelect,
        })}
        ref={(e) => {
          register(id).ref(e);
          fileInputRef.current = e;
        }}
      />

      {/* Drop zone */}
      <div
        className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:border-sky-400 transition-colors"
        onClick={() => fileInputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="space-y-1 text-center">
          <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
          <div className="flex text-sm text-gray-600 justify-center">
            <label className="relative cursor-pointer bg-white rounded-md font-medium text-sky-500 hover:text-sky-400">
              <span>Upload images</span>
            </label>
          </div>
          <p className="text-xs text-gray-500">
            PNG, JPG, GIF, WEBP up to {maxSize}MB each
          </p>
          <p className="text-xs text-gray-500">Max {maxFiles} files</p>
        </div>
      </div>

      {/* Selected files preview */}
      {selectedFiles.length > 0 && (
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm font-medium text-gray-700">
              Selected files ({selectedFiles.length}/{maxFiles})
            </h4>
            <button
              type="button"
              onClick={clearAllFiles}
              className="text-xs text-red-500 hover:text-red-700"
            >
              Clear all
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {selectedFiles.map((fileWithPreview, index) => (
              <div
                key={`${fileWithPreview.file.name}-${index}`}
                className="relative group border rounded-lg overflow-hidden"
              >
                <a
                  href={fileWithPreview.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={fileWithPreview.preview}
                    alt={fileWithPreview.file.name}
                    className="w-full h-24 object-cover cursor-pointer"
                  />
                </a>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(index);
                  }}
                  className="absolute top-1 right-1 p-1 bg-red-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
                >
                  <XMarkIcon className="h-4 w-4" />
                </button>

                <div className="p-1 bg-white bg-opacity-90">
                  <p className="text-xs text-gray-600 truncate">
                    {fileWithPreview.file.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {(fileWithPreview.file.size / 1024 / 1024).toFixed(2)}MB
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {errors[id] && (
        <p className="mt-1 text-red-500 text-sm">{errors[id].message}</p>
      )}
    </div>
  );
};

export default FileUpload;

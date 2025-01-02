"use client";

interface FileUploaderProps {
  files: File[];
  setFiles: (files: File[]) => void;
}

export function FileUploader({ files, setFiles }: FileUploaderProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-white">
        Attach Evidence (Optional)
      </label>
      <div className="rounded-lg border-2 border-dashed border-zinc-700 p-6">
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer text-center block"
        >
          <span className="text-zinc-400">
            Drop files here or click to upload
          </span>
        </label>
      </div>
      {files.length > 0 && (
        <ul className="space-y-2">
          {files.map((file, index) => (
            <li key={index} className="text-sm text-zinc-400">
              {file.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

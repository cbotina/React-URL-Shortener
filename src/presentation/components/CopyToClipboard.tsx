import React, { useState } from "react";
import { apiClient } from "../../infrastructure/client";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/24/outline";

interface CopyToClipboardProps {
  shortenedUrl: string | undefined;
}
export const CopyToClipboard = ({ shortenedUrl }: CopyToClipboardProps) => {
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  const handleCopyToClipboard = () => {
    if (shortenedUrl) {
      const fullUrl = `${apiClient.defaults.baseURL}/${shortenedUrl}`;
      navigator.clipboard.writeText(fullUrl).then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      });
    }
  };
  return (
    <button onClick={handleCopyToClipboard}>
      {copySuccess ? (
        <div className="flex flex-row text-teal-500 items-center">
          <CheckIcon className="size-4 text-teal-500 " />
          <p>Copied!</p>
        </div>
      ) : (
        <div className="flex flex-row space-x-1 text-gray-600 items-center">
          <ClipboardIcon className="size-4 text-gray-600" />
          <p>Copy URL</p>
        </div>
      )}
    </button>
  );
};

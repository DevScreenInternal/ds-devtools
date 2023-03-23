import {
  ClipboardDocumentCheckIcon,
  Square2StackIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { copyTextToClipboard } from '../services/clipboard';

interface CopyToClipboardProps {
  contentToCopy: string;
}
export default function CopyToClipboard(props: CopyToClipboardProps) {
  const [hasCopied, setHasCopied] = useState<boolean>(false);
  const copyToClipbloard = () => {
    copyTextToClipboard(props.contentToCopy);
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 3000);
  };

  return (
    <button
      type="button"
      className="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={copyToClipbloard}
    >
      {hasCopied ? 'Copied!' : 'Copy'}
    </button>
  );
}

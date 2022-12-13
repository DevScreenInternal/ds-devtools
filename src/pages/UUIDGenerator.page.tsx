import { useEffect, useState } from 'react';
import { v1 as uuidV1, v4 as uuidV4 } from 'uuid';

export default function UUIDGeneratorPage() {
  const [v1, setV1] = useState<string>(uuidV1());
  const [v4, setV4] = useState<string>(uuidV4());

  const refreshV1 = (): void => {
    setV1(uuidV1());
  };

  const refreshV4 = (): void => {
    setV4(uuidV4());
  };

  return (
    <div>
      <h1>UUID Generator</h1>
      <div>
        <div>
          <label
            htmlFor="uuid-v1"
            className="block text-sm font-medium text-gray-700"
          >
            Version 1
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <div className="relative flex flex-grow items-stretch focus-within:z-10">
              <input
                type="text"
                name="uuid-v1"
                id="uuid-v1"
                readOnly={true}
                value={v1}
                className="block w-full rounded-none rounded-l-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="button"
              onClick={refreshV1}
              className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span>Refresh</span>
            </button>
          </div>
        </div>

        <div>
          <label
            htmlFor="uuid-v3"
            className="block text-sm font-medium text-gray-700"
          >
            Version 3
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <div className="relative flex flex-grow items-stretch focus-within:z-10">
              <input
                type="text"
                name="uuid-v3"
                id="uuid-v3"
                readOnly={true}
                value={v4}
                className="block w-full rounded-none rounded-l-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="button"
              onClick={refreshV4}
              className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span>Refresh</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

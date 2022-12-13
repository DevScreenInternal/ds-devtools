import { useEffect, useState } from 'react';

export default function URLParserPage() {
  const [url, setUrl] = useState<string>('');
  const [parsedUrl, setParsedUrl] = useState<URL>();

  useEffect(() => {
    try {
      setParsedUrl(new URL(url));
    } catch (error: any) {
      console.log(error);
      setParsedUrl(new URL(document.location.href));
    }
  }, [url]);
  return (
    <div>
      <h1>URL Parser</h1>
      <div>
        <div>
          <label
            htmlFor="url"
            className="block text-sm font-medium text-gray-700"
          >
            Url
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="url"
              id="url"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="parsedJson"
            className="block text-sm font-medium text-gray-700"
          >
            Parsed URL data
          </label>
          <div className="mt-1">
            <p>{parsedUrl?.toJSON()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

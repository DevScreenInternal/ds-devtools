import { useEffect, useState } from 'react';

export default function JsonFormatterPage() {
  const [rawJson, setRawJson] = useState<string>('');
  const [parsedJson, setParsedJson] = useState<string>('');
  useEffect(() => {
    document.title = 'JSON Formatter | dev tools';
  }, []);

  useEffect(() => {
    try {
      setParsedJson(JSON.stringify(JSON.parse(rawJson), null, 4));
    } catch (error: any) {
      console.log(Object.keys(error));
      console.log(error);
      setParsedJson('Invalid JSON');
    }
  }, [rawJson]);
  return (
    <div>
      <h1>JSON Formatter</h1>
      <div>
        <div>
          <label
            htmlFor="rawJson"
            className="block text-sm font-medium text-gray-700"
          >
            Raw JSON
          </label>
          <div className="mt-1">
            <textarea
              rows={4}
              name="rawJson"
              id="rawJson"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => setRawJson(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="parsedJson"
            className="block text-sm font-medium text-gray-700"
          >
            Parsed JSON
          </label>
          <div className="mt-1">
            <textarea
              rows={4}
              name="parsedJson"
              id="parsedJson"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={parsedJson}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
}

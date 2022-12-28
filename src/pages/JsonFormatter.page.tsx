import { useEffect, useState } from 'react';
import ErrorMessage from '../components/ErrorMessage.component';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';

export default function JsonFormatterPage() {
  const [rawJson, setRawJson] = useState<string>('');
  const [parsedJson, setParsedJson] = useState<string>('');
  const [isJsonInvalid, setIsJsonInvalid] = useState<boolean>(false);
  useEffect(() => {
    document.title = 'JSON Formatter | dev tools';
  }, []);

  useEffect(() => {
    try {
      setParsedJson(JSON.stringify(JSON.parse(rawJson), null, 4));
      setIsJsonInvalid(false);
    } catch (error: any) {
      console.log(Object.keys(error));
      console.log(error);
      setParsedJson(rawJson ? rawJson : '{}');
      setIsJsonInvalid(!!rawJson);
    }
  }, [rawJson]);
  return (
    <div className="px-4 sm:px-6 lg:px-8" data-gramm_editor="false">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            JSON Formatter
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Takes ugly JSON and makes it readable
          </p>
        </div>
      </div>
      <div className="my-5">
        <div className="my-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="rawJson"
              className="block text-sm font-medium text-gray-700"
            >
              Raw JSON
            </label>
            <div className="mt-1">
              <textarea
                rows={35}
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
              Formatted JSON
            </label>
            <div className="mt-1">
              <div className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                <CodeMirror
                  id="parsedJson"
                  value={parsedJson}
                  extensions={[json()]}
                />
              </div>
            </div>
          </div>
        </div>
        {isJsonInvalid ? (
          <ErrorMessage title="Invalid JSON"></ErrorMessage>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';

export default function Base64EncoderPage() {
  const [stringToEncode, setStringToEncode] = useState<string>('Lorem ipsum');
  const [encodedString, setEncodedString] = useState<string>('');
  useEffect(() => {
    document.title = 'Base64 encoder | dev tools';
  }, []);

  useEffect(() => {
    try {
      setEncodedString(btoa(stringToEncode));
    } catch (error: any) {
      console.log(Object.keys(error));
      console.log(error);
      setEncodedString('Invalid string');
    }
  }, [stringToEncode]);
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Base64 Encoder
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Encodes a string to base64
          </p>
        </div>
      </div>
      <div className="my-5">
        <div>
          <label
            htmlFor="stringToEncode"
            className="block text-sm font-medium text-gray-700"
          >
            Text to base64 encode
          </label>
          <div className="mt-1">
            <textarea
              rows={4}
              name="stringToEncode"
              id="stringToEncode"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => setStringToEncode(e.target.value)}
              value={stringToEncode}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="encodedString"
            className="block text-sm font-medium text-gray-700"
          >
            Encoded
          </label>
          <div className="mt-1">
            <textarea
              rows={4}
              name="encodedString"
              id="encodedString"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={encodedString}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
}

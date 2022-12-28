import { useEffect, useState } from 'react';

export default function Base64DecoderPage() {
  const [stringToDecode, setStringToDecode] = useState<string>('');
  const [decodedString, setDecodedString] = useState<string>('');
  useEffect(() => {
    document.title = 'Base64 decoder | dev tools';
  }, []);

  useEffect(() => {
    try {
      setDecodedString(atob(stringToDecode));
    } catch (error: any) {
      console.log(Object.keys(error));
      console.log(error);
      setDecodedString('Invalid Base64 data');
    }
  }, [stringToDecode]);
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Base64 Decoder
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Decodes a base64 string to a plain old string
          </p>
        </div>
      </div>
      <div className="my-5">
        <div>
          <label
            htmlFor="stringToDecode"
            className="block text-sm font-medium text-gray-700"
          >
            Raw string
          </label>
          <div className="mt-1">
            <textarea
              rows={4}
              name="stringToDecode"
              id="stringToDecode"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => setStringToDecode(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="decodedString"
            className="block text-sm font-medium text-gray-700"
          >
            Decoded
          </label>
          <div className="mt-1">
            <textarea
              rows={4}
              name="decodedString"
              id="decodedString"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={decodedString}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
}

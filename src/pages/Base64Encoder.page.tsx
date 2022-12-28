import { useEffect, useState } from 'react';

export default function Base64EncoderPage() {
  const [stringToEncode, setStringToEncode] = useState<string>('');
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
    <div>
      <h1>Base64 Encoder</h1>
      <div>
        <div>
          <label
            htmlFor="stringToEncode"
            className="block text-sm font-medium text-gray-700"
          >
            Raw string
          </label>
          <div className="mt-1">
            <textarea
              rows={4}
              name="stringToEncode"
              id="stringToEncode"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => setStringToEncode(e.target.value)}
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

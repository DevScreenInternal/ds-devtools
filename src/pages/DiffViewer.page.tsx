import { useEffect, useState } from 'react';
import ReactDiffViewer from 'react-diff-viewer-continued';

export default function DiffViewerPage() {
  const [oldText, setOldText] = useState<string>(`const a = 10
const b = 10
const c = () => console.log('foo')

if(a > 10) {
  console.log('bar')
}

console.log('done')
`);
  const [newText, setNewText] = useState<string>(`const a = 10
const boo = 10

if(a === 10) {
  console.log('bar')
}
`);

  useEffect(() => {
    document.title = 'Diff Viewer | dev tools';
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8" data-gramm_editor="false">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Diff Viewer</h1>
          <p className="mt-2 text-sm text-gray-700">
            Highlights the difference between two pieces of text or code
          </p>
        </div>
      </div>
      <div className="my-5">
        <div className="my-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="oldText"
              className="block text-sm font-medium text-gray-700"
            >
              Old text
            </label>
            <div className="mt-1">
              <textarea
                rows={15}
                name="oldText"
                id="oldText"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={(e) => setOldText(e.target.value)}
                value={oldText}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="newText"
              className="block text-sm font-medium text-gray-700"
            >
              New Text
            </label>
            <div className="mt-1">
              <textarea
                rows={15}
                name="newText"
                id="newText"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={(e) => setNewText(e.target.value)}
                value={newText}
              />
            </div>
          </div>
        </div>
        <ReactDiffViewer
          styles={{
            contentText: {
              fontSize: '0.75em',
            },
          }}
          oldValue={oldText}
          newValue={newText}
          leftTitle={'Old text'}
          rightTitle={'New text'}
          splitView={true}
        />
      </div>
    </div>
  );
}

import { Square2StackIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import CopyToClipboard from '../components/CopyToClipboard.component';
import { parseUrl, queryStringToJSONString } from '../services/url-parser';

export default function URLParserPage() {
  const [url, setUrl] = useState<string>(
    'https://twitter.com/devscreen_app/status/1634328515154780160?s=20'
  );
  const [parsedUrl, setParsedUrl] = useState<URL | null>();
  useEffect(() => {
    document.title = 'URL Parser | dev tools';
    setParsedUrl(parseUrl(url));
  }, []);

  function onClickParseUrl() {
    try {
      setParsedUrl(parseUrl(url));
    } catch (error: any) {
      console.log(error);
      setParsedUrl(null);
    }
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">URL Parser</h1>
          <p className="mt-2 text-sm text-gray-700">
            View and copy the parts of any URL
          </p>
        </div>
      </div>
      <div className="my-5 grid grid-cols-1 gap-6 sm:grid-cols-3">
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
              value={url}
            />
          </div>
        </div>
        <button
          type="button"
          className="mt-6 inline-flex items-center justify-center rounded border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-1/2"
          onClick={onClickParseUrl}
        >
          Parse
        </button>
      </div>
      <div className="mt-1">
        <div className="overflow-hidden sm:rounded-lg">
          <div className="py-5">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Parsed URL
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              {!!parsedUrl ? url : ''}
            </p>
          </div>
          <div className="border-t border-gray-200 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Href</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {parsedUrl?.href || '--'}
                  <div className="ml-4 inline ">
                    {parsedUrl?.href ? (
                      <CopyToClipboard contentToCopy={parsedUrl?.href || ''} />
                    ) : (
                      <></>
                    )}
                  </div>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Origin</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {parsedUrl?.origin || '--'}
                  <div className="ml-4 inline ">
                    {parsedUrl?.origin ? (
                      <CopyToClipboard
                        contentToCopy={parsedUrl?.origin || ''}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Path name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <span>{parsedUrl?.pathname || '--'}</span>
                  <div className="ml-4 inline ">
                    {parsedUrl?.pathname ? (
                      <CopyToClipboard
                        contentToCopy={parsedUrl?.pathname || ''}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Search parameters
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 whitespace-pre-line">
                  <pre>
                    {parsedUrl?.search
                      ? queryStringToJSONString(parsedUrl?.search)
                      : 'None'}
                  </pre>
                  {parsedUrl?.search ? (
                    <div className="top-2 inline relative">
                      <CopyToClipboard
                        contentToCopy={
                          parsedUrl?.search
                            ? queryStringToJSONString(parsedUrl?.search)
                            : ''
                        }
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Hash</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <span>{parsedUrl?.hash || '--'}</span>
                  <div className="ml-4 inline ">
                    {parsedUrl?.hash ? (
                      <CopyToClipboard contentToCopy={parsedUrl?.hash || ''} />
                    ) : (
                      <></>
                    )}
                  </div>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Host</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <span>{parsedUrl?.host || '--'}</span>
                  <div className="ml-4 inline ">
                    {parsedUrl?.host ? (
                      <CopyToClipboard contentToCopy={parsedUrl?.host || ''} />
                    ) : (
                      <></>
                    )}
                  </div>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Hostname</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <span>{parsedUrl?.hostname || '--'}</span>
                  <div className="ml-4 inline ">
                    {parsedUrl?.hostname ? (
                      <CopyToClipboard
                        contentToCopy={parsedUrl?.hostname || ''}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Port</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <span>{parsedUrl?.port || '--'}</span>
                  <div className="ml-4 inline ">
                    {parsedUrl?.port ? (
                      <CopyToClipboard contentToCopy={parsedUrl?.port || ''} />
                    ) : (
                      <></>
                    )}
                  </div>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Protocol</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <span>{parsedUrl?.protocol || '--'}</span>
                  <div className="ml-4 inline ">
                    {parsedUrl?.protocol ? (
                      <CopyToClipboard
                        contentToCopy={parsedUrl?.protocol || ''}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Search string
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <span>{parsedUrl?.search || '--'}</span>
                  <div className="ml-4 inline ">
                    {parsedUrl?.search ? (
                      <CopyToClipboard
                        contentToCopy={parsedUrl?.search || ''}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

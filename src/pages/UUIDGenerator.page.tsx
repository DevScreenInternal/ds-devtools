import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { ChangeEvent, Fragment, useState } from 'react';
import { v1 as uuidV1, v4 as uuidV4 } from 'uuid';
import SimpleDropdown from '../components/SimpleDropdown.component';
import { copyTextToClipboard } from '../services/clipboard';
import {
  downloadIdListToCsv,
  downloadIdListToJson,
} from '../services/data-export';

enum ExoprtType {
  JSON_ARRAY_OF_STRINGS = 'JSON_ARRAY_OF_STRINGS',
  CSV = 'CSV',
}
export default function UUIDGeneratorPage() {
  const [uuids, setUuids] = useState<string[]>([uuidV1()]);
  const [numberOfUuidsToGenerate, setNumberOfUuidsToGenerate] =
    useState<number>(1);
  const [uuidVersion, setUuidVersion] = useState<string>('v4');
  const [exportType, setExportType] = useState<ExoprtType>(
    ExoprtType.JSON_ARRAY_OF_STRINGS
  );
  const exportOptions = [
    {
      displayName: "JSON array of id's",
      value: ExoprtType.JSON_ARRAY_OF_STRINGS,
    },
    { displayName: 'CSV', value: ExoprtType.CSV },
  ];

  const getLabelForExportButton = (): string => {
    if (exportType === ExoprtType.JSON_ARRAY_OF_STRINGS) {
      return 'Export JSON list';
    }
    return 'Export to CSV';
  };

  const copyUuidToClipboard = (idToCopy: string): void => {
    copyTextToClipboard(idToCopy);
  };

  const onVersionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setUuidVersion(e.target.value);
  };

  const generateUuidOfType = (type: string): string => {
    if (type === 'v1') {
      return uuidV1();
    }
    return uuidV4();
  };

  const generateUuids = () => {
    setUuids(
      Array.from({ length: numberOfUuidsToGenerate }, () =>
        generateUuidOfType(uuidVersion)
      )
    );
  };

  const exportUuids = () => {
    if (exportType === ExoprtType.CSV) {
      downloadIdListToCsv('uuids', uuids);
    } else if (exportType === ExoprtType.JSON_ARRAY_OF_STRINGS) {
      downloadIdListToJson('uuids', uuids);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            UUID Generator
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Generate, copy and export UUID's
          </p>
        </div>
      </div>
      <div className="my-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
        <div>
          <SimpleDropdown
            selectedValue={uuidVersion}
            options={[
              {
                displayName: 'V1',
                value: 'v1',
              },
              {
                displayName: 'V4',
                value: 'v4',
              },
            ]}
            onChange={onVersionChange}
            label={'UUID Version'}
          ></SimpleDropdown>
        </div>
        <div>
          <label
            htmlFor="numuuids"
            className="block text-sm font-medium text-gray-700"
          >
            Number of UUIDs to generate
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="number"
              inputMode="numeric"
              name="numuuids"
              id="numuuids"
              className="peer block w-full rounded-md sm:text-sm"
              placeholder="Choose between 1 and 5000"
              value={numberOfUuidsToGenerate}
              onChange={(e) =>
                Number(e.target.value)
                  ? setNumberOfUuidsToGenerate(Number(e.target.value))
                  : null
              }
              required
              min={1}
              max={5000}
              aria-describedby="numuuids-error"
            />
            {numberOfUuidsToGenerate < 1 || numberOfUuidsToGenerate > 5000 ? (
              <p
                className="mt-2 text-sm text-red-600 peer-invalid:visible"
                id="numuuids-error"
              >
                Number must be between 1 and 5000
              </p>
            ) : (
              <></>
            )}
          </div>
        </div>
        <button
          type="button"
          className="mt-6 inline-flex items-center justify-center rounded border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={() => generateUuids()}
        >
          Generate
        </button>
        <div className="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            className="mt-6 relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            onClick={() => exportUuids()}
          >
            {getLabelForExportButton()}
          </button>
          <Menu as="div" className="relative -ml-px block mt-6">
            <Menu.Button className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
              <span className="sr-only">Open options</span>
              <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 -mr-1 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {exportOptions.map((item) => (
                    <Menu.Item key={item.value}>
                      {({ active }) => (
                        <button
                          onClick={() => {
                            setExportType(item.value);
                          }}
                          className={`${
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700'
                          } block px-4 py-2 text-sm w-full text-left`}
                        >
                          {item.displayName}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>

      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Copy</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {uuids.map((uuid) => (
                    <tr key={uuid}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {uuid}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <button
                          onClick={() => copyUuidToClipboard(uuid)}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Copy<span className="sr-only">, {uuid}</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

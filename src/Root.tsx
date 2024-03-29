import { Link, NavLink, Outlet } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  EyeIcon,
  EyeSlashIcon,
  LinkIcon,
  ScaleIcon,
  ShieldCheckIcon,
  SparklesIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import logo from './logo.svg';

const navigation = [
  { name: 'JSON Formatter', toRoute: 'json-formatter', icon: SparklesIcon },
  // { name: 'YAML - JSON converter', toRoute: 'yaml-json-converter', icon: LinkIcon}, // this is in beta
  { name: 'URL Parser', toRoute: 'url-parser', icon: LinkIcon },
  { name: 'UUID Generator', toRoute: 'uuid-generator', icon: ShieldCheckIcon },
  { name: 'Diff Viewer', toRoute: 'diff-viewer', icon: ScaleIcon },
  { name: 'Base64 Encode', toRoute: 'base-64-encoder', icon: EyeSlashIcon },
  { name: 'Base64 Decode', toRoute: 'base-64-decoder', icon: EyeIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function Root() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <div className="flex items-center flex-shrink-0 px-4">
                      <img
                        className="h-8 w-auto"
                        src={logo}
                        alt="DevScreen logo"
                      ></img>
                      <p className="text-xl font-bold text-gray-600 sm:text-2xl pl-2">
                        Dev Tools
                      </p>
                    </div>
                    <nav className="mt-5 space-y-1 px-2">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.toRoute}
                          className={({ isActive }) =>
                            classNames(
                              isActive
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                              'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                            )
                          }
                        >
                          <item.icon
                            className={classNames('mr-4 flex-shrink-0 h-6 w-6')}
                            aria-hidden="true"
                          />
                          {item.name}
                        </NavLink>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className="h-8 w-auto"
                  src={logo}
                  alt="DevScreen logo"
                ></img>
                <p className="text-xl font-bold text-gray-600 sm:text-2xl pl-2">
                  Dev Tools
                </p>
              </div>
              <nav className="mt-5 flex-1 space-y-1 bg-white px-2">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.toRoute}
                    className={({ isActive }) =>
                      classNames(
                        isActive
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                      )
                    }
                  >
                    <item.icon
                      className={'mr-3 flex-shrink-0 h-6 w-6'}
                      aria-hidden="true"
                    />
                    {item.name}
                  </NavLink>
                ))}
              </nav>
            </div>
            <div className="flex flex-shrink-0 border-t border-gray-200 p-4 space-x-4">
              <Link className="text-gray-400 hover:text-gray-500" to="about">
                About
              </Link>
              <Link
                className="text-gray-400 hover:text-gray-500"
                to="contributing"
              >
                Contributing
              </Link>
              <a
                className="text-gray-400 hover:text-gray-500"
                href="https://github.com/DevScreenInternal/ds-devtools"
                target="_blank"
              >
                Source
              </a>
            </div>
            <div className="px-4 pb-4">
              <a
                className="text-gray-400 hover:text-gray-500"
                href="https://www.devscreen.io"
                target="_blank"
              >
                By DevScreen
              </a>
              <span className="px-4 pb-4 text-gray-400">
                v{window.APP_VERSION}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div className="py-6">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Root;

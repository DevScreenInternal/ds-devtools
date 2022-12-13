import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root';
import './index.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import JsonFormatterPage from './pages/JsonFormatter.page';
import ErrorPage from './pages/Error.page';
import Base64EncoderPage from './pages/Base64Encoder.page';
import Base64DecoderPage from './pages/Base64Decoder.page';
import URLParserPage from './pages/UrlParser.page';
import UUIDGeneratorPage from './pages/UUIDGenerator.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'json-formatter',
        element: <JsonFormatterPage />,
      },
      {
        path: 'base-64-encoder',
        element: <Base64EncoderPage />,
      },
      {
        path: 'base-64-decoder',
        element: <Base64DecoderPage />,
      },
      {
        path: 'url-parser',
        element: <URLParserPage />,
      },
      {
        path: 'uuid-generator',
        element: <UUIDGeneratorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

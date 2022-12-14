import { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About | dev tools';
  }, []);
  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-prose text-base lg:max-w-none">
        <h1 className="text-lg font-semibold text-indigo-600">About</h1>
        <h2 className="mt-2 text-2xl font-bold leading-8 tracking-tight text-gray-900 sm:text-3xl">
          Why we built DS dev tools
        </h2>
      </div>
      <div className="prose prose-indigo mx-auto lg:max-w-none space-y-2">
        <p>
          As software developers, there are a lot of common tasks that we find
          ourselves doing on an almost daily basis: parsing some JSON,
          generating a UUID, troubleshooting a regular expression.
        </p>
        <p>
          There are lots of great online tools to help us with this, but many of
          them transmit our data and process the it on a server.
        </p>
        <p>
          This can present a security risk. It's usually not appropriate to send
          customer data to a third party without their prior authorization.
        </p>
      </div>
      <div className="mx-auto max-w-prose text-base lg:max-w-none">
        <h2 className="mt-2 text-2xl font-bold leading-8 tracking-tight text-gray-900 sm:text-3xl">
          Privacy
        </h2>
      </div>
      <div className="prose prose-indigo mx-auto lg:max-w-none space-y-2">
        <p>
          The whole point of this project is to protect your data. We use
          analytics tools on our main marketing site, but this devtools portion
          has no analytics. We make no API calls - to ourselves or a third party
          - and we don't track what you do in this tool. While it would be nice
          to know what usage levels this site has, it would go against the
          spirit of what we're trying to do.
        </p>
        <p>
          DS dev tools is an open source, fully client-side solution to this. We
          make the source code available for you to inspect, and we never send
          any data to our servers or any third party. It's all processed in your
          browser locally.
        </p>
      </div>
    </div>
  );
}

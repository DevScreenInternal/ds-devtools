export default function ContributingPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-prose text-base lg:max-w-none">
        <h1 className="text-lg font-semibold text-indigo-600">Contributing</h1>
        <h2 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
          How to contribute
        </h2>
      </div>
      <div className="prose prose-indigo mx-auto lg:max-w-none space-y-2">
        <p>
          Contributions are very welcome and appreciated! Here are some notes to
          make sure you get the most out of contributing to this project:
        </p>
        <p>
          We use{' '}
          <a
            href="https://github.com/DevScreenInternal/ds-devtools"
            target={'_blank'}
          >
            Github
          </a>{' '}
          to manage bugs, feature requests and pull requests.
        </p>
        <p>
          Before you spend time adding a new feature, please create an issue to
          discuss with us before spending time on it. Maybe it's someting we've
          already thought of and we have a plan for how to build it.
        </p>
        <p>
          If you're creating an issue for a bug, please add information on how
          to reproduce it, as well as what rbowser you're using and sample data,
          if applicable.
        </p>
        <p>
          Please be respectful! This is a side-project in{' '}
          <a href="https://devscreen.io" target={'_blank'}>
            DevScreen
          </a>{' '}
          and while we try to get back to everyone quickly, it may take a few
          days depending on the workload in other areas of the business.
        </p>
      </div>
    </div>
  );
}

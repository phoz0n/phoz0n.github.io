import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex min-h-screen v-screen justify-center items-center bg-gray-100 dark:bg-gray-900 p-2">
      <Head>
        <title>Léandre Daumont</title>
        <meta name="description" content="Léandre Daumont" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white rounded-xl overflow-hidden dark:bg-black shadow-md flex rounded-1 flex-col sm:flex-row w-full sm:w-auto">
        <img
          src={require('../public/1626966592655-square.jpeg')}
          className="rounded-full p-4 w-48 mx-auto sm:rounded-none sm:p-0 sm:object-cover"
        />

        <div className="text-black dark:text-gray-400 sm:flex sm:flex-col sm:justify-between">
          <div className="p-4 border-t dark:border-gray-800 sm:border-t-0">
            <h1 className="text-3xl">Léandre Daumont</h1>
            <h2 className="text-2xl">Software Engineer</h2>
          </div>

          <div className="p-4">
            <p>
              Currently Fullstack Engineer at{' '}
              <a className="text-cyan-600" href="https://yubo.live">
                Yubo
              </a>
            </p>
          </div>

          <div className="p-4">
            <a href="/resume" className="px-2 pl-0">
              CV
            </a>
            <a href="https://github.com/digiz3d" className="px-2">
              Github
            </a>
            <a href="https://www.linkedin.com/in/l%C3%A9andre-daumont/" className="px-2 pr-0">
              LinkedIn
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

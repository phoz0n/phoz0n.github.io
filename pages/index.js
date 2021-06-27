import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex min-h-screen v-screen justify-center items-center bg-gray-100 dark:bg-gray-900 p-2">
      <Head>
        <title>Léandre Daumont</title>
        <meta name="description" content="Léandre Daumont" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white rounded-xl overflow-hidden dark:bg-black shadow-md flex rounded-1 flex-col md:flex-row w-full md:w-auto">
        <img
          src={require('../public/1516850784027.jpeg')}
          className="rounded-full p-4 w-48 mx-auto md:rounded-none md:p-0 md:object-cover"
        />

        <div className="text-black dark:text-gray-400 md:flex md:flex-col md:justify-between">
          <div className="p-4 border-t dark:border-gray-800 md:border-t-0">
            <h1 className="text-3xl">Léandre Daumont</h1>
            <h2 className="text-2xl">Software Engineer</h2>
          </div>

          <div className="p-4">
            <p>
              Currently Lead Full-stack at{' '}
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

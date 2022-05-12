import type { NextPage } from 'next'
import Head from 'next/head'
import Feeds from '../components/Feeds'
import Sidebar from '../components/sidebar'
import Widgets from '../components/Widgets'
const Home: NextPage = () => {
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter</title>
        <link  rel="icon" href="https://links.papareact.com/drq" />
      </Head>
      
      <main className='grid grid-cols-9'>
 <Sidebar />
{ /* feeds */ }
<Feeds/>
{ /* widgets */ }
<Widgets/>

      </main>

      </div>
  )
}

export default Home

import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css'
import Sidebar from './Sidebar'
import Navigationbar from './Navigationbar';
import { useEffect } from 'react';
import Dashboard from './Dashboard';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])
  return <>
    <Navigationbar />

    <div className='body'>
      <Sidebar />
      <Dashboard/>
    </div>

    <Component {...pageProps} />
  </>

}

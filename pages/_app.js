import 'bootstrap/dist/css/bootstrap.css';
import styles from '@/styles/globals.css'
import Sidebar from './Sidebar'
import Navigationbar from './Navigationbar';
import { useEffect } from 'react';
import Dashboard from './Dashboard';
import Home from '.';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])
  return <>
    {/* <Navigationbar />

    <div className={styles.body}>
    <Sidebar />
    </div> */}

<Home />
    <Component {...pageProps} />
  </>

}

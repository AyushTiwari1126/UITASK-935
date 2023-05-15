import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css'
import Sidebar from './Sidebar'
import Navigationbar from './Navigationbar';
import {useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])
  return <>
    <Navigationbar/>
    <Sidebar />
    {/* <Sideba/> */}
    <Component {...pageProps} />
  </>

}

import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css'
import Sidebar from './Sidebar'
import Navigationbar from './Navigationbar';
import { useEffect } from 'react';
import Home from '.';
import Footer from './Footer';
import Homescreen from './Homescreen';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])
  return (
    <>

      <Homescreen />

      {/* <div>
        < Navigationbar />
        <div style={{ display: "flex" }}>
          <div className="App" style={{ display: "flex" }}>
            <Sidebar />
          </div>
        </div>
      </div> */}

      <Component {...pageProps} />
    </>
  )
}
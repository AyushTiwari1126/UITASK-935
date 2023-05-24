import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css'
import Sidebar from './Sidebar'
import Navigationbar from './Navigationbar';
import Dashboard from './Dashboard';
import { useEffect } from 'react';
import Home from '.';
import Footer from './Footer';
import Asidebar from './Asidebar';
import Newadmin from './Newadmin';
import Headerpage from './Headerpage';
import Homescreen from './Homescreen';


export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])
  return <>

    {/* <Headerpage /> */}
    <Homescreen />
    {/* <Asidebar/> */}

    {/* <div>
      < Navigationbar />
      <div style={{ display: "flex" }}>
        <div className="App" style={{ display: "flex" }}>
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    </div> */}

    <Component {...pageProps} />
  </>
}

import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css'
import Sidebar from './Sidebar'
import Navigationbar from './Navigationbar';
import Dashboard from './Dashboard';
import { useEffect } from 'react';
import Home from '.';
import Footer from './Footer';
import { Routes } from 'react-router-dom';
import Default from './Default';
import ToggleVisibility from './ToggleVisibility';
import DemoSidebar from './DemoSidebar';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])
  return <>

    <DemoSidebar/>
    {/* <div>
      < Navigationbar />
      <div style={{ display: "flex" }}>
        <div className="App">
          <Sidebar />
        </div>
        
      </div>
    </div> */}

    <Component {...pageProps} />
  </>
}


{/* <ToggleVisibility>
        <Default />
      </ToggleVisibility> */}
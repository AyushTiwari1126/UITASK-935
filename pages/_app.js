import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css'
import Sidebar from './Sidebar'
import Navigationbar from './Navigationbar';
import Dashboard from './Dashboard';
import { useEffect } from 'react';
import Home from '.';
import Footer from './Footer';
import { Routes } from 'react-router-dom';
import Offcanvas from './Offcanvas';
import Boffcanvas from './Boffcanvas';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])
  return <>

    < Navigationbar />
    <div style={{ display: "flex" }}>
      <Sidebar />
      {/* <Routes /> */}
    </div>
    <Offcanvas />
    <Boffcanvas/>
    <Footer />

    <Component {...pageProps} />
  </>

}

{/* <Offcanvas /> */ }
{/* <ToggleNavbar /> */ }
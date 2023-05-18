// import React from 'react'
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Dashboard from './Dashboard';
// import processapplication from './processapplication';
// import Sidebar from './Sidebar';
// import Navigationbar from './Navigationbar';
// import addapplication from './addapplication';

// function Routes() {
//     return (

//         <Router>
//             <Navigationbar />
//             <Sidebar/>
//             <Routes>
//                 <Route path="/Dashboard" element={<Dashboard />} />
//                 <Route path="/Login" element={<Login />} />
//             </Routes>
//         </Router>
//     )
// }

// export default Routes

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from './Dashboard';
import processapplication from './processapplication';
import Sidebar from './Sidebar';
import Navigationbar from './Navigationbar';
import addapplication from './addapplication';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';

const Routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Sidebar />}>
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/Login" element={<Login />} />
                    {/* <Route path="*" element={<NoPage />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routes
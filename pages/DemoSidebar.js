import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import React from 'react'
import Sidebar from './Sidebar';

const DemoSidebar = () => {
    return (
        <SideNav
            onSelect={(selected) => {
                // Add your code here
                
            }}
        >
            <SideNav.Toggle />
            
            <SideNav.Nav >
                <NavItem eventKey="dashboard">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '30px' }} />
                    </NavIcon>
                    <NavText>
                        Dashboard
                    </NavText>
                </NavItem>
                <NavItem eventKey="cardproduction">
                    <NavIcon>
                        <i className="fa fa-fw fa-line-chart" style={{ fontSize: '30px' }} />
                    </NavIcon>
                    <NavText>
                        Card Production
                    </NavText>
                    <NavItem eventKey="addapplication">
                        <NavText>
                            Add Application
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="processapplication">
                        <NavText>
                            Process Application
                        </NavText>
                    </NavItem>
                </NavItem>
                <NavItem eventKey="accordion">
                    <NavIcon>
                        <i className="fa fa-fw fa-line-chart" style={{ fontSize: '30px' }} />
                    </NavIcon>
                    <NavText>
                        Components
                    </NavText>
                    <NavItem eventKey="addapplication">
                        <NavText>
                            Alerts
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="processapplication">
                        <NavText>
                            Accordion
                        </NavText>
                    </NavItem>
                </NavItem>

                {/* <Sidebar/> */}
            </SideNav.Nav>
        </SideNav>
    )
}

export default DemoSidebar
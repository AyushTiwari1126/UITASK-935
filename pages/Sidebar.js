import React from 'react'
import styles from '@/styles/Sidebar.module.css'
import Accordion from 'react-bootstrap/Accordion';
import Image from 'next/image';

const Sidebar = () => {
    return (
        <>
            <div id='sidebarid' className={styles.sidebar}>
                <div className={styles.accordion}>
                    <Accordion defaultActiveKey="0" >

                        <div className={styles.dashboardtitle}>
                            <a href="/Dashboard">
                                <Image className={styles.dashboardicon} src="/credit-card.svg" width={30} height={30} />
                                Dashboard
                            </a>
                        </div>

                        <Accordion.Item eventKey="1" className={styles.accordionitem}>
                            <Accordion.Header className={styles.accordionheader} >
                                <div className={styles.headertitle}>
                                    <Image className={styles.cardicon} src="/credit-card.svg" width={30} height={30} />
                                    Components
                                </div>
                            </Accordion.Header>
                            <Accordion.Body className={styles.accordionbody}>
                                <ul>
                                    <li>
                                        <a href="/addapplication">Add Application</a>
                                    </li>
                                    <li>
                                        <a href="/processapplication">Process Application</a>
                                    </li>
                                    <li>
                                        <a href="/Alerts">Alerts</a>
                                    </li>
                                    <li>
                                        <a href="/Accordion">Accordion</a>
                                    </li>
                                    <li>
                                        <a href="/Badges">Badges</a>
                                    </li>
                                    <li>
                                        <a href="/Breadcrumbs">Breadcrumbs</a>
                                    </li>
                                    <li>
                                        <a href="/Buttons">Buttons</a>
                                    </li>
                                    <li>
                                        <a href="/Cards">Cards</a>
                                    </li>
                                    <li>
                                        <a href="/Carousel">Carousel</a>
                                    </li>
                                    <li>
                                        <a href="/List-Group">List Group</a>
                                    </li>
                                    <li>
                                        <a href="/Modal">Modal</a>
                                    </li>
                                    <li>
                                        <a href="/Pagination">Pagination</a>
                                    </li>
                                    <li>
                                        <a href="/Progress">Progress</a>
                                    </li>
                                    <li>
                                        <a href="/Spinners">Spinners</a>
                                    </li>
                                    <li>
                                        <a href="/Tooltips">Tooltips</a>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2" className={styles.accordionitem}>
                            <Accordion.Header className={styles.accordionheader}>
                                <div className={styles.headertitle}>
                                    <Image className={styles.cardicon} src="/credit-card.svg" width={30} height={30} />
                                    Forms
                                </div>
                            </Accordion.Header>
                            <Accordion.Body className={styles.accordionbody}>
                                <ul>
                                    <li>
                                        <a href="/addapplication">Add Application</a>
                                    </li>
                                    <li>
                                        <a href="/processapplication">Process Application</a>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3" className={styles.accordionitem}>
                            <Accordion.Header className={styles.accordionheader}>
                                <div className={styles.headertitle}>
                                    <Image className={styles.cardicon} src="/credit-card.svg" width={30} height={30} />
                                    Tables
                                </div>
                            </Accordion.Header>
                            <Accordion.Body className={styles.accordionbody}>
                                <ul>
                                    <li>
                                        <a href="#">Add Application</a>
                                    </li>
                                    <li>
                                        <a href="#">Process Application</a>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4" className={styles.accordionitem}>
                            <Accordion.Header className={styles.accordionheader}>
                                <div className={styles.headertitle}>
                                    <Image className={styles.cardicon} src="/credit-card.svg" width={30} height={30} />
                                    Charts
                                </div>
                            </Accordion.Header>
                            <Accordion.Body className={styles.accordionbody}>
                                <ul>
                                    <li>
                                        <a href="#">Add Application</a>
                                    </li>
                                    <li>
                                        <a href="#">Process Application</a>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="5" className={styles.accordionitem}>
                            <Accordion.Header className={styles.accordionheader}>
                                <div className={styles.headertitle}>
                                    <Image className={styles.cardicon} src="/credit-card.svg" width={30} height={30} />
                                    Icons
                                </div>
                            </Accordion.Header>
                            <Accordion.Body className={styles.accordionbody}>
                                <ul>
                                    <li>
                                        <a href="#">Add Application</a>
                                    </li>
                                    <li>
                                        <a href="#">Process Application</a>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                        <div className={styles.pages}>
                            PAGES
                        </div>

                        <div className={styles.dashboardtitle}>
                            <a href="#">
                                <Image className={styles.dashboardicon} src="/credit-card.svg" width={30} height={30} />
                                Profile
                            </a>
                        </div>

                        <div className={styles.dashboardtitle}>
                            <a href="#">
                                <Image className={styles.dashboardicon} src="/credit-card.svg" width={30} height={30} />
                                F.A.Q
                            </a>
                        </div>

                        <div className={styles.dashboardtitle}>
                            <a href="#">
                                <Image className={styles.dashboardicon} src="/credit-card.svg" width={30} height={30} />
                                Contact
                            </a>
                        </div>

                        <div className={styles.dashboardtitle}>
                            <a href="#">
                                <Image className={styles.dashboardicon} src="/credit-card.svg" width={30} height={30} />
                                Register
                            </a>
                        </div>

                        <div className={styles.dashboardtitle}>
                            <a href="#">
                                <Image className={styles.dashboardicon} src="/credit-card.svg" width={30} height={30} />
                                Login
                            </a>
                        </div>

                        <div className={styles.dashboardtitle}>
                            <a href="#">
                                <Image className={styles.dashboardicon} src="/credit-card.svg" width={30} height={30} />
                                Error 404
                            </a>
                        </div>

                        <div className={styles.dashboardtitle}>
                            <a href="#">
                                <Image className={styles.dashboardicon} src="/credit-card.svg" width={30} height={30} />
                                Blank
                            </a>
                        </div>
                    </Accordion>
                </div>
            </div >
        </>
    )
}
export default Sidebar
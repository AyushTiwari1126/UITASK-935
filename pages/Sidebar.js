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

                        <Accordion.Item eventKey="0" className={styles.accordionitem}>
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
                                        <a href="/addapplication">Add Application</a>
                                    </li>
                                    <li>
                                        <a href="/processapplication">Process Application</a>
                                    </li>
                                    <li>
                                        <a href="/addapplication">Add Application</a>
                                    </li>
                                    <li>
                                        <a href="/processapplication">Process Application</a>
                                    </li>
                                    <li>
                                        <a href="/addapplication">Add Application</a>
                                    </li>
                                    <li>
                                        <a href="/processapplication">Process Application</a>
                                    </li>
                                    <li>
                                        <a href="/addapplication">Add Application</a>
                                    </li>
                                    <li>
                                        <a href="/processapplication">Process Application</a>
                                    </li>
                                    <li>
                                        <a href="/addapplication">Add Application</a>
                                    </li>
                                    <li>
                                        <a href="/processapplication">Process Application</a>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1" className={styles.accordionitem}>
                            <Accordion.Header className={styles.accordionheader}>
                                <div className={styles.headertitle}>
                                    <Image className={styles.cardicon} src="/credit-card.svg" width={30} height={30} />
                                    Forms
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

                        <Accordion.Item eventKey="2" className={styles.accordionitem}>
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

                        <Accordion.Item eventKey="3" className={styles.accordionitem}>
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

                        <Accordion.Item eventKey="4" className={styles.accordionitem}>
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

                        <Accordion.Item eventKey="5" className={styles.accordionitem}>
                            <Accordion.Header className={styles.accordionheader}>
                                <div className={styles.headertitle}>
                                    <Image className={styles.cardicon} src="/credit-card.svg" width={30} height={30} />
                                    Profile
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

                        <Accordion.Item eventKey="6" className={styles.accordionitem}>
                            <Accordion.Header className={styles.accordionheader}>
                                <div className={styles.headertitle}>
                                    <Image className={styles.cardicon} src="/credit-card.svg" width={30} height={30} />
                                    F.A.Q
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

                        <Accordion.Item eventKey="7" className={styles.accordionitem}>
                            <Accordion.Header className={styles.accordionheader}>
                                <div className={styles.headertitle}>
                                    <Image className={styles.cardicon} src="/credit-card.svg" width={30} height={30} />
                                    Contact
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

                        <Accordion.Item eventKey="8" className={styles.accordionitem}>
                            <Accordion.Header className={styles.accordionheader}>
                                <div className={styles.headertitle}>
                                    <Image className={styles.cardicon} src="/credit-card.svg" width={30} height={30} />
                                    Register
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

                        <Accordion.Item eventKey="9" className={styles.accordionitem}>
                            <Accordion.Header className={styles.accordionheader}>
                                <div className={styles.headertitle}>
                                    <Image className={styles.cardicon} src="/credit-card.svg" width={30} height={30} />
                                    Login
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

                        <Accordion.Item eventKey="9" className={styles.accordionitem}>
                            <Accordion.Header className={styles.accordionheader}>
                                <div className={styles.headertitle}>
                                    <Image className={styles.cardicon} src="/credit-card.svg" width={30} height={30} />
                                    Error 404
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

                        <Accordion.Item eventKey="9" className={styles.accordionitem}>
                            <Accordion.Header className={styles.accordionheader}>
                                <div className={styles.headertitle}>
                                    <Image className={styles.cardicon} src="/credit-card.svg" width={30} height={30} />
                                    Blank
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

                    </Accordion>

                </div>

            </div >

        </>
    )
}

export default Sidebar
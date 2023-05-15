import React from 'react'
import styles from '@/styles/Home.module.css'
import Accordion from 'react-bootstrap/Accordion';
import Image from 'next/image';

const Sidebar = () => {
    return (
        <>
            <div className={styles.sidebar}>


                <div className={styles.accordion}>
                    <Accordion defaultActiveKey="0" >
                        <Accordion.Item eventKey="0" className={styles.accordionitem}>
                            
                            <Accordion.Header className={styles.accordionheader} >
                                <div className={styles.headertitle}>
                                    <Image className={styles.cardicon} src="/credit-card.svg" width={30} height={30} />
                                    Card Production
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
                                    {/* <li>
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
                                    </li> */}
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                        {/* <Accordion.Item eventKey="1" className={styles.accordionitem}>
                            <Accordion.Header className={styles.accordionheader}>
                            <div className={styles.headertitle}>
                                    <Image className={styles.cardicon} src="/credit-card.svg" width={30} height={30} />
                                    Card Production
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
                        </Accordion.Item> */}

                        {/* <Accordion.Item eventKey="2" className={styles.accordionitem}>
                            <Accordion.Header className={styles.accordionheader}>
                            <div className={styles.headertitle}>
                                    <Image className={styles.cardicon} src="/credit-card.svg" width={30} height={30} />
                                    Card Production
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
                        </Accordion.Item> */}

                    </Accordion>

                </div>
            </div>
        </>
    )
}

export default Sidebar
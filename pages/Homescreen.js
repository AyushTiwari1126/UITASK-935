import React from 'react'
import styles from '@/styles/Homescreen.module.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import Link from 'next/link';

const Homescreen = () => {

    return (
        <>
            {/* ============================ NAVIGATION BAR ============================== */}
            <input type="checkbox" id={styles.check} />
            <div className={styles.navigationtitle}>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="/" className={styles.niceadmin}>
                            <Image className={styles.navbarlogo} src="/logo.png" width={30} height={30} />
                            NiceAdmin
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >

                                <label htmlFor={styles.check}>
                                    <Image src="/list.svg" width={30} height={30} className={styles.togglesidebarbtn} />
                                </label>

                                <Form className={styles.dflex}>
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search" />

                                </Form>
                            </Nav>

                            <span href="#"><Image src="/bell.svg" width={22} height={22} /></span>
                            <span href="#"><Image src="/chat-left-text.svg" width={22} height={22} /></span>


                            <Nav.Link href="#">
                                <Image className={styles.profileimg} src="/profile-img.jpg" width={30} height={30} />
                            </Nav.Link>
                            <NavDropdown align="end" title="K. Anderson" id="navbarScrollingDropdown" className={styles.dropdown}>

                                <NavDropdown.Item className={styles.namedesignation} href="#">
                                    <div className={styles.name}>Kevin Anderson</div>
                                    <div className={styles.designation}>Web Designer</div>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className={styles.dropdownitem} href="#"><Image className={styles.dropdownimg} src="/person.svg" width={20} height={20} />My Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className={styles.dropdownitem} href="#"><Image className={styles.dropdownimg} src="/gear.svg" width={20} height={20} />Account Settings</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className={styles.dropdownitem} href="#"><Image className={styles.dropdownimg} src="/question-circle.svg" width={20} height={20} />Need Help</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className={styles.dropdownitem} href="#"><Image className={styles.dropdownimg} src="/box-arrow-right.svg" width={20} height={20} />Sign Out</NavDropdown.Item>
                            </NavDropdown>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            {/* ================================= SIDEBAR =================================== */}

            <div id='sidebarid' className={styles.sidebar}>
                <div className={styles.accordion}>
                    <Accordion defaultActiveKey="0" >

                        <div className={styles.dashboardtitle}>
                            <Link href="/Dashboard">
                                <Image className={styles.dashboardicon} src="/credit-card.svg" width={30} height={30} />
                                Dashboard
                            </Link>
                        </div>

                        <Accordion.Item eventKey="6" className={styles.accordionitem}>
                            <Accordion.Header className={styles.accordionheader} >
                                <div className={styles.headertitle}>
                                    <Image className={styles.cardicon} src="/credit-card.svg" width={30} height={30} />
                                    Card Production
                                </div>
                            </Accordion.Header>
                            <Accordion.Body className={styles.accordionbody}>
                                <ul>
                                    <li>
                                        <Link href="/addapplication">Add Application</Link>
                                    </li>
                                    <li>
                                        <Link href="/processapplication">Process Application</Link>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

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
                                        <Link href="/Alerts">Alerts</Link>
                                    </li>
                                    <li>
                                        <Link href="/Accordion">Accordion</Link>
                                    </li>
                                    <li>
                                        <Link href="/Badges">Badges</Link>
                                    </li>
                                    <li>
                                        <Link href="/Breadcrumbs">Breadcrumbs</Link>
                                    </li>
                                    <li>
                                        <Link href="/Buttons">Buttons</Link>
                                    </li>
                                    <li>
                                        <Link href="/Cards">Cards</Link>
                                    </li>
                                    <li>
                                        <Link href="/Carousel">Carousel</Link>
                                    </li>
                                    <li>
                                        <Link href="/List-Group">List Group</Link>
                                    </li>
                                    <li>
                                        <Link href="/Modal">Modal</Link>
                                    </li>
                                    <li>
                                        <Link href="/Pagination">Pagination</Link>
                                    </li>
                                    <li>
                                        <Link href="/Progress">Progress</Link>
                                    </li>
                                    <li>
                                        <Link href="/Spinners">Spinners</Link>
                                    </li>
                                    <li>
                                        <Link href="/Tooltips">Tooltips</Link>
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
                                        <Link href="#">Add Application</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Process Application</Link>
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
                                        <Link href="#">Add Application</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Process Application</Link>
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
                                        <Link href="#">Add Application</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Process Application</Link>
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
                                        <Link href="#">Add Application</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Process Application</Link>
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                        <div className={styles.pages}>
                            PAGES
                        </div>

                        <div className={styles.dashboardtitle}>
                            <Link href="#">
                                <Image className={styles.dashboardicon} src="/credit-card.svg" width={30} height={30} />
                                Profile
                            </Link>
                        </div>

                        <div className={styles.dashboardtitle}>
                            <Link href="#">
                                <Image className={styles.dashboardicon} src="/credit-card.svg" width={30} height={30} />
                                F.A.Q
                            </Link>
                        </div>

                        <div className={styles.dashboardtitle}>
                            <Link href="#">
                                <Image className={styles.dashboardicon} src="/credit-card.svg" width={30} height={30} />
                                Contact
                            </Link>
                        </div>

                        <div className={styles.dashboardtitle}>
                            <Link href="#">
                                <Image className={styles.dashboardicon} src="/credit-card.svg" width={30} height={30} />
                                Register
                            </Link>
                        </div>

                        <div className={styles.dashboardtitle}>
                            <Link href="/Login">
                                <Image className={styles.dashboardicon} src="/credit-card.svg" width={30} height={30} />
                                Login
                            </Link>
                        </div>

                        <div className={styles.dashboardtitle}>
                            <Link href="#">
                                <Image className={styles.dashboardicon} src="/credit-card.svg" width={30} height={30} />
                                Error 404
                            </Link>
                        </div>

                        <div className={styles.dashboardtitle}>
                            <Link href="#">
                                <Image className={styles.dashboardicon} src="/credit-card.svg" width={30} height={30} />
                                Blank
                            </Link>
                        </div>
                    </Accordion>
                </div>
            </div >

            {/* ============================= DASHBOARD ================================= */}

            {/* <div className={styles.dashboard}>
                <div className={styles.dashboardheading}>
                    <span>Dashboard</span>
                    <Nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item" ><a className={styles.hometab} href="#">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page" style={{ cursor: 'pointer' }}> Dashboard</li>
                        </ol>
                    </Nav>
                </div>
                <CardGroup className={styles.cardgroup}>
                    <Card className={styles.cards}>
                        <Card.Body>
                            <Card.Title>Sales</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className={styles.cards}>
                        <Card.Body>
                            <Card.Title>Revenue</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to
                                additional content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className={styles.cards}>
                        <Card.Body>
                            <Card.Title>Customer</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div> */}

            {/* ============================== FOOTER ==================================== */}
            
            <footer id={styles.footer} class="footer" className={styles.myfooter}>
                <div className={styles.footertext}>
                    <div class="copyright">
                        &copy; Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
                    </div>
                    <div class="credits" id={styles.creditstext}>
                        Designed by <Link href="https://bootstrapmade.com/">BootstrapMade</Link>
                    </div>
                </div>
            </footer>
            <Link href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></Link>
            
        </>
    )
}
export default Homescreen
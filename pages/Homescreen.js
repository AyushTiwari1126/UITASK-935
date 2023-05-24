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

const Homescreen = () => {
    return (
        <>
            <input type="checkbox" className={styles.check} />
            {/* ============ NAVIGATION BAR =========== */}
            <div className={styles.navigationtitle}>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="/" className={styles.niceadmin} >
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

                                <Nav.Link href="#" className={styles.listimg}>
                                    <Image src="/list.svg" width={30} height={30} />
                                    {/* {toggled ? <Sidebar /> : ''} */}
                                </Nav.Link>

                                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                    <div class="offcanvas-header">
                                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                </div>

                                <Form className={styles.dflex} >
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
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

            {/* ========================== SIDEBAR ======================== */}

            <div id='sidebarid' className={styles.sidebar}>
                <div className={styles.accordion}>
                    <Accordion defaultActiveKey="0" >

                        <div className={styles.dashboardtitle}>
                            <a href="/Dashboard">
                                <Image className={styles.dashboardicon} src="/credit-card.svg" width={30} height={30} />
                                Dashboard
                            </a>
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
                                        <a href="/addapplication">Add Application</a>
                                    </li>
                                    <li>
                                        <a href="/processapplication">Process Application</a>
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
                            <a href="/Login">
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

            {/* ==================== DASHBOARD ========================== */}

            <div className={styles.dashboard}>

                <div className={styles.dashboardtitle}>
                    <span>Dashboard</span>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item" ><a className={styles.hometab} href="#">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page" style={{ cursor: 'pointer' }}> Dashboard</li>
                        </ol>
                    </nav>
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
                                additional content.{' '}
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
            </div>
        </>
    )
}
export default Homescreen
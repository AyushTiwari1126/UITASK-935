import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';
import styles from '@/styles/Navigationbar.module.css'


const Navigationbar = () => {


    return (
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
                            <Nav.Link href="#">
                                <Image src="/list.svg" width={30} height={30} />
                            </Nav.Link>

                            <Form className={styles.dflex} >
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                {/* <Button variant="outline-success">
                                    <Image src="/search.svg" width={20} height={20} />
                                </Button> */}
                            </Form>
                        </Nav>

                        <span href="#"><Image src="/bell.svg" width={22} height={22} /></span>
                        <span href="#"><Image src="/chat-left-text.svg" width={22} height={22} /></span>

                        <NavDropdown align="end" title="K. Anderson" id="navbarScrollingDropdown" className={styles.dropdown}>
                            {/* <NavDropdown.Item href="#action3">Action</NavDropdown.Item> */}
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
    )
}

export default Navigationbar
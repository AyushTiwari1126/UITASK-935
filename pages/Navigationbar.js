import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '@/styles/Navigationbar.module.css'
import Image from 'next/image';
import { useState } from 'react';

// const [isOpen, setIsOpen] = useState(false);
// const onclickItem = () => {
//     setIsOpen(!Open)
// }

const Navigationbar = () => {
    return (
        <div className={styles.navigationtitle}>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" className={styles.niceadmin}>
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
                            <Nav.Link href="#action1" className={styles.listicon}>
                            <Image src="/list.svg" width={30} height={30} 
                                // onClick={onclickItem} className={`${isOpen === true ? styles.listiconactive : styles.listicon}`}
                                />
                                </Nav.Link>

                            <Form className={styles.dflex}>
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    
                                />
                                <Button variant="outline-success">
                                <Image src="/search.svg" width={20} height={20}/>
                                </Button>
                            </Form>
                        </Nav>

                        <NavDropdown title="Ayush" id="navbarScrollingDropdown" className={styles.dropdown}>
                            {/* <NavDropdown.Item href="#action3">Action</NavDropdown.Item> */}
                            <NavDropdown.Item href="#action4"><Image src="/person.svg" width={20} height={20} />My Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5"><Image src="/gear.svg" width={20} height={20} />Account Settings</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action6"><Image src="/question-circle.svg" width={20} height={20} />Need Help</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action7"><Image src="/box-arrow-right.svg" width={20} height={20} />Sign Out</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action2"></Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigationbar
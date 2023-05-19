import React, { useState } from "react";
import styles from '@/styles/Navigationbar.module.css'
import Image from "next/image";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Image from 'next/image';
// import styles from '@/styles/Navigationbar.module.css'

export default function ToggleVisibility({ children }) {

  // React state to manage visibility
  const [show, setShow] = useState();

  // function to toggle the boolean value
  function toggleShow() {
    setShow(!show);
  }
  var buttonText = show ? <Image src="/list.svg" width={30} height={30} /> : <Image src="/list.svg" width={30} height={30} />;
  // (val === !toggled ? setToggled(!toggled) : setToggled(toggled))

  return (
    <div className="component-container" onClick={toggleShow}>
      {buttonText}
      {show && children}
    </div>

  );
}
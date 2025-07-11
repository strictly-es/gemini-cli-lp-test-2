// src/components/Header.tsx
'use client';
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import styles from './Header.module.css';

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" className={`py-3 ${styles.header}`} sticky="top">
      <Container>
        <Navbar.Brand href="#">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center">
            <div className="text-end me-3">
              <div className={styles.businessHours}>平日 00:00~00:00</div>
              <div className={`fw-bold ${styles.phoneNumber}`}>📞 0123-456-7890</div>
            </div>
            <Button href="#form-top" variant="info" className={`me-2 text-white ${styles.requestButton}`}>資料請求</Button>
            <Button href="#form-bottom" variant="dark" className={styles.contactButton}>お問い合わせ</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

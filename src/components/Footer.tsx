// src/components/Footer.tsx
'use client';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className="align-items-center text-center">
          <Col md={4} className="mb-3 mb-md-0">
            <Button href="#form-bottom" variant="light" className={styles.contactButton}>お問い合わせはこちら</Button>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <div className={styles.phoneInfo}>
              <span className={styles.phoneNumber}>📞 0123-456-7890</span>
              <span className={styles.businessHours}>平日 00:00~00:00</span>
            </div>
          </Col>
          <Col md={4}>
            <p className={styles.copyright}>© Copyright</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

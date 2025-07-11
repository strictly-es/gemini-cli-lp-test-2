// src/components/Footer.tsx
'use client';
import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className="text-center">
        <p className={styles.copyright}>© Copyright</p>
      </Container>
    </footer>
  );
};

export default Footer;

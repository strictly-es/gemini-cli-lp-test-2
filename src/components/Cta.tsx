// src/components/Cta.tsx
'use client';
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import styles from './Cta.module.css';

const Cta = () => {
  return (
    <div className={styles.ctaSection}>
      <Container className="text-center">
        <h3 className={styles.ctaTitle}>特長や価格がわかる資料はこちら</h3>
        <div className="d-flex flex-column align-items-center">
            <Button href="#form-top" variant="info" size="lg" className="text-white">サービス資料をダウンロードする</Button>
            <Button href="#form-bottom" variant="link" className={`${styles.contactLink} mt-2`}>お問い合わせ</Button>
        </div>
      </Container>
    </div>
  );
};

export default Cta;

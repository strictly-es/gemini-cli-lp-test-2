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
        <Button href="#form-top" variant="info" size="lg" className="text-white me-3">サービス資料をダウンロードする</Button>
        <Button href="#form-bottom" variant="link" className={styles.contactLink}>お問い合わせ</Button>
      </Container>
    </div>
  );
};

export default Cta;

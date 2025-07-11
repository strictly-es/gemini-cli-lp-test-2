// src/components/CompanyLogos.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './CompanyLogos.module.css';

const logos = ['企業ロゴ', '企業ロゴ', '企業ロゴ', '企業ロゴ', '企業ロゴ'];

const CompanyLogos = () => {
  return (
    <div className={styles.logosSection}>
      <Container>
        <Row className="justify-content-center">
          {logos.map((logo, index) => (
            <Col key={index} xs={6} sm={4} md={2} className="text-center mb-4">
              <div className={styles.logoBox}>{logo}</div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CompanyLogos;

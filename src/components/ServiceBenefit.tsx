// src/components/ServiceBenefit.tsx
import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './ServiceBenefit.module.css';

const ServiceBenefit = () => {
  return (
    <div className={styles.benefitSection}>
      <Container className="text-center">
        <h3 className={styles.benefitText}>
          〇〇〇〇〇〇サービスは<br />
          〇〇業務の効率化・コスト削減ができます
        </h3>
      </Container>
    </div>
  );
};

export default ServiceBenefit;

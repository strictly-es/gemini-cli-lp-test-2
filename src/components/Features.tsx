// src/components/Features.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Features.module.css';

const features = [
  {
    title: '〇〇〇〇〇〇でコストを削減',
    description: 'サービス内容や機能をふまえて特長を3つ挙げる。前述の「よくある課題」に対して解決できることを記載する。',
  },
  {
    title: '〇〇〇〇〇〇で作業効率アップ',
    description: 'サービス内容や機能をふまえて特長を3つ挙げる。前述の「よくある課題」に対して解決できることを記載する。',
  },
  {
    title: '〇〇〇〇〇〇で売上拡大',
    description: 'サービス内容や機能をふまえて特長を3つ挙げる。前述の「よくある課題」に対して解決できることを記載する。',
  },
];

const Features = () => {
  return (
    <div id="features" className={styles.featuresSection}>
      <Container>
        <h2 className="text-center mb-5">特長</h2>
        {features.map((feature, index) => (
          <Row key={index} className="align-items-center mb-5">
            <Col md={7}>
              <h4 className={styles.featureTitle}>
                <span className={styles.checkIcon}>✔</span>
                {feature.title}
              </h4>
              <p>{feature.description}</p>
            </Col>
            <Col md={5}>
              <div className={styles.imagePlaceholder}>
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                  <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                </svg>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default Features;

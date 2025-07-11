// src/components/ProcessFlow.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './ProcessFlow.module.css';

const steps = [
  { title: 'お問い合わせ', description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト' },
  { title: 'ヒアリング', description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト' },
  { title: 'ご提案', description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト' },
  { title: 'ご契約', description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト' },
  { title: 'サービス提供', description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト' },
];

const ProcessFlow = () => {
  return (
    <div className={styles.processFlowSection}>
      <Container>
        <h2 className="text-center mb-5">ご利用の流れ</h2>
        <div className={styles.flowContainer}>
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className={styles.stepItem}>
                <Row>
                  <Col md={3} className="fw-bold">{step.title}</Col>
                  <Col md={9}>{step.description}</Col>
                </Row>
              </div>
              {index < steps.length - 1 && (
                <div className={styles.arrowDown}>▼</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProcessFlow;

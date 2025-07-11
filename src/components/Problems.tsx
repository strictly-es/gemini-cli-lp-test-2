// src/components/Problems.tsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from './Problems.module.css';

const problems = [
  {
    icon: 'bi-clock', // Placeholder icon
    text: '〇〇業務に時間がかかり、<br />〇〇のコストがかかる…',
  },
  {
    icon: 'bi-people', // Placeholder icon
    text: '〇〇管理が大変でリソースが不足。<br />本来の業務に集中できない…',
  },
  {
    icon: 'bi-graph-down', // Placeholder icon
    text: '〇〇で新規顧客を獲得したいが、<br />成果につながらない…',
  },
];

const Problems = () => {
  return (
    <div className={styles.problemsSection}>
      <Container>
        <h2 className="text-center mb-5">こんな課題はありませんか？</h2>
        <Row>
          {problems.map((problem, index) => (
            <Col md={4} key={index} className="text-center">
              <div className={styles.problemCard}>
                <div className={styles.iconCircle}>
                  {/* In a real project, you'd use an actual icon library like react-icons */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                  </svg>
                </div>
                <p className="mt-3" dangerouslySetInnerHTML={{ __html: problem.text }}></p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Problems;

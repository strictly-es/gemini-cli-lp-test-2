// src/components/CaseStudies.tsx
'use client';
import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import styles from './CaseStudies.module.css';

const caseStudies = [
  {
    company: '株式会社〇〇〇〇〇〇〇〇',
    title: '売上が100%向上。',
    description: 'テキストテキストテキストテキス��テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    industry: '〇〇〇',
    employees: '〇〇〇〇〇',
  },
  {
    company: '株式会社〇〇〇〇〇〇〇〇',
    title: 'コストが半分に。',
    description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    industry: '〇〇〇',
    employees: '〇〇〇〇〇',
  },
  {
    company: '株式会社〇〇〇〇〇〇〇〇',
    title: '利用者数が2倍に。',
    description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    industry: '〇〇〇',
    employees: '〇〇〇〇〇',
  },
];

const CaseStudies = () => {
  return (
    <div id="case-studies" className={styles.caseStudiesSection}>
      <Container>
        <h2 className="text-center mb-5">導入事例</h2>
        <Row>
          {caseStudies.map((study, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className={styles.caseCard}>
                <Card.Header>{study.company}</Card.Header>
                <div className={styles.imagePlaceholder}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                  </svg>
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold">{study.title}</Card.Title>
                  <Card.Text>{study.description}</Card.Text>
                  <div>
                    <Badge bg="light" text="dark" className="me-2">業種: {study.industry}</Badge>
                    <Badge bg="light" text="dark">従業員数: {study.employees}</Badge>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className={`text-center mt-5 ${styles.downloadSection}`}>
            <h4 className="fw-bold">導入事例の詳細をまとめて見る</h4>
            <div className="mt-4">
                <Button href="#form-top" variant="dark" size="lg" className="me-3">導入事例集をダウンロードする</Button>
                <Button href="#form-bottom" variant="link" className={styles.contactLink}>お問い合わせ</Button>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default CaseStudies;

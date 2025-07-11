// src/components/Faq.tsx
'use client'; // Accordion component requires client-side interactivity

import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import styles from './Faq.module.css';

const faqData = [
  {
    question: '質問文テキストテキストテキストテキストテキストテキスト',
    answer: '回答文テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    question: '質問文テキストテキストテキストテキストテキストテキスト',
    answer: '回答文テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    question: '質問文テキストテキストテキストテキストテキストテキスト',
    answer: '回答文テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    question: '質問文テキストテキストテ���ストテキストテキストテキスト',
    answer: '回答文テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
];

const Faq = () => {
  return (
    <div className={styles.faqSection}>
      <Container>
        <h2 className="text-center mb-5">よくある質問</h2>
        <Accordion defaultActiveKey="0" flush>
          {faqData.map((item, index) => (
            <Accordion.Item eventKey={String(index)} key={index} className={styles.accordionItem}>
              <Accordion.Header>{item.question}</Accordion.Header>
              <Accordion.Body>{item.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </div>
  );
};

export default Faq;

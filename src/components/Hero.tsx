// src/components/Hero.tsx
'use client';
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.heroBackground}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-white">
            <h1 className={styles.title}>
              〇〇〇〇業務の効率化・<br />
              コスト削減ができる
            </h1>
            <p className={styles.subtitle}>
              〇〇に特化した<br />
              〇〇〇〇〇サービス
            </p>
          </Col>
          <Col md={6}>
            <div id="form-top" className={styles.formContainer}>
              <h3 className="text-center mb-4">まずは資料請求(無料)</h3>
              <p className="text-center small mb-4">下記フォームへ必要事項をご記入の上、送信ください。</p>
              <Form>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formLastName">
                      <Form.Control type="text" placeholder="姓" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formFirstName">
                      <Form.Control type="text" placeholder="名" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formCompanyName">
                  <Form.Control type="text" placeholder="会社名" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control type="email" placeholder="会社のメールアドレス" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Control type="tel" placeholder="電話番号（ハイフンなし）" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDepartment">
                  <Form.Select>
                    <option>部門を選択してください</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPosition">
                  <Form.Select>
                    <option>役職を選択してください</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPurpose">
                  <Form.Select>
                    <option>資料請求の目的を教えてください</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrivacy">
                  <Form.Check type="checkbox" label="プライバシーポリシーに同意する" />
                </Form.Group>
                <div className="d-grid">
                  <Button variant="info" type="submit" className="text-white">
                    サービス資料をダウンロードする
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;

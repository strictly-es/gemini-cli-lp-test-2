// src/components/Contact.tsx
'use client';
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div id="form-bottom" className={styles.contactSection}>
      <Container>
        <h2 className="text-center mb-5">まずは資料請求(無料)</h2>
        <Row>
          {/* Left Column */}
          <Col md={6}>
            <h4 className="fw-bold">〇〇〇〇サービスについて<br/>詳しく紹介した資料です</h4>
            <div className={styles.imagePlaceholder}>
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
              </svg>
            </div>
            <div className={styles.recommendationBox}>
              <h5 className="fw-bold">こんな方におすすめです</h5>
              <ul className={styles.recommendationList}>
                <li>〇〇〇〇〇〇〇に興味がある方</li>
                <li>〇〇〇〇〇〇〇〇〇の課題を解決したい方</li>
                <li>〇〇〇〇〇〇〇について詳しく知りたい方</li>
              </ul>
            </div>
          </Col>

          {/* Right Column */}
          <Col md={6}>
          <p className="small mb-4">フォームへ必要事項をご記入の上、送信ください。</p>
            <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBottomLastName">
                    <Form.Control type="text" placeholder="姓" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBottomFirstName">
                    <Form.Control type="text" placeholder="名" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formBottomCompanyName">
                <Form.Control type="text" placeholder="会社名" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBottomEmail">
                <Form.Control type="email" placeholder="会社のメールアドレス" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBottomPhone">
                <Form.Control type="tel" placeholder="電話番号（ハイフンなし）" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBottomDepartment">
                <Form.Select>
                  <option>部門を選択してください</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBottomPosition">
                <Form.Select>
                  <option>役職を選択してください</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBottomPurpose">
                <Form.Select>
                  <option>資料請求の目的を教えてください</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBottomPrivacy">
                <Form.Check type="checkbox" label="プライバシーポリシーに同意する" />
              </Form.Group>
              <div className="d-grid">
                <Button variant="info" type="submit" className="text-white">
                  サービス資料をダウンロードする
                </Button>
              </div>
              <p className="text-center small mt-3">フォーム送信完了後、PDFファイルのダウンロードができます。</p>
            </Form>
          </Col>
        </Row>
        <div className={styles.finalCta}>
            <Button href="#form-bottom" variant="dark" size="lg">お問い合わせはこちら</Button>
            <div className={styles.phoneInfo}>
                <span className={styles.phoneNumber}>📞 0123-456-7890</span>
                <span className={styles.businessHours}>平日 00:00~00:00</span>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;

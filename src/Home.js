import React from 'react';
import { Row, Col }  from 'react-bootstrap';

export const Home = () => (
  <Row>
    <Col md={{ span: 8, offset: 2 }}>
    <h2>Hello World!</h2>
    <h3>About me: </h3>
    <p>I work as a Front End developer and I really enjoy it. I love learning new ways of making interactive websites and I have a keen interest in web accessibility, good web design, mobile reponsiveness.</p>
    </Col>
   </Row>
)

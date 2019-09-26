import React from 'react';
import { Row, Col }  from 'react-bootstrap';


export const Footer = () => (
    <footer>
        <Row>
            <Col className="md-6 d-flex justify-content-center align-items-center">
                <p>Find me on linkedin and twitter</p>
            </Col>
            <Col className="md-6 d-flex justify-content-center">
                <p>&copy;2019 Andrea Hurren.</p>
            </Col>
        </Row>
     </footer>
  )

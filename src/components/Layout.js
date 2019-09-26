import React from 'react';
import { Container } from 'react-bootstrap';

export const Layout = (props) => (
  //we'll wrap layout on main content passing all other functions to layout as childre and layout will render as props
  <div className="main">
    <Container>
      {props.children}
    </Container>
  </div>
)

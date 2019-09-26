import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import HeroNew from '../assets/HeroNew.jpg';


const Styles = styled.div`
  .jumbo {
    background: url(${HeroNew}) no-repeat fixed top;
    background-size: cover;
    color: #efefef;
    height: 400px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo d-flex align-items-center">
      <div className="overlay"></div>
      <Container>
        <h1 className="jumbo__container">Hello! I'm Andrea</h1>
        
      </Container>
    </Jumbo>
  </Styles>
)

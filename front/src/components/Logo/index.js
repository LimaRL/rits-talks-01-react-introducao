import React from 'react';

import LogoImg from '../../assets/logo.png';

import { Container } from './styles';

function Logo() {
  return (
    <Container>
      <img src={LogoImg} alt="logo" />
    </Container>
  );
}

export default Logo;

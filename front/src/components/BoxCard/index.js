import React from 'react';

import { Container, Title, Content } from './styles';

function BoxCard({ title, children, classContent = '' }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Content className={classContent}>{children}</Content>
    </Container>
  );
}

export default BoxCard;

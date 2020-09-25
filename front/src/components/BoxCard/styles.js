import styled from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin-bottom: 8px;
  text-transform: uppercase;
  font-size: 22px;
`;

export const Content = styled.div`
  border-radius: 3px;
  background-color: ${props =>
    transparentize('0.95', props.theme.colors.backgroundBox)};

  &.no-bg {
    background-color: transparent;
  }
`;

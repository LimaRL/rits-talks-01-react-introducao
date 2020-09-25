import styled from 'styled-components';

export const Table = styled.div``;

export const TableCol = styled.div`
  padding: 8px 10px;
  font-size: 14px;
  text-align: center;
  flex: 1;
`;

export const TableLine = styled.div`
  display: flex;

  &.head {
    ${TableCol} {
      font-size: 16px;
      text-transform: uppercase;
    }
  }
`;

import styled from 'styled-components';

export const Menu = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
`;
export const MenuItem = styled.li`
  margin-left: 16px;

  a {
    color: ${({ theme }) => theme.colors.textColor};
    text-decoration: none;
  }
`;

import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 24px;
  padding-left: 25px;
`;

export const ListItem = styled.li`
  font-size: 14px;
  line-height: 150%;
  color: #C8C9DA;
  margin-bottom: 20px;

  &::before {
    content: '';
    position: absolute;
    margin: 12px 0 0 -10px;
    width: 4px;
    height: 4px;
    transform: translateY(-50%);
    background-color: #7AF5BF;
    border-radius: 50%;
  }
`;

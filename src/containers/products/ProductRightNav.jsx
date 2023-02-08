import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (min-width: 550px) {
    display:none;
  }

  @media (max-width: 550px) {
    flex-flow: column nowrap;
    background-color: #C9D7E3;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 10.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #333;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>依照媒材篩選</li>
      <li>依照風格篩選</li>
      <li>依照色系篩選</li>
      <li>依照尺寸篩選</li>
      <li>依照金額篩選</li>
    </Ul>
  )
}

export default RightNav
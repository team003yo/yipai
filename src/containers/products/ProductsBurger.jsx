import { useState } from 'react';
import styled from 'styled-components';
import ProductRightNav from './ProductRightNav';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  right: 20px;
  z-index: 10;
  display: none;


  @media (max-width: 550px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 1000;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const ProductsBurger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <ProductRightNav open={open}/>
    </>
  )
}

export default ProductsBurger;
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import styled from "styled-components";

const CartCountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <Wrapper className="cart-button">
      <div className="count-toggle">
        <button onClick={() => setDecrease()}>
          <FaMinus className="minus" />
        </button>
        <div className="count-style">{amount}</div>
        <button onClick={() => setIncrease()}>
          <FaPlus className="plus" />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .count-toggle {
    margin: 2rem 0;
    margin-left: 0.2rem;
    display: flex;
    gap: 1.5rem;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.4rem;

    button {
      display: flex;
      border-radius: 50%;
      border: none;
      background-color: #fff;
      cursor: pointer;

      &:active {
        color: red;
      }
    }

    .count-style {
      border-radius: 50%;
      font-size: 1.8rem;
      font-weight: 600;
      color: #088178;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .count-toggle .count-style {
      font-size: 1.8rem;
    }
    
    .minus,
    .plus {
      width: 1.2rem;
    }
  }
`;

export default CartCountToggle;

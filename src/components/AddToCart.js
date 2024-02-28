import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";
import { useDataContext } from "../context/ContextProvider";
import Loading from "./Loading";
import CartCountToggle from "./CartCountToggle";
import { NavLink } from "react-router-dom";

const AddToCart = ({ product }) => {
  const { isLaoding } = useDataContext();

  const { id, colors, stock } = product;

  const [color, setColor] = useState(colors[0]);
  const [count, setCount] = useState(1);

  const setDecrease = () => {
    count > 1 ? setCount(count - 1) : setCount(1);
  };

  const setIncrease = () => {
    count < stock ? setCount(count + 1) : setCount(stock);
  };

  if (isLaoding) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <div className="colors">
        <p>
          Color:
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}
              >
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>
      <CartCountToggle
        count={count}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <NavLink to="/cart">
        <button className="cart-btn">Add to Cart</button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1.4rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
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
      font-size: 2rem;
      font-weight: 600;
      width: 20px;
      height: 20px;
      text-align: center;
      color: #088178;
    }
  }

  /* cart */
  .cart-btn {
    font-size: 1.4rem;
    font-weight: 600;
    padding: 1.5rem 3rem;
    border-radius: 4px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s;
    background-color: #088178;
    color: #fff;
  }
`;

export default AddToCart;

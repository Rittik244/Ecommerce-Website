import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";
import { useDataContext } from "../context/ContextProvider";
import Loading from "../Helper/Loading";
import CartCountToggle from "./CartCountToggle";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const AddToCart = ({ product }) => {
  const { isLaoding } = useDataContext();
  const { addToCart } = useCartContext();
  const { id, colors, stock } = product;

  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
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
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <NavLink to="/cart" onClick={() => addToCart(id, color, amount, product)}>
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

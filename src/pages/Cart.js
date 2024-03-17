import React from "react";
import { useCartContext } from "../context/CartContext";
import styled from "styled-components";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helper/FormatPrice";

const Cart = () => {
  document.title = "Cart | Dream Designers";

  const { cart, clearCart, total_amount, shipping_fee } = useCartContext();

  return (
    <Wrapper>
      {cart.length === 0 ? (
        // Empty Cart Code
        <div className="empty-cart-container">
          <img
            src="/images/sad-cat.gif"
            alt="Empty Cart"
            className="empty-cart-icon"
          />
          <p className="empty-cart-message">Your cart is empty!</p>
          <p>Add something to make me happy :)</p>
          <NavLink to="/products">
            <button className="btn continue-shopping-btn">
              continue shopping
            </button>
          </NavLink>
        </div>
      ) : (
        // Main Cart Code
        <div className="container">
          <div className="cart_heading grid grid-five-column">
            <p>Product</p>
            <p className="cart-hide">Price</p>
            <p>Quantity </p>
            <p className="cart-hide">Subtotal</p>
            <p>Remove</p>
          </div>
          <hr />
          <div className="cart-item">
            {cart.map((ele) => {
              return <CartItem key={ele.id} {...ele} />;
            })}
          </div>
          {/* <hr /> */}
          <div className="clear-cart--continue">
            <NavLink to="/products">
              <button className="btn continue-shopping-btn">
                continue shopping
              </button>
            </NavLink>
            <button className="btn clear-cart-btn" onClick={clearCart}>
              clear cart
            </button>
          </div>
          <div className="order-total--amount">
            <div className="order-total--subdata">
              <div>
                <p>subtotal:</p>
                <p>
                  <FormatPrice price={total_amount} />
                </p>
              </div>
              <div>
                <p>shipping charge:</p>
                <p>
                  <FormatPrice price={shipping_fee} />
                </p>
              </div>
              <hr />
              <div>
                <p>total:</p>
                <p>
                  <FormatPrice price={total_amount + shipping_fee} />
                </p>
              </div>
            </div>
            <button disabled className="btn check-out-btn">
              proceed to check out
            </button>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* EMPTY CART CONTAINER STYLE */
  .empty-cart-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .empty-cart-icon {
    mix-blend-mode: color-burn;
    width: 300px;
    height: auto;
    margin-bottom: 20px;
    animation: bounce 1s infinite alternate;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-5px);
    }
  }

  .empty-cart-message {
    font-weight: 600;
    font-size: 24px;
    color: #555;
  }

  p {
    text-transform: capitalize;
  }

  /* MAIN CART STYLE */

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    align-items: center;
  }

  .cart_heading {
    margin-bottom: 0.5rem;
    text-transform: uppercase;

    > p {
      text-transform: uppercase;
    }
  }

  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    /* gap: 3rem; */
  }

  .clear-cart--continue {
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
  }

  /* BUTTONS STYLING */
  .btn {
    font-weight: 500;
    letter-spacing: 1px;
    font-size: 1.5rem;
    text-transform: capitalize;
  }

  .continue-shopping-btn,
  .check-out-btn {
    background-color: #de3163;

    &:hover {
      background-color: #c21e56;
    }
  }

  .clear-cart-btn {
    background-color: #ee4b2b;

    &:hover {
      background-color: #d22b2b;
    }
  }

  /* SUB-TOTAL STYLING */
  .order-total--amount {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    margin: 4.8rem 0;

    .order-total--subdata {
      border: 0.2rem solid #f0f0f0;
      padding: 1.2rem 3.2rem;

      div {
        display: flex;
        justify-content: space-between;
        gap: 5rem;
        margin: 2rem 0;
      }

      div p:last-child {
        font-weight: 600;
      }

      div:last-child {
        background-color: #fafafa;
      }
    }

    .check-out-btn {
      margin: 5rem 2rem 0 0;
    }
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }

    h2 {
      font-size: 2.4rem;
    }
  }

  .cart-user--name {
    text-transform: capitalize;
  }

  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;

    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 0.8fr 0.8fr 0.8fr 0.4fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.6fr;
    }

    .cart-hide {
      display: none;
    }

    /* IN CART_ITEM COMPONENT */
    .cart-image--name {
      figure img {
        max-width: 7rem;
        height: auto;
      }

      p {
        font-size: 1.4rem;
      }
    }

    /* IN CART_ITEM COMPONENT */
    .remove-icon {
      width: 1.8rem;
    }

    .clear-cart--continue {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .continue-shopping-btn,
    .clear-cart-btn,
    .check-out-btn {
      padding: 1.2rem 1.5rem;
      letter-spacing: 0.5px;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.small_devices}) {
    .container {
      padding: 0 2.2rem;
    }

    .grid-five-column {
      grid-template-columns: 1fr 0.8fr 0.5fr;
      gap: 3rem;
    }

    .cart-image--name {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .empty-cart-container img {
      width: 250px;
    }
  }
`;

export default Cart;

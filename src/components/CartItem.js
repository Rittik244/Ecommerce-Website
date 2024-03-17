import styled from "styled-components";
import FormatPrice from "../Helper/FormatPrice";
import { MdDelete } from "react-icons/md";
import CartCountToggle from "./CartCountToggle";
import { useCartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";

const CartItem = ({ id, name, price, color, image, amount, stock }) => {
  const { removeItem, setDecrease, setIncrease } = useCartContext();

  return (
    <Wrapper>
      <div className="cart_heading grid grid-five-column">
        <div className="cart-image--name">
          <div>
            <NavLink to={`/singleproduct/${id}`}>
              <figure>
                <img src={image} alt={name} />
              </figure>
            </NavLink>
          </div>
          <div>
            <p>{name}</p>
            <div className="color-div">
              <p>color:</p>
              <div
                className="color-style"
                style={{ backgroundColor: color }}
              ></div>
            </div>
          </div>
        </div>
        <div className="div-price cart-hide">
          <p>
            <FormatPrice price={price} />
          </p>
        </div>
        <div className="div-quantity">
          <CartCountToggle
            amount={amount}
            setDecrease={() => setDecrease(id)}
            setIncrease={() => setIncrease(id)}
          />
        </div>
        <div className="div-subtotal cart-hide">
          <p>
            <FormatPrice price={price * amount} />
          </p>
        </div>
        <div className="remove">
          <MdDelete className="remove-icon" onClick={() => removeItem(id)} />
        </div>
      </div>
      <hr />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  hr {
    border-style: groove;
    margin: 2rem 0;
  }

  .cart-image--name {
    display: flex;
    align-items: center;
    gap: 1rem;
    /* margin-top: 2rem; */

    figure img {
      border-radius: 3px;
      max-width: 9rem;
      height: 6rem;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }

  .remove-icon {
    width: 25px;
    height: 25px;
    color: #ee4b2b;
    cursor: pointer;

    &:hover {
      color: #d22b2b;
    }
  }
`;

export default CartItem;

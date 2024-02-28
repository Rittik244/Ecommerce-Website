import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartCountToggle = ({ count, setDecrease, setIncrease }) => {
  return (
    <div className="cart-button">
      <div className="count-toggle">
        <button onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div className="count-style">{count}</div>
        <button onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartCountToggle;

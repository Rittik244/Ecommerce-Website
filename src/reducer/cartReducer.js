const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { id, color, amount, product } = action.payload;

      let existingProduct = state.cart.find((ele) => ele.id === id + color);

      if (existingProduct) {
        let updatedProduct = state.cart.map((ele) => {
          if (ele.id === id + color) {
            let newAmount = ele.amount + amount;

            if (newAmount >= ele.max) {
              newAmount = ele.max;
            }

            return {
              ...ele,
              amount: newAmount,
            };
          } else {
            return ele;
          }
        });

        return {
          ...state,
          cart: updatedProduct,
        };
      } else {
        let cartProduct = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.image[0].url,
          price: product.price,
          max: product.stock,
        };

        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }

    case "REMOVE_ITEM":
      let updatedCart = state.cart.filter((ele) => ele.id !== action.payload);

      return {
        ...state,
        cart: updatedCart,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "SET_DECREASE":
      let decUpdatedProduct = state.cart.map((ele) => {
        if (ele.id === action.payload) {
          let decAmount = ele.amount - 1;

          if (decAmount <= 1) decAmount = 1;

          return {
            ...ele,
            amount: decAmount,
          };
        } else return ele;
      });
      return {
        ...state,
        cart: decUpdatedProduct,
      };

    case "SET_INCREASE":
      let incUpdatedProduct = state.cart.map((ele) => {
        if (ele.id === action.payload) {
          let incAmount = ele.amount + 1;

          if (incAmount >= ele.max) incAmount = ele.max;

          return {
            ...ele,
            amount: incAmount,
          };
        } else return ele;
      });
      return {
        ...state,
        cart: incUpdatedProduct,
      };

    case "CART_TOTAL_ITEM":
      let totalItemVal = state.cart.reduce((initialVal, ele) => {
        let { amount } = ele;

        initialVal += amount;
        return initialVal;
      }, 0);

      return {
        ...state,
        total_item: totalItemVal,
      };

    case "CART_TOTAL_AMOUNT":
      let totalAmountVal = state.cart.reduce((initialVal, ele) => {
        let { price, amount } = ele;

        initialVal += price * amount;

        return initialVal;
      }, 0);

      return {
        ...state,
        total_amount: totalAmountVal,
      };

    default:
      return state;
  }
};

export default cartReducer;

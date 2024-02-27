const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case "SET_API_DATA":
      const featureData = action.payload.filter((ele) => {
        return ele.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: true,
      }
    
    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      }

    case "SET_SINGLE_ERROR":
      return{
        ...state,
        isSingleLoading: false,
        isError: true,
      }

    default:
      return { ...state };
  }
};

export default productReducer;

const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let allPrices = action.payload.map((ele) => ele.price);

      const maxPrice = Math.max(...allPrices);
      // const minPrice = Math.min(...allPrices);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: {
          ...state.filters,
          price: maxPrice,
          maxPrice,
        },
      };

    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LISTVIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORTED_VALUE":
      // let userSortedValue = document.getElementById("sort");
      // let sort_value =
      //   userSortedValue.options[userSortedValue.selectedIndex].value;

      // console.log("Sorted Values =>", sort_value);

      return {
        ...state,
        sorted_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortedData;

      const { filter_products, sorted_value } = state;
      let tempSortedData = [...filter_products];

      const sortingProducts = (a, b) => {
        switch (sorted_value) {
          case "lowest":
            return a.price - b.price;

          case "highest":
            return b.price - a.price;

          case "a-z":
            return a.name.localeCompare(b.name);

          case "z-a":
            return b.name.localeCompare(a.name);

          default:
            return tempSortedData;
        }
      };

      newSortedData = tempSortedData.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortedData,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, category, company, colors, price } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((ele) => {
          return ele.name.toLowerCase().includes(text.toLowerCase());
        });
      }

      if (category !== "all") {
        tempFilterProduct = tempFilterProduct.filter((ele) => {
          return ele.category.toLowerCase() === category.toLowerCase();
        });
      }

      if (company !== "all") {
        tempFilterProduct = tempFilterProduct.filter((ele) => {
          return ele.company.toLowerCase() === company.toLowerCase();
        });
      }

      if (colors !== "all") {
        tempFilterProduct = tempFilterProduct.filter((ele) => {
          return ele.colors.includes(colors);
        });
      }

      if (price === 0) {
        tempFilterProduct = tempFilterProduct.filter((ele) => {
          return ele.price === price;
        });
      } else {
        tempFilterProduct = tempFilterProduct.filter((ele) => {
          return ele.price <= price;
        });
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          colors: "all",
          maxPrice: state.filters.maxPrice,
          price: state.filters.maxPrice,
          minPrice: 0,
        },
      };

    default:
      return state;
  }
};

export default filterReducer;

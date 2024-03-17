import { createContext, useContext, useEffect, useReducer } from "react";
import { useDataContext } from "./ContextProvider";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorted_value: "",
  filters: {
    text: "",
    category: "all",
    company: "all",
    colors: "all",
    price: 0,
    maxPrice: 0,
    minPrice: 0,
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useDataContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  };

  const setListView = () => {
    return dispatch({ type: "SET_LISTVIEW" });
  };

  // function for sorting products in product page
  const Sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORTED_VALUE", payload: userValue });
  };

  // function for updating filter search values
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  // function for clear all filters
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sorted_value, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        Sorting,
        updateFilterValue,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

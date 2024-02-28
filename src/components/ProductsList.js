import React from "react";
import { useFilterContext } from "../context/FilterContext";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductsList = () => {
  const { filter_products, setGridView } = useFilterContext();

  if(setGridView){
    return <GridView product={filter_products} />
  }

  if(setGridView === false){
    return <ListView product={filter_products} />
  }

};

export default ProductsList;

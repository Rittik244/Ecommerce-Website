import React from "react";
import styled from "styled-components";
import ProductFilterSection from "../components/ProductFilterSection";
import ProductSorting from "../components/ProductSorting";
import ProductsList from "../components/ProductsList";

const Products = () => {
  document.title = "Products - EcomSite";

  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <ProductFilterSection />
        </div>
        <section className="product-view--sort">
          <div className="sort-filter">
            <ProductSorting />
          </div>
          <div className="main-product">
            <ProductsList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;

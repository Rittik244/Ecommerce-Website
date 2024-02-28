import React from "react";
import Product from "./Product";
import styled from "styled-components";

const GridView = ({ product }) => {
  return (
    <Wrapper>
      <div className="container grid grid-three-column">
        {product.map((ele) => {
          return <Product key={ele.id} {...ele} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 8rem 0;
  /* background-color: ${({ theme }) => theme.colors.bg}; */

  .container {
    max-width: 120rem;
  }
`;

export default GridView;

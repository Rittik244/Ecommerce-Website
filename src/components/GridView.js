import React from "react";
import Product from "./Product";
import styled from "styled-components";
import { useDataContext } from "../context/ContextProvider";
import Loading from "../Helper/Loading";

const GridView = ({ products }) => {
  const { isLoading } = useDataContext();

  return (
    <Wrapper className="section">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container grid grid-three-column">
          {products.map((ele) => {
            return <Product key={ele.id} {...ele} />;
          })}
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 8rem 0;
  /* background-color: ${({ theme }) => theme.colors.bg}; */

  .container {
    max-width: 120rem;
  }
  
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid{
      grid-template-columns: repeat(2, .6fr);
      justify-content: center;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid{
      grid-template-columns: 1fr;
    }
  }
`;

export default GridView;

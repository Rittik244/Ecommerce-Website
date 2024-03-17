import styled from "styled-components";
import { useDataContext } from "../context/ContextProvider";
import Loading from "../Helper/Loading";
import { FaStar, FaCartShopping } from "react-icons/fa6";
import Product from "./Product";

const FeatureProducts = () => {
  const { isLoading, featureProducts } = useDataContext();

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <Wrapper>
      <div className="feature-main--container">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="container">
            {/* <div className="intro-data">Check Now!</div> */}
            <div className="common-heading">Feature Products</div>
            <div className="grid grid-three-column" /* className="con" */>
              {featureProducts.map((ele) => {
                return <Product key={ele.id} {...ele} />;
              })}
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .feature-main--container {
    padding: 8rem;
    background-color: ${({ theme }) => theme.colors.bg};
  }

  .common-heading {
    text-align: center;
  }

  .container {
    max-width: 120rem;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .feature-main--container {
      padding: 8rem 1rem;
    }
  }

  /* @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .feature-main--container{
      padding: 8rem 1rem;
    }
  } */
`;

export default FeatureProducts;

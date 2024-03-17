import React from "react";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import styled from "styled-components";
import FormatPrice from "../Helper/FormatPrice";

// ? ===========================================================================
// ! For Stars & Reviews Object

// import { useDataContext } from "../context/ContextProvider";
// import StarRating from "./StarRating";

// ? ===========================================================================

// ! we don't need {useDataContext} in this component, only imported because of {stars} and {reviews} object

// const { singleProduct} = useDataContext();

// const {stars, reviews} = singleProduct;
// ? =========================================================================

const Product = (ele) => {
  const { id, name, image, price, category, company } = ele;

  return (
    <Wrapper>
      <NavLink className="pro-container" to={`/singleproduct/${id}`}>
        <div className="pro">
          <figure>
            <img src={image} alt={name} />
            <figcaption className="caption">{category}</figcaption>
          </figure>
          <div className="description">
            <p className="common-desc">{company}</p>
            <h5 className="common-desc">{name}</h5>
            {/* <div className="star common-desc">
                            <StarRating stars={stars} reviews={reviews} />
                        </div> */}
            <h4 className="common-desc">
              <FormatPrice price={price} />
            </h4>
          </div>
          <button disabled className="add-to-cart-container">
            <FaCartShopping className="add-to-cart" />
          </button>
        </div>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .pro-container {
    z-index: -10;
    display: flex;
    transition: all 0.4s;

    &:hover {
      transform: translateY(-5px);
    }

    .pro {
      width: 100%;
      /* min-width: 10px; */
      /* height: 50vh; */
      padding: 10px;
      border: 1px solid #cce7d0;
      border-radius: 15px;
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.03);
      margin: 15px 0;
      position: relative;
      transition: all 0.3s;

      &:hover {
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.07);
      }

      img {
        /* margin-top: 10px; */
        width: 100%;
        border-radius: 10px;
      }

      .caption {
        top: 6%;
        right: 5%;
        background-color: #cce7d0;
        color: #415161;
        font-weight: 600;
      }

      .description {
        text-align: start;
        padding: 10px 0;

        .common-desc {
          text-transform: capitalize;
          margin-bottom: 4px;
        }

        p {
          color: #606063;
          font-size: 1.3rem;
        }

        h5 {
          font-size: 1.6rem;
          color: #1a1a1a;
        }

        .star-icon {
          color: rgb(243, 181, 25);
          width: 17px;
          height: 17px;
        }

        h4 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #088178;
        }
      }

      .add-to-cart-container {
        width: 40px;
        height: 40px;
        background-color: #e8f6ea;
        border-radius: 50%;
        border: 1px solid #cce7d0;
        position: absolute;
        bottom: 6%;
        right: 3%;
        padding: 8px;
        transition: all 0.3s;
        cursor: not-allowed;

        &:hover {
          border-color: #088178;
        }

        .add-to-cart {
          color: #088178;
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .pro-container .pro .caption {
      right: 8%;
      top: 7%;
      font-size: 1rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .pro-container .pro .caption {
      right: 6%;
      top: 6%;
      font-size: 1.2rem;
    }
  }
`;

export default Product;

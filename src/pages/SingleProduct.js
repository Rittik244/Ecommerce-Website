import { useParams } from "react-router-dom";
import { useDataContext } from "../context/ContextProvider";
import styled from "styled-components";
import { useEffect } from "react";
import Loading from "../Helper/Loading";
import ProductImage from "../components/ProductImage";
import FormatPrice from "../Helper/FormatPrice";
import PageNavigation from "../components/PageNavigation";
import StarRating from "../components/StarRating";
import AddToCart from "../components/AddToCart";

import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useDataContext();

  const { id } = useParams();

  const {
    id: proid,
    name,
    price,
    company,
    image,
    // category,
    description,
    stars,
    stock,
    reviews,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      {/* Page Navigation tag */}
      <PageNavigation title={name} />
      <div className="container">
        <div className="grid grid-two-column">
          <div className="product-images">
            <ProductImage imgs={image} />
          </div>
          <div className="product-data">
            <h2>{name}</h2>
            <StarRating stars={stars} reviews={reviews} />
            <p className="product-data-price">
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className="product-data-real-price">
              Deal of the Day : <FormatPrice price={price} />
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>7 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <GiTakeMyMoney className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <MdOutlineSecurity className="warranty-icon" />
                <p>2 Year Warranty</p>
              </div>
            </div>
            <div className="product-data-info">
              <p>
                Available :
                <span>{stock > 0 ? " In Stock" : " Not Available"}</span>
              </p>
              <p>
                ID : <span> {id}</span>
              </p>
              <p>
                Brand :{" "}
                <span style={{ textTransform: "capitalize" }}> {company}</span>
              </p>
            </div>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    width: 100%;
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    h2 {
      text-transform: capitalize;
    }

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;
      .product-warranty-data {
        text-align: center;
        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }
    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;
      span {
        font-weight: bold;
      }
    }
    hr {
      max-width: 100%;
      width: 100%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;

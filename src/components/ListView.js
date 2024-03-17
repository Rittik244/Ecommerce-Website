import React from "react";
import styled from "styled-components";
import FormatPrice from "../Helper/FormatPrice";
import { NavLink } from "react-router-dom";

const ListView = ({ products }) => {
  return (
    <Wrapper>
      <div className="container grid">
        {products.map((ele) => {
          const { id, name, price, image, description } = ele;
          return (
            <div className="card grid grid-two-column" key={id}>
              <figure>
                <NavLink to={`/singleproduct/${id}`}>
                  <img src={image} alt={name} />
                </NavLink>
              </figure>
              <div className="card-data">
                <h3>{name}</h3>
                <p>
                  <FormatPrice price={price} />
                </p>
                <p>{description.slice(0, 90)}...</p>
                <NavLink to={`/singleproduct/${id}`}>
                  <button className="btn">Read More</button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 8rem 0;

  .container {
    max-width: 120rem;
  }

  .grid {
    gap: 3.2rem;
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    border-radius: 6px;

    figure {
      width: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      transition: all 0.5s linear;

      img {
        border-radius: 6px;
        max-width: 90%;
        margin: 1.5rem;
        height: 20rem;
        transition: all 0.3s linear;
        cursor: pointer;

        &:hover {
          transform: scale(1.05);
        }
      }
    }

    .card-data {
      padding: 0 2rem;

      h3 {
        margin: 2rem 0;
        font-weight: 300;
        font-size: 2.4rem;
        text-transform: capitalize;
      }

      .btn {
        margin: 2rem 0;
        background-color: rgb(0 0 0 / 0%);
        border: 0.1rem solid #088178;
        color: #088178;
        transition: all 0.3s;
        letter-spacing: 1px;

        &:hover {
          background-color: #088178;
          color: #fff;
        }
      }
    }
  }
`;

export default ListView;

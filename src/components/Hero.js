import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaAngleDoubleRight } from "react-icons/fa";

const Hero = ({ myData }) => {
  const { name } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <div className="main-heading">
              <h1>{name}</h1>
            </div>
            <div className="sub-heading-container">
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </h3>
              <NavLink to="/products">
                <span>Explore Store</span>
                <FaAngleDoubleRight className="arrow-icon" />
              </NavLink>
            </div>
            {/* <button>
                            <spna className="text">Explore Store</spna>
                            <FaAngleDoubleRight className='arrow-icon' />
                        </button> */}
          </div>
          <div className="hero-section-image">
            <figure>
              <img
                src="images/heroImg.png"
                alt="hero-image"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1rem;

  .hero-section-data {
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      text-transform: uppercase;
      color: #415161;
    }

    h3 {
      color: #626e79;
      line-height: 30px;
      margin: 10px 0 60px;
    }

    a {
      color: #626e79;
      border: 2px solid #415161;
      border-left: none;
      padding: 11px 25px 11px 5px;
      font-size: 2rem;
      border-radius: 3px;
      text-transform: uppercase;

      span {
        font-size: 1.4rem;
        vertical-align: middle;
        position: relative;
      }

      .arrow-icon {
        width: 1.6rem;
        height: 1.6rem;
        vertical-align: middle;
        margin-left: 15px;
        transition: all 0.3s ease;
      }

      &:hover .arrow-icon {
        transform: translateX(5px);
      }

      &:active {
        color: cornflowerblue;
        border-color: cornflowerblue;
      }
    }
  }

  img {
    width: 100%;
    /* min-width: 10rem;
    height: 15rem; */
  }
`;

export default Hero;

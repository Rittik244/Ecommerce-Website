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
          </div>
          <div className="hero-section-image">
            <figure>
              <img
                src="images/heroImg.png"
                alt="heroImage"
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
  padding: 8rem 1rem;

  .hero-section-data {
    padding: 50px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      text-transform: uppercase;
      color: #415161;
      font-size: 6rem;
    }

    h3 {
      color: #626e79;
      line-height: 30px;
      margin: 10px 0 60px;
      font-size: 1.8rem;
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

  .hero-section-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    
    .hero-section-data {
      padding: 50px 0;
      h1 {
        font-size: 4rem;
      }
      h3{
        font-size: 1.6rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 5rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }

  @media (max-width: ${({ theme }) => theme.media.small_devices}) {
    .container{
      padding: 0 2rem;
    }

    .hero-section-data{
      padding: 3rem 0;
      h1{
        font-size: 3.5rem;
      }
    }
  }
`;

export default Hero;

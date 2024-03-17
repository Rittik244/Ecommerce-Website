import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  document.title = "Error | Dream Designers";

  return (
    <Wrapper>
      <div className="error-container">
        <div className="error-message">
          <h1>404</h1>
          <h2>Oops! Page not found.</h2>
          <p>
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </div>
        <div className="btn">
          <NavLink to="/">
            <button>Go to Home</button>
          </NavLink>
        </div>
        {/* <div className="error-image">
            <img src="/images/404.jpg" alt="404 Error" />
          </div> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .error-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 50vh;

    .error-message {
      margin-bottom: 3rem;
      text-align: center;
      margin-right: 50px; /* Adjust as needed */

      h1 {
        font-size: 100px;
        color: #ff5e5e; /* Red color, adjust as needed */
      }

      h2 {
        font-size: 36px;
        margin-bottom: 20px;
      }

      p {
        font-size: 18px;
      }
    }

    /* .error-image img {
    max-width: 400px;
    max-height: 400px;
  } */

    button {
      padding: 1rem 2rem;
      border-radius: 25px;
      border: none;
      background-color: #415161;
      color: #fff;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background-color: #ff5e5e;
      }

      &:active {
        background-color: #088178;
      }
    }
  }
`;

export default ErrorPage;
